/**
 * Domaine Progression locale (MVP-006).
 * Aligné conceptuellement sur docs/14 (UserProgress / historique) — sans sync.
 */

export type PracticeRecordStatus = "completed" | "abandoned";

/** Entrée d’historique persistée localement. */
export type PracticeRecord = {
  id: string;
  sessionTemplateId: string;
  sessionTitle: string;
  /** ISO 8601 */
  practicedAt: string;
  durationMs: number;
  status: PracticeRecordStatus;
  stepsCompleted: number;
  stepsTotal: number;
};

export type PracticeHistory = {
  version: 1;
  records: PracticeRecord[];
};

/** Résumé d’une pratique pour affichage liste. */
export type PracticeSummary = {
  id: string;
  sessionTemplateId: string;
  sessionTitle: string;
  practicedAt: string;
  durationMs: number;
  status: PracticeRecordStatus;
  stepsCompleted: number;
  stepsTotal: number;
};

export type UserStatistics = {
  totalSessions: number;
  completedSessions: number;
  totalDurationMs: number;
  averageDurationMs: number;
  lastPracticedAt: string | null;
};

export type RecordPracticeInput = {
  sessionTemplateId: string;
  sessionTitle: string;
  practicedAt?: string;
  durationMs: number;
  status: PracticeRecordStatus;
  stepsCompleted: number;
  stepsTotal: number;
};
