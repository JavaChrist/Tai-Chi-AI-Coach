import type { PracticeHistory } from "@/domain/progression/types";

/**
 * Contrat de stockage progression — localStorage aujourd’hui, Supabase plus tard.
 */
export type ProgressStore = {
  loadHistory: () => PracticeHistory;
  saveHistory: (history: PracticeHistory) => void;
  clearHistory?: () => void;
};
