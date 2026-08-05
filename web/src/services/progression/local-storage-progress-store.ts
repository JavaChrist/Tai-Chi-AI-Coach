import { emptyHistory } from "@/domain/progression/statistics";
import type { PracticeHistory } from "@/domain/progression/types";
import type { ProgressStore } from "@/services/progression/progress-store";

export const PROGRESS_STORAGE_KEY = "tai-chi-ai-coach.progress.v1";

function isPracticeHistory(value: unknown): value is PracticeHistory {
  if (!value || typeof value !== "object") return false;
  const candidate = value as PracticeHistory;
  return candidate.version === 1 && Array.isArray(candidate.records);
}

export function createLocalStorageProgressStore(
  storage?: Pick<Storage, "getItem" | "setItem">,
): ProgressStore {
  const resolveStorage = () => {
    if (storage) return storage;
    if (typeof globalThis.localStorage === "undefined") {
      throw new Error("Le stockage local n’est pas disponible.");
    }
    return globalThis.localStorage;
  };

  return {
    loadHistory() {
      try {
        const raw = resolveStorage().getItem(PROGRESS_STORAGE_KEY);
        if (!raw) return emptyHistory();
        const parsed: unknown = JSON.parse(raw);
        if (!isPracticeHistory(parsed)) return emptyHistory();
        return parsed;
      } catch (error) {
        if (error instanceof Error && error.message.includes("disponible")) {
          throw error;
        }
        throw new Error("Impossible de lire l’historique local.");
      }
    },

    saveHistory(history) {
      try {
        resolveStorage().setItem(PROGRESS_STORAGE_KEY, JSON.stringify(history));
      } catch (error) {
        if (error instanceof Error && error.message.includes("disponible")) {
          throw error;
        }
        throw new Error("Impossible d’enregistrer l’historique local.");
      }
    },
  };
}
