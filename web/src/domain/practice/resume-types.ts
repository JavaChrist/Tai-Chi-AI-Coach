/**
 * Snapshot de reprise persistante (F-032 / MVP-015).
 * Données minimales — pas de duplication du contenu pédagogique.
 */

export type PracticeResumePhase = "intro" | "step";

export type PracticeResumeStatus = "running" | "paused";

export type PracticeResumeState = {
  version: 1;
  /** Instance de pratique (anti double-écriture). */
  practiceSessionId: string;
  sessionTemplateId: string;
  /** `contentVersion` du template au moment de la sauvegarde. */
  templateVersion: string;
  phase: PracticeResumePhase;
  currentStepIndex: number;
  /** `null` en phase intro. */
  currentStepId: string | null;
  completedStepIds: string[];
  status: PracticeResumeStatus;
  activeElapsedMs: number;
  startedAt: number | null;
  /** Nombre d’étapes du template (abandon hors player). */
  stepsTotal: number;
  updatedAt: number;
};

export const PRACTICE_RESUME_STORAGE_VERSION = 1 as const;
