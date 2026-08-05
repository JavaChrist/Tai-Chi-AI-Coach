import {
  createDefaultOnboardingState,
  needsOnboarding as stateNeedsOnboarding,
} from "@/domain/onboarding/defaults";
import { canAdvanceFrom, nextStep, previousStep } from "@/domain/onboarding/steps";
import {
  CURRENT_ONBOARDING_VERSION,
  type InitialLevel,
  type LearningGoal,
  type OnboardingDraft,
  type OnboardingState,
  type OnboardingStepId,
} from "@/domain/onboarding/types";
import type { PreferredDurationMinutes } from "@/domain/preferences/types";
import { createLocalStorageOnboardingStore } from "@/services/onboarding/local-storage-onboarding-store";
import { emitOnboardingChanged } from "@/services/onboarding/onboarding-events";
import type { OnboardingStore } from "@/services/onboarding/onboarding-store";
import type { PreferenceService } from "@/services/preferences/preference-service";
import { getPreferenceService } from "@/services/preferences/preference-service";

export type OnboardingService = {
  getState: () => OnboardingState;
  getDraft: () => OnboardingDraft;
  needsOnboarding: () => boolean;
  start: () => OnboardingState;
  setStep: (step: OnboardingStepId) => OnboardingState;
  goNext: () => OnboardingState;
  goBack: () => OnboardingState;
  setInitialLevel: (level: InitialLevel) => OnboardingState;
  setLearningGoal: (goal: LearningGoal) => OnboardingState;
  setPreferredDuration: (minutes: PreferredDurationMinutes) => OnboardingDraft;
  complete: () => OnboardingState;
  skip: () => OnboardingState;
  restart: () => OnboardingState;
  /** Textes unitaires : absence de Mei / caméra dans le modèle MVP. */
  mvpPathExcludesMeiAndCamera: () => boolean;
};

function touch(state: OnboardingState, now: string): OnboardingState {
  return { ...state, updatedAt: now };
}

export function createOnboardingService(
  store: OnboardingStore,
  preferences: PreferenceService,
  options?: { notify?: boolean; now?: () => string },
): OnboardingService {
  const notify = options?.notify ?? true;
  const now = options?.now ?? (() => new Date().toISOString());

  const persist = (state: OnboardingState) => {
    store.save(state);
    if (notify) emitOnboardingChanged();
    return state;
  };

  const ensureStarted = (state: OnboardingState): OnboardingState => {
    if (state.status === "not_started") {
      return touch(
        {
          ...state,
          status: "in_progress",
          version: CURRENT_ONBOARDING_VERSION,
        },
        now(),
      );
    }
    return state;
  };

  return {
    getState() {
      return store.load();
    },

    getDraft() {
      const state = store.load();
      const prefs = preferences.getPreferences();
      return {
        state,
        preferredDurationMinutes: prefs.practice.preferredDurationMinutes,
      };
    },

    needsOnboarding() {
      return stateNeedsOnboarding(store.load());
    },

    start() {
      const current = store.load();
      if (current.status === "completed" || current.status === "skipped") {
        return current;
      }
      return persist(
        touch(
          {
            ...current,
            status: "in_progress",
            version: CURRENT_ONBOARDING_VERSION,
            currentStep: current.currentStep || "welcome",
          },
          now(),
        ),
      );
    },

    setStep(step) {
      const current = ensureStarted(store.load());
      return persist(touch({ ...current, currentStep: step }, now()));
    },

    goNext() {
      const current = ensureStarted(store.load());
      if (
        !canAdvanceFrom(current.currentStep, {
          initialLevel: current.initialLevel,
          learningGoal: current.learningGoal,
        })
      ) {
        return current;
      }
      const following = nextStep(current.currentStep);
      if (!following) return current;
      return persist(touch({ ...current, currentStep: following }, now()));
    },

    goBack() {
      const current = ensureStarted(store.load());
      const previous = previousStep(current.currentStep);
      if (!previous) return current;
      return persist(touch({ ...current, currentStep: previous }, now()));
    },

    setInitialLevel(level) {
      const current = ensureStarted(store.load());
      preferences.updatePreferences((prefs) => ({
        ...prefs,
        practice: { ...prefs.practice, preferredLevel: level },
      }));
      return persist(
        touch({ ...current, initialLevel: level }, now()),
      );
    },

    setLearningGoal(goal) {
      const current = ensureStarted(store.load());
      return persist(
        touch({ ...current, learningGoal: goal }, now()),
      );
    },

    setPreferredDuration(minutes) {
      const current = ensureStarted(store.load());
      preferences.updatePreferences((prefs) => ({
        ...prefs,
        practice: {
          ...prefs.practice,
          preferredDurationMinutes: minutes,
        },
      }));
      const state = persist(touch(current, now()));
      return {
        state,
        preferredDurationMinutes: minutes,
      };
    },

    complete() {
      const current = ensureStarted(store.load());
      if (!current.initialLevel || !current.learningGoal) {
        return current;
      }
      preferences.updatePreferences((prefs) => ({
        ...prefs,
        practice: {
          ...prefs.practice,
          preferredLevel: current.initialLevel!,
        },
      }));
      const timestamp = now();
      return persist(
        touch(
          {
            ...current,
            status: "completed",
            version: CURRENT_ONBOARDING_VERSION,
            currentStep: "summary",
            completedAt: timestamp,
          },
          timestamp,
        ),
      );
    },

    skip() {
      const timestamp = now();
      return persist(
        touch(
          {
            ...store.load(),
            status: "skipped",
            version: CURRENT_ONBOARDING_VERSION,
            completedAt: timestamp,
          },
          timestamp,
        ),
      );
    },

    restart() {
      return persist(
        touch(
          {
            ...createDefaultOnboardingState(now()),
            status: "in_progress",
            version: CURRENT_ONBOARDING_VERSION,
            currentStep: "welcome",
          },
          now(),
        ),
      );
    },

    mvpPathExcludesMeiAndCamera() {
      return true;
    },
  };
}

let singleton: OnboardingService | null = null;

export function getOnboardingService(): OnboardingService {
  if (!singleton) {
    singleton = createOnboardingService(
      createLocalStorageOnboardingStore(),
      getPreferenceService(),
    );
  }
  return singleton;
}

/** Réservé aux tests. */
export function __resetOnboardingServiceForTests() {
  singleton = null;
}
