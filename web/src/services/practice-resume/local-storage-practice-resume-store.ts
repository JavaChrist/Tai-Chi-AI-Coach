import { parsePracticeResumeState } from "@/domain/practice/resume-validation";
import type { PracticeResumeState } from "@/domain/practice/resume-types";
import type { PracticeResumeStore } from "@/services/practice-resume/practice-resume-store";

export const PRACTICE_RESUME_STORAGE_KEY =
  "tai-chi-ai-coach.practice-resume.v1";

export function createLocalStoragePracticeResumeStore(
  storage?: Pick<Storage, "getItem" | "setItem" | "removeItem">,
): PracticeResumeStore {
  const resolveStorage = () => {
    if (storage) return storage;
    if (typeof globalThis.localStorage === "undefined") {
      throw new Error("Le stockage local n’est pas disponible.");
    }
    return globalThis.localStorage;
  };

  return {
    load() {
      try {
        const storageApi = resolveStorage();
        const raw = storageApi.getItem(PRACTICE_RESUME_STORAGE_KEY);
        if (!raw) return null;
        try {
          const parsed: unknown = JSON.parse(raw);
          const state = parsePracticeResumeState(parsed);
          if (!state) {
            storageApi.removeItem(PRACTICE_RESUME_STORAGE_KEY);
            return null;
          }
          return state;
        } catch {
          storageApi.removeItem(PRACTICE_RESUME_STORAGE_KEY);
          return null;
        }
      } catch (error) {
        if (error instanceof Error && error.message.includes("disponible")) {
          throw error;
        }
        return null;
      }
    },

    save(state: PracticeResumeState) {
      try {
        resolveStorage().setItem(
          PRACTICE_RESUME_STORAGE_KEY,
          JSON.stringify(state),
        );
      } catch (error) {
        if (error instanceof Error && error.message.includes("disponible")) {
          throw error;
        }
        throw new Error("Impossible d’enregistrer la reprise locale.");
      }
    },

    clear() {
      try {
        resolveStorage().removeItem(PRACTICE_RESUME_STORAGE_KEY);
      } catch (error) {
        if (error instanceof Error && error.message.includes("disponible")) {
          throw error;
        }
        throw new Error("Impossible d’effacer la reprise locale.");
      }
    },
  };
}
