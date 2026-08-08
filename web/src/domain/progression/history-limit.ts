import type { PracticeHistory, PracticeRecord } from "@/domain/progression/types";

/** PO-D — plafond historique local. */
export const PRACTICE_HISTORY_MAX_RECORDS = 200;

/**
 * Conserve au plus `max` entrées les plus récentes (FIFO sur les anciennes).
 * Les records sont déjà ordonnés du plus récent au plus ancien (prepend).
 */
export function trimPracticeHistory(
  records: PracticeRecord[],
  max: number = PRACTICE_HISTORY_MAX_RECORDS,
): PracticeRecord[] {
  if (max < 1) return [];
  if (records.length <= max) return records;
  return records.slice(0, max);
}

export function withTrimmedHistory(
  history: PracticeHistory,
  max: number = PRACTICE_HISTORY_MAX_RECORDS,
): PracticeHistory {
  return {
    version: 1,
    records: trimPracticeHistory(history.records, max),
  };
}
