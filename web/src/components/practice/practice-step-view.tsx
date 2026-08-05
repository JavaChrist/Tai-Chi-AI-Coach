import { Pause, Play } from "lucide-react";

import { PracticeProgress } from "@/components/practice/practice-progress";
import { Button } from "@/components/ui/button";
import { sessionStepKindLabels } from "@/domain/curriculum/labels";
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
    <section className="space-y-6" aria-labelledby="practice-step-heading">
      <PracticeProgress
        label="Avancement de la séance"
        current={stepIndex + 1}
        total={stepsTotal}
      />

      <header className="space-y-2">
        <p className="text-primary text-sm font-medium tracking-wide uppercase">
          {sessionUxPhaseLabels[uxPhase]}
          <span className="text-muted-foreground font-normal">
            {" "}
            · {sessionStepKindLabels[step.kind]}
          </span>
        </p>
        <h1
          id="practice-step-heading"
          className="font-heading text-2xl font-medium tracking-tight sm:text-3xl"
        >
          {step.title}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
          {step.summary}
        </p>
      </header>

      {paused ? (
        <p
          role="status"
          className="bg-muted text-muted-foreground rounded-xl px-4 py-3 text-sm"
        >
          Pause en cours. Reprenez quand vous le souhaitez — sans pression.
        </p>
      ) : null}

      <div className="flex flex-wrap gap-3">
        {paused ? (
          <Button type="button" variant="primary" onClick={onResume}>
            <Play className="size-4" aria-hidden />
            Reprendre
          </Button>
        ) : (
          <Button type="button" variant="secondary" onClick={onPause}>
            <Pause className="size-4" aria-hidden />
            Mettre en pause
          </Button>
        )}
        <Button
          type="button"
          variant="primary"
          onClick={onNext}
          disabled={paused}
        >
          {isLastStep ? "Terminer la séance" : "Étape suivante"}
        </Button>
        <Button type="button" variant="outline" onClick={onQuit}>
          Quitter
        </Button>
      </div>
    </section>
  );
}
