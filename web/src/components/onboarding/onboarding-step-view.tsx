import type { ReactNode } from "react";

type OnboardingStepViewProps = {
  title: string;
  description: string;
  children: ReactNode;
  actions: ReactNode;
};

export function OnboardingStepView({
  title,
  description,
  children,
  actions,
}: OnboardingStepViewProps) {
  return (
    <section className="space-y-10" aria-labelledby="onboarding-step-title">
      <header className="space-y-4">
        <h1 id="onboarding-step-title" className="text-h1 text-foreground">
          {title}
        </h1>
        <p className="text-body text-muted-foreground max-w-xl leading-relaxed">
          {description}
        </p>
      </header>
      <div className="space-y-4">{children}</div>
      <div className="flex flex-wrap gap-3 pt-2">{actions}</div>
    </section>
  );
}
