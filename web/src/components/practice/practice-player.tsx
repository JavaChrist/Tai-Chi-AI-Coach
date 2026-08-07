"use client";

import { useEffect, useMemo, useReducer, useRef, useState } from "react";

import { ConfirmationDialog } from "@/components/dialogs/confirmation-dialog";
import { usePreferences } from "@/components/preferences/preferences-provider";
import { PracticeIntro } from "@/components/practice/practice-intro";
import { PracticeStepView } from "@/components/practice/practice-step-view";
import { PracticeSummaryView } from "@/components/practice/practice-summary";
import { PracticeSafetyGate } from "@/components/safety/practice-safety-gate";
import { Button } from "@/components/ui/button";
import {
  buildPracticeSummary,
  createInitialPracticeState,
  practiceReducer,
  type PracticeAction,
} from "@/domain/practice/practice-reducer";
import type {
  LocalPracticeSession,
  PracticeTemplateSnapshot,
} from "@/domain/practice/types";
import { getProgressService } from "@/services/progression/progress-service";

type PracticePlayerProps = {
  template: PracticeTemplateSnapshot;
};

function createStartedState(template: PracticeTemplateSnapshot) {
  return practiceReducer(createInitialPracticeState(template), { type: "START" });
}

function persistIfNeeded(
  next: LocalPracticeSession,
  plannedDurationMinutes: number,
  recordedRef: { current: boolean },
  onSaved: () => void,
  onError: (message: string) => void,
) {
  if (next.phase !== "summary" || !next.endReason || recordedRef.current) return;
  const summary = buildPracticeSummary(next, plannedDurationMinutes);
  if (!summary) return;

  try {
    getProgressService().recordPractice({
      sessionTemplateId: summary.templateId,
      sessionTitle: summary.templateTitle,
      durationMs: summary.activeElapsedMs,
      status: summary.endReason,
      stepsCompleted: summary.stepsCompleted,
      stepsTotal: summary.stepsTotal,
    });
    recordedRef.current = true;
    onSaved();
  } catch (error) {
    onError(
      error instanceof Error
        ? error.message
        : "Impossible d’enregistrer cette pratique localement.",
    );
  }
}

export function PracticePlayer({ template }: PracticePlayerProps) {
  const { preferences } = usePreferences();
  const [state, dispatch] = useReducer(practiceReducer, template, createStartedState);
  /** F-031 — acknowledgement requis avant l’intro / les étapes (session de page). */
  const [safetyAcknowledged, setSafetyAcknowledged] = useState(false);
  const [quitOpen, setQuitOpen] = useState(false);
  const [savedLocally, setSavedLocally] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const recordedRef = useRef(false);

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

  const runAction = (action: PracticeAction) => {
    const next = practiceReducer(state, action);
    dispatch(action);
    persistIfNeeded(
      next,
      template.plannedDurationMinutes,
      recordedRef,
      () => {
        setSavedLocally(true);
        setSaveError(null);
      },
      (message) => {
        setSavedLocally(false);
        setSaveError(message);
      },
    );
  };

  const currentStep = state.steps[state.currentStepIndex];
  const isLastStep = state.currentStepIndex >= state.steps.length - 1;

  if (!safetyAcknowledged) {
    return (
      <PracticeSafetyGate onAcknowledge={() => setSafetyAcknowledged(true)} />
    );
  }

  return (
    <>
      {state.phase === "intro" ? (
        <PracticeIntro
          template={template}
          paused={state.status === "paused"}
          showTips={preferences.practice.showTips}
          onContinue={() => runAction({ type: "BEGIN_STEPS" })}
          onResume={() => runAction({ type: "RESUME" })}
          onPause={() => runAction({ type: "PAUSE" })}
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
          onNext={() => runAction({ type: "NEXT_STEP" })}
          onPause={() => runAction({ type: "PAUSE" })}
          onResume={() => runAction({ type: "RESUME" })}
          onQuit={() => setQuitOpen(true)}
        />
      ) : null}

      {state.phase === "summary" && summary ? (
        <PracticeSummaryView
          summary={summary}
          savedLocally={savedLocally}
          saveError={saveError}
        />
      ) : null}

      {state.phase === "step" && !currentStep ? (
        <div className="mx-auto max-w-reading space-y-6">
          <p className="text-body text-muted-foreground">
            Cette séance n’a pas d’étape à afficher. Vous pouvez terminer
            calmement.
          </p>
          <Button
            type="button"
            variant="primary"
            onClick={() => runAction({ type: "COMPLETE" })}
          >
            Voir le bilan
          </Button>
        </div>
      ) : null}

      <ConfirmationDialog
        open={quitOpen}
        onOpenChange={setQuitOpen}
        title="Quitter la séance ?"
        description="Vous pourrez y revenir plus tard. Aucun reproche."
        confirmLabel="Quitter"
        cancelLabel="Rester"
        destructive
        onConfirm={() => runAction({ type: "ABANDON" })}
      />
    </>
  );
}
