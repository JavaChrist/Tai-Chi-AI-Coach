/**
 * Types F-008 — Suggestion de séance du jour (calculée, non persistée).
 */

/**
 * Suggestion recalculable pour une date civile locale.
 * Ne jamais stocker en localStorage / BDD — toujours dériver via `resolveDailyProgram`.
 */
export type DailyProgramSuggestion = {
  /** Date civile locale `YYYY-MM-DD` (timezone appareil). */
  dateKey: string;
  /** Index dans `BeginnerPath.orderedSessionIds` (0-based). */
  index: number;
  /** SessionTemplate.id sélectionné. */
  sessionId: string;
  /** BeginnerPath.id source du pool. */
  pathId: string;
};
