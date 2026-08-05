import { ONBOARDING_STEPS, type OnboardingStepId } from "@/domain/onboarding/types";
import { onboardingStepLabels } from "@/domain/onboarding/labels";
import { stepIndex } from "@/domain/onboarding/steps";
import { cn } from "@/lib/utils";

type OnboardingProgressProps = {
  currentStep: OnboardingStepId;
};

export function OnboardingProgress({ currentStep }: OnboardingProgressProps) {
  const current = stepIndex(currentStep);
  const total = ONBOARDING_STEPS.length;

  return (
    <div className="space-y-2" aria-label="Progression de l’accueil">
      <p className="text-caption text-muted-foreground">
        {onboardingStepLabels[currentStep]}
        <span className="sr-only">
          {" "}
          — étape {current + 1} sur {total}
        </span>
      </p>
      <ol className="flex list-none gap-2 p-0" aria-hidden>
        {ONBOARDING_STEPS.map((step, index) => (
          <li
            key={step}
            className={cn(
              "h-1.5 flex-1 rounded-full",
              index <= current ? "bg-primary" : "bg-muted",
            )}
          />
        ))}
      </ol>
    </div>
  );
}
