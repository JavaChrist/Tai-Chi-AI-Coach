import { Pause, Play } from "lucide-react";

import { PracticeProgress } from "@/components/practice/practice-progress";
import { Button } from "@/components/ui/button";
import type { SessionStep } from "@/domain/curriculum/types";
import {
  mapStepKindToUxPhase,
  sessionUxPhaseLabels,
} from "@/domain/practice/ux-phase";

type PracticeStepViewProps = {
  step: SessionStep;
  stepIndex: number;
  stepsTotal: number;
  paused: boolean;
  isLastStep: boolean;
  onNext: () => void;
  onPause: () => void;
  onResume: () => void;
  onQuit: () => void;
};

export function PracticeStepView({
  step,
  stepIndex,
  stepsTotal,
  paused,
  isLastStep,
  onNext,
  onPause,
  onResume,
  onQuit,
}: PracticeStepViewProps) {
  const uxPhase = mapStepKindToUxPhase(step.kind);

  return (
    <section
      className="mx-auto max-w-reading space-y-10"
      aria-labelledby="practice-step-heading"
    >
      <PracticeProgress
        label="Avancement"
        current={stepIndex + 1}
        total={stepsTotal}
      />

      <header className="space-y-4">
        <p className="text-caption text-muted-foreground">
          {sessionUxPhaseLabels[uxPhase]}
        </p>
        <h1 id="practice-step-heading" className="text-h1 text-foreground">
          {step.title}
        </h1>
        <p className="text-body text-muted-foreground">{step.summary}</p>
      </header>

      {paused ? (
        <p
          role="status"
          className="bg-secondary text-muted-foreground rounded-card px-6 py-10 text-center text-body"
        >
          Respirez. Reprenez quand vous êtes prêt.
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {paused ? (
          <Button type="button" variant="primary" onClick={onResume}>
            <Play className="size-4" strokeWidth={1.75} aria-hidden />
            Reprendre
          </Button>
        ) : (
          <>
            <Button type="button" variant="primary" onClick={onNext}>
              {isLastStep ? "Terminer" : "Suivant"}
            </Button>
            <Button type="button" variant="ghost" onClick={onPause}>
              <Pause className="size-4" strokeWidth={1.75} aria-hidden />
              Pause
            </Button>
          </>
        )}
        <Button type="button" variant="ghost" onClick={onQuit}>
          Quitter
        </Button>
      </div>
    </section>
  );
}
