import { createDefaultOnboardingState } from "@/domain/onboarding/defaults";
import {
  ONBOARDING_STEPS,
  type OnboardingState,
  type OnboardingStatus,
  type OnboardingStepId,
} from "@/domain/onboarding/types";
import type { OnboardingStore } from "@/services/onboarding/onboarding-store";

export const ONBOARDING_STORAGE_KEY = "tai-chi-ai-coach.onboarding.v1";

const STATUS_SET = new Set<OnboardingStatus>([
  "not_started",
  "in_progress",
  "completed",
  "skipped",
]);

const STEP_SET = new Set<OnboardingStepId>(ONBOARDING_STEPS);
const LEVEL_SET = new Set(["decouverte", "debutant", "progression"]);
const GOAL_SET = new Set([
  "discover",
  "regularity",
  "gentle_practice",
  "deepen_basics",
]);

function isOnboardingState(value: unknown): value is OnboardingState {
  if (!value || typeof value !== "object") return false;
  const candidate = value as OnboardingState;
  if (typeof candidate.version !== "number") return false;
  if (!STATUS_SET.has(candidate.status)) return false;
  if (!STEP_SET.has(candidate.currentStep)) return false;
  if (
    candidate.initialLevel !== null &&
    !LEVEL_SET.has(candidate.initialLevel)
  ) {
    return false;
  }
  if (
    candidate.learningGoal !== null &&
    !GOAL_SET.has(candidate.learningGoal)
  ) {
    return false;
  }
  if (candidate.completedAt !== null && typeof candidate.completedAt !== "string") {
    return false;
  }
  if (typeof candidate.updatedAt !== "string") return false;
  return true;
}

export function createLocalStorageOnboardingStore(
  storage?: Pick<Storage, "getItem" | "setItem">,
): OnboardingStore {
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
        const raw = resolveStorage().getItem(ONBOARDING_STORAGE_KEY);
        if (!raw) return createDefaultOnboardingState();
        const parsed: unknown = JSON.parse(raw);
        if (!isOnboardingState(parsed)) {
          return createDefaultOnboardingState();
        }
        return parsed;
      } catch (error) {
        if (error instanceof Error && error.message.includes("disponible")) {
          throw error;
        }
        return createDefaultOnboardingState();
      }
    },

    save(state) {
      try {
        resolveStorage().setItem(ONBOARDING_STORAGE_KEY, JSON.stringify(state));
      } catch (error) {
        if (error instanceof Error && error.message.includes("disponible")) {
          throw error;
        }
        throw new Error("Impossible d’enregistrer l’onboarding local.");
      }
    },
  };
}
