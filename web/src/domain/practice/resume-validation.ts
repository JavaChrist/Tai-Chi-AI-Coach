import type { PracticeTemplateSnapshot } from "@/domain/practice/types";
import type { PracticeResumeState } from "@/domain/practice/resume-types";

function isResumePhase(value: unknown): value is PracticeResumeState["phase"] {
  return value === "intro" || value === "step";
}

function isResumeStatus(
  value: unknown,
): value is PracticeResumeState["status"] {
  return value === "running" || value === "paused";
}

/** Parse + validation structurelle d’un snapshot brut. */
export function parsePracticeResumeState(
  value: unknown,
): PracticeResumeState | null {
  if (!value || typeof value !== "object") return null;
  const c = value as Record<string, unknown>;

  if (c.version !== 1) return null;
  if (typeof c.practiceSessionId !== "string" || !c.practiceSessionId) return null;
  if (typeof c.sessionTemplateId !== "string" || !c.sessionTemplateId) {
    return null;
  }
  if (typeof c.templateVersion !== "string" || !c.templateVersion) return null;
  if (!isResumePhase(c.phase)) return null;
  if (typeof c.currentStepIndex !== "number" || !Number.isFinite(c.currentStepIndex)) {
    return null;
  }
  if (c.currentStepId !== null && typeof c.currentStepId !== "string") {
    return null;
  }
  if (!Array.isArray(c.completedStepIds)) return null;
  if (!c.completedStepIds.every((id) => typeof id === "string")) return null;
  if (!isResumeStatus(c.status)) return null;
  if (typeof c.activeElapsedMs !== "number" || !Number.isFinite(c.activeElapsedMs)) {
    return null;
  }
  if (c.startedAt !== null && typeof c.startedAt !== "number") return null;
  if (typeof c.stepsTotal !== "number" || !Number.isFinite(c.stepsTotal)) {
    return null;
  }
  if (typeof c.updatedAt !== "number" || !Number.isFinite(c.updatedAt)) {
    return null;
  }

  return {
    version: 1,
    practiceSessionId: c.practiceSessionId,
    sessionTemplateId: c.sessionTemplateId,
    templateVersion: c.templateVersion,
    phase: c.phase,
    currentStepIndex: Math.max(0, Math.floor(c.currentStepIndex)),
    currentStepId: c.currentStepId,
    completedStepIds: c.completedStepIds,
    status: c.status,
    activeElapsedMs: Math.max(0, c.activeElapsedMs),
    startedAt: c.startedAt,
    stepsTotal: Math.max(0, Math.floor(c.stepsTotal)),
    updatedAt: c.updatedAt,
  };
}

/**
 * Valide un snapshot contre un template courant.
 * Retourne le snapshot si compatible, sinon null.
 */
export function validateResumeAgainstTemplate(
  resume: PracticeResumeState,
  template: PracticeTemplateSnapshot,
): PracticeResumeState | null {
  if (resume.sessionTemplateId !== template.id) return null;
  if (resume.templateVersion !== template.contentVersion) return null;

  const steps = [...template.steps].sort((a, b) => a.sortOrder - b.sortOrder);
  if (resume.stepsTotal !== steps.length) return null;

  if (resume.phase === "intro") {
    if (resume.currentStepIndex !== 0) return null;
    if (resume.currentStepId !== null) return null;
    return resume;
  }

  if (resume.currentStepIndex < 0 || resume.currentStepIndex >= steps.length) {
    return null;
  }
  const step = steps[resume.currentStepIndex];
  if (!step || step.id !== resume.currentStepId) return null;

  for (const id of resume.completedStepIds) {
    if (!steps.some((s) => s.id === id)) return null;
  }

  return resume;
}
