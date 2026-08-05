import type { PracticeHistory } from "@/domain/progression/types";

/**
 * Contrat de stockage progression — localStorage aujourd’hui, Supabase plus tard.
 * Les composants UI ne dépendent pas de l’implémentation.
 */
export type ProgressStore = {
  loadHistory: () => PracticeHistory;
  saveHistory: (history: PracticeHistory) => void;
};
