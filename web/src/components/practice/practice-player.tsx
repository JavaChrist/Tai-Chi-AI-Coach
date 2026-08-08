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
import {
  buildResumeSnapshot,
  hydratePracticeState,
} from "@/domain/practice/resume-snapshot";
import type {
  LocalPracticeSession,
  PracticeTemplateSnapshot,
} from "@/domain/practice/types";
import { getPracticeResumeService } from "@/services/practice-resume/practice-resume-service";
import { getProgressService } from "@/services/progression/progress-service";

type PracticePlayerProps = {
  template: PracticeTemplateSnapshot;
  /** `true` = démarrer neuf (Refaire) ; ignore / efface la reprise de cette séance. */
  preferFresh?: boolean;
};

function createStartedState(template: PracticeTemplateSnapshot) {
  return practiceReducer(createInitialPracticeState(template), { type: "START" });
}

function persistHistoryIfNeeded(
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
    getPracticeResumeService().clearResume();
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

function saveResumeFromState(state: LocalPracticeSession) {
  const snapshot = buildResumeSnapshot(state);
  if (!snapshot) return;
  try {
    getPracticeResumeService().saveResume(snapshot);
  } catch {
    /* ne pas bloquer la pratique si le stockage échoue */
  }
}

function shouldPersistResumeAfterAction(action: PracticeAction): boolean {
  return (
    action.type === "BEGIN_STEPS" ||
    action.type === "NEXT_STEP" ||
    action.type === "PAUSE" ||
    action.type === "RESUME"
  );
}

export function PracticePlayer({
  template,
  preferFresh = false,
}: PracticePlayerProps) {
  const { preferences } = usePreferences();
  const [state, dispatch] = useReducer(practiceReducer, template, createStartedState);
  /** F-031 — acknowledgement requis avant l’intro / les étapes (y compris reprise). */
  const [safetyAcknowledged, setSafetyAcknowledged] = useState(false);
  const [quitOpen, setQuitOpen] = useState(false);
  const [savedLocally, setSavedLocally] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const recordedRef = useRef(false);
  const stateRef = useRef(state);
  const resumeHandledRef = useRef(false);
  const safetyAcknowledgedRef = useRef(false);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    safetyAcknowledgedRef.current = safetyAcknowledged;
  }, [safetyAcknowledged]);

  useEffect(() => {
    if (state.status !== "running") return;
    const id = window.setInterval(() => {
      dispatch({ type: "TICK", now: Date.now() });
    }, 1000);
    return () => window.clearInterval(id);
  }, [state.status]);

  useEffect(() => {
    const persistIfActive = () => {
      // Ne pas écraser un snapshot valide tant que le gate F-031 n’est pas passé
      // (état reducer = nouvelle séance non hydratée).
      if (!safetyAcknowledgedRef.current) return;
      const current = stateRef.current;
      if (current.phase === "summary") return;
      saveResumeFromState(current);
    };
    window.addEventListener("pagehide", persistIfActive);
    return () => {
      window.removeEventListener("pagehide", persistIfActive);
      persistIfActive();
    };
  }, []);

  const summary = useMemo(
    () => buildPracticeSummary(state, template.plannedDurationMinutes),
    [state, template.plannedDurationMinutes],
  );

  const acknowledgeSafety = () => {
    if (!resumeHandledRef.current) {
      resumeHandledRef.current = true;
      if (preferFresh) {
        const existing = getPracticeResumeService().getResume();
        if (existing?.sessionTemplateId === template.id) {
          getPracticeResumeService().clearResume();
        }
      } else {
        const resume =
          getPracticeResumeService().getValidResumeForTemplate(template);
        if (resume) {
          const restored = hydratePracticeState(template, resume);
          if (restored) {
            dispatch({ type: "HYDRATE", session: restored });
          }
        }
      }
    }
    setSafetyAcknowledged(true);
  };

  const runAction = (action: PracticeAction) => {
    const next = practiceReducer(state, action);
    dispatch(action);

    if (shouldPersistResumeAfterAction(action) && next.phase !== "summary") {
      saveResumeFromState(next);
    }

    persistHistoryIfNeeded(
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
    return <PracticeSafetyGate onAcknowledge={acknowledgeSafety} />;
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
        title="Interrompre la séance ?"
        description="La séance sera notée comme interrompue dans votre carnet. Fermer l’onglet sans confirmer conserve une reprise locale."
        confirmLabel="Interrompre"
        cancelLabel="Rester"
        destructive
        onConfirm={() => runAction({ type: "ABANDON" })}
      />
    </>
  );
}
