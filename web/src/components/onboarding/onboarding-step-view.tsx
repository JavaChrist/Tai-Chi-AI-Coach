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
    <section className="space-y-6" aria-labelledby="onboarding-step-title">
      <header className="space-y-2">
        <h1
          id="onboarding-step-title"
          className="font-heading text-2xl font-medium tracking-tight sm:text-3xl"
        >
          {title}
        </h1>
        <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
          {description}
        </p>
      </header>
      <div>{children}</div>
      <div className="flex flex-wrap gap-3 pt-2">{actions}</div>
    </section>
  );
}
