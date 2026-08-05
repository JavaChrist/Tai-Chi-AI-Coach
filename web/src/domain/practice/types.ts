import type { SessionStep, SessionTemplate } from "@/domain/curriculum/types";

/**
 * Exécution locale d’une séance (`PracticeSession` conceptuel — D-088).
 * Non persistée (MVP-005) : mémoire de page uniquement.
 */

export type PracticePhase =
  | "intro"
  | "step"
  | "summary";

export type PracticeStatus =
  | "ready"
  | "running"
  | "paused"
  | "completed"
  | "abandoned";

export type PracticeEndReason = "completed" | "abandoned";

export type LocalPracticeSession = {
  id: string;
  templateId: string;
  templateVersion: string;
  templateTitle: string;
  steps: SessionStep[];
  status: PracticeStatus;
  phase: PracticePhase;
  /** Index dans `steps` lorsque phase === "step". */
  currentStepIndex: number;
  completedStepIds: string[];
  startedAt: number | null;
  endedAt: number | null;
  /** Temps actif cumulé (hors pause), en ms. */
  activeElapsedMs: number;
  /** Horodatage du début du segment actif courant. */
  activeSegmentStartedAt: number | null;
  endReason: PracticeEndReason | null;
};

export type PracticeSummary = {
  templateId: string;
  templateTitle: string;
  endReason: PracticeEndReason;
  stepsTotal: number;
  stepsCompleted: number;
  activeElapsedMs: number;
  plannedDurationMinutes: number;
};

export type PracticeTemplateSnapshot = Pick<
  SessionTemplate,
  "id" | "title" | "contentVersion" | "plannedDurationMinutes" | "objectives" | "steps" | "isStructuralPlaceholder"
>;
