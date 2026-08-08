import type { LocalPracticeSession } from "@/domain/practice/types";
import type { PracticeResumeState } from "@/domain/practice/resume-types";
import type { PracticeTemplateSnapshot } from "@/domain/practice/types";
import { validateResumeAgainstTemplate } from "@/domain/practice/resume-validation";

/** Construit un snapshot depuis l’état live (hors bilan). */
export function buildResumeSnapshot(
  state: LocalPracticeSession,
  now: number = Date.now(),
): PracticeResumeState | null {
  if (state.phase === "summary") return null;
  if (state.status === "completed" || state.status === "abandoned") return null;
  if (state.status === "ready") return null;
  if (state.phase !== "intro" && state.phase !== "step") return null;
  if (state.status !== "running" && state.status !== "paused") return null;

  const currentStep =
    state.phase === "step" ? state.steps[state.currentStepIndex] : null;

  return {
    version: 1,
    practiceSessionId: state.id,
    sessionTemplateId: state.templateId,
    templateVersion: state.templateVersion,
    phase: state.phase,
    currentStepIndex: state.currentStepIndex,
    currentStepId: currentStep?.id ?? null,
    completedStepIds: [...state.completedStepIds],
    status: state.status,
    activeElapsedMs: state.activeElapsedMs,
    startedAt: state.startedAt,
    stepsTotal: state.steps.length,
    updatedAt: now,
  };
}

/**
 * Restaure un `LocalPracticeSession` depuis un snapshot validé.
 * Retourne null si incompatible.
 */
export function hydratePracticeState(
  template: PracticeTemplateSnapshot,
  resume: PracticeResumeState,
): LocalPracticeSession | null {
  const valid = validateResumeAgainstTemplate(resume, template);
  if (!valid) return null;

  const steps = [...template.steps].sort((a, b) => a.sortOrder - b.sortOrder);

  return {
    id: valid.practiceSessionId,
    templateId: template.id,
    templateVersion: template.contentVersion,
    templateTitle: template.title,
    steps,
    status: valid.status,
    phase: valid.phase,
    currentStepIndex: valid.currentStepIndex,
    completedStepIds: [...valid.completedStepIds],
    startedAt: valid.startedAt,
    endedAt: null,
    activeElapsedMs: valid.activeElapsedMs,
    activeSegmentStartedAt:
      valid.status === "running" ? Date.now() : null,
    endReason: null,
  };
}
