import {
  ONBOARDING_STEPS,
  type OnboardingStepId,
} from "@/domain/onboarding/types";

export function stepIndex(step: OnboardingStepId): number {
  return ONBOARDING_STEPS.indexOf(step);
}

export function nextStep(step: OnboardingStepId): OnboardingStepId | null {
  const index = stepIndex(step);
  if (index < 0 || index >= ONBOARDING_STEPS.length - 1) return null;
  return ONBOARDING_STEPS[index + 1] ?? null;
}

export function previousStep(step: OnboardingStepId): OnboardingStepId | null {
  const index = stepIndex(step);
  if (index <= 0) return null;
  return ONBOARDING_STEPS[index - 1] ?? null;
}

export function canAdvanceFrom(
  step: OnboardingStepId,
  choices: {
    initialLevel: string | null;
    learningGoal: string | null;
  },
): boolean {
  switch (step) {
    case "welcome":
      return true;
    case "level":
      return choices.initialLevel !== null;
    case "goal":
      return choices.learningGoal !== null;
    case "duration":
      return true;
    case "summary":
      return (
        choices.initialLevel !== null && choices.learningGoal !== null
      );
    default:
      return false;
  }
}
