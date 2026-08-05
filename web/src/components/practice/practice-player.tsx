"use client";

import { useEffect, useMemo, useReducer, useState } from "react";

import { ConfirmationDialog } from "@/components/dialogs/confirmation-dialog";
import { PracticeIntro } from "@/components/practice/practice-intro";
import { PracticeStepView } from "@/components/practice/practice-step-view";
import { PracticeSummaryView } from "@/components/practice/practice-summary";
import { Button } from "@/components/ui/button";
import {
  buildPracticeSummary,
  createInitialPracticeState,
  practiceReducer,
} from "@/domain/practice/practice-reducer";
import type { PracticeTemplateSnapshot } from "@/domain/practice/types";

type PracticePlayerProps = {
  template: PracticeTemplateSnapshot;
};

function createStartedState(template: PracticeTemplateSnapshot) {
  return practiceReducer(createInitialPracticeState(template), { type: "START" });
}

export function PracticePlayer({ template }: PracticePlayerProps) {
  const [state, dispatch] = useReducer(practiceReducer, template, createStartedState);
  const [quitOpen, setQuitOpen] = useState(false);

  useEffect(() => {
    if (state.status !== "running") return;
    const id = window.setInterval(() => {
      dispatch({ type: "TICK", now: Date.now() });
    }, 1000);
    return () => window.clearInterval(id);
  }, [state.status]);

  const summary = useMemo(
    () => buildPracticeSummary(state, template.plannedDurationMinutes),
    [state, template.plannedDurationMinutes],
  );

  const currentStep = state.steps[state.currentStepIndex];
  const isLastStep = state.currentStepIndex >= state.steps.length - 1;

  return (
    <>
      {state.phase === "intro" ? (
        <PracticeIntro
          template={template}
          paused={state.status === "paused"}
          onContinue={() => dispatch({ type: "BEGIN_STEPS" })}
          onResume={() => dispatch({ type: "RESUME" })}
          onPause={() => dispatch({ type: "PAUSE" })}
          onQuit={() => setQuitOpen(true)}
        />
      ) : null}

      {state.phase === "step" && currentStep ? (
        <PracticeStepView
          step={currentStep}
          stepIndex={state.currentStepIndex}
          stepsTotal={state.steps.length}
          paused={state.status === "paused"}
          isLastStep={isLastStep}
          onNext={() => dispatch({ type: "NEXT_STEP" })}
          onPause={() => dispatch({ type: "PAUSE" })}
          onResume={() => dispatch({ type: "RESUME" })}
          onQuit={() => setQuitOpen(true)}
        />
      ) : null}

      {state.phase === "summary" && summary ? (
        <PracticeSummaryView summary={summary} templateId={template.id} />
      ) : null}

      {state.phase === "step" && !currentStep ? (
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm">
            Aucune étape disponible pour cette séance.
          </p>
          <Button
            type="button"
            variant="primary"
            onClick={() => dispatch({ type: "COMPLETE" })}
          >
            Voir le bilan
          </Button>
        </div>
      ) : null}

      <ConfirmationDialog
        open={quitOpen}
        onOpenChange={setQuitOpen}
        title="Quitter la séance ?"
        description="Vous pourrez revenir plus tard. Aucun reproche — la pause fait partie du parcours. Le bilan local ne sera pas conservé."
        confirmLabel="Quitter"
        cancelLabel="Rester"
        destructive
        onConfirm={() => dispatch({ type: "ABANDON" })}
      />
    </>
  );
}
