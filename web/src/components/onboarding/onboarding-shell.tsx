import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { OnboardingProgress } from "@/components/onboarding/onboarding-progress";
import type { OnboardingStepId } from "@/domain/onboarding/types";
import { BRAND_NAME } from "@/config/assets";

type OnboardingShellProps = {
  currentStep: OnboardingStepId;
  children: ReactNode;
};

export function OnboardingShell({ currentStep, children }: OnboardingShellProps) {
  return (
    <div className="bg-background text-foreground min-h-dvh">
      <Container size="sm" className="space-y-8 py-8">
        <header className="space-y-4">
          <p className="text-primary text-sm font-medium tracking-wide uppercase">
            {BRAND_NAME}
          </p>
          <OnboardingProgress currentStep={currentStep} />
        </header>
        {children}
      </Container>
    </div>
  );
}
