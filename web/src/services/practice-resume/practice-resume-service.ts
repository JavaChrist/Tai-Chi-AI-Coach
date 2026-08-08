import type { PracticeResumeState } from "@/domain/practice/resume-types";
import type { PracticeTemplateSnapshot } from "@/domain/practice/types";
import { validateResumeAgainstTemplate } from "@/domain/practice/resume-validation";
import { createLocalStoragePracticeResumeStore } from "@/services/practice-resume/local-storage-practice-resume-store";
import type { PracticeResumeStore } from "@/services/practice-resume/practice-resume-store";

export const PRACTICE_RESUME_UPDATED_EVENT = "tai-chi-practice-resume-updated";

export type PracticeResumeService = {
  getResume: () => PracticeResumeState | null;
  getValidResumeForTemplate: (
    template: PracticeTemplateSnapshot,
  ) => PracticeResumeState | null;
  saveResume: (state: PracticeResumeState) => void;
  clearResume: () => void;
};

function notifyUpdated() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(PRACTICE_RESUME_UPDATED_EVENT));
  }
}

export function createPracticeResumeService(
  store: PracticeResumeStore,
): PracticeResumeService {
  return {
    getResume() {
      return store.load();
    },

    getValidResumeForTemplate(template) {
      const loaded = store.load();
      if (!loaded) return null;
      // Autre séance : ne pas détruire le snapshot actif.
      if (loaded.sessionTemplateId !== template.id) return null;
      const valid = validateResumeAgainstTemplate(loaded, template);
      if (!valid) {
        store.clear();
        notifyUpdated();
        return null;
      }
      return valid;
    },

    saveResume(state) {
      store.save(state);
      notifyUpdated();
    },

    clearResume() {
      store.clear();
      notifyUpdated();
    },
  };
}

let browserService: PracticeResumeService | null = null;

export function getPracticeResumeService(): PracticeResumeService {
  if (!browserService) {
    browserService = createPracticeResumeService(
      createLocalStoragePracticeResumeStore(),
    );
  }
  return browserService;
}

/** Tests uniquement. */
export function __resetPracticeResumeServiceForTests() {
  browserService = null;
}

export function createMemoryPracticeResumeStore(
  initial: PracticeResumeState | null = null,
): PracticeResumeStore {
  let current = initial;
  return {
    load: () => current,
    save: (next) => {
      current = next;
    },
    clear: () => {
      current = null;
    },
  };
}
