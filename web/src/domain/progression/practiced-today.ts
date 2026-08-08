import { toLocalDateKey } from "@/domain/daily-program/local-date";
import type { PracticeHistory } from "@/domain/progression/types";

/**
 * PO-F — statut informatif uniquement.
 * Compte une séance `completed` dont `practicedAt` tombe sur la date locale.
 */
export function wasSessionCompletedOnLocalDate(
  history: PracticeHistory,
  sessionTemplateId: string,
  dateKey: string = toLocalDateKey(),
): boolean {
  return history.records.some((record) => {
    if (record.sessionTemplateId !== sessionTemplateId) return false;
    if (record.status !== "completed") return false;
    try {
      return toLocalDateKey(new Date(record.practicedAt)) === dateKey;
    } catch {
      return false;
    }
  });
}
