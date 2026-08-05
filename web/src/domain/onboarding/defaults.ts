import {
  CURRENT_ONBOARDING_VERSION,
  type OnboardingState,
} from "@/domain/onboarding/types";

export function createDefaultOnboardingState(
  now: string = new Date().toISOString(),
): OnboardingState {
  return {
    version: CURRENT_ONBOARDING_VERSION,
    status: "not_started",
    currentStep: "welcome",
    initialLevel: null,
    learningGoal: null,
    completedAt: null,
    updatedAt: now,
  };
}

export function needsOnboarding(state: OnboardingState): boolean {
  return state.status === "not_started" || state.status === "in_progress";
}
