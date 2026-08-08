"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";

import { DurationChoice } from "@/components/onboarding/duration-choice";
import { GoalChoice } from "@/components/onboarding/goal-choice";
import { LevelChoice } from "@/components/onboarding/level-choice";
import { OnboardingShell } from "@/components/onboarding/onboarding-shell";
import { OnboardingStepView } from "@/components/onboarding/onboarding-step-view";
import { OnboardingSummary } from "@/components/onboarding/onboarding-summary";
import { OnboardingSummaryActions } from "@/components/onboarding/onboarding-summary-actions";
import { ErrorState } from "@/components/states/error-state";
import { Button } from "@/components/ui/button";
import {
  POST_ONBOARDING_BEGINNER_PATH_HREF,
  POST_ONBOARDING_COMPLETE_HREF,
  POST_ONBOARDING_SKIP_HREF,
} from "@/domain/onboarding/post-onboarding-routes";
import { canAdvanceFrom } from "@/domain/onboarding/steps";
import type {
  InitialLevel,
  LearningGoal,
} from "@/domain/onboarding/types";
import type { PreferredDurationMinutes } from "@/domain/preferences/types";
import {
  getOnboardingFlowSnapshot,
  subscribeOnboardingSnapshots,
  type OnboardingFlowSnapshot,
} from "@/services/onboarding/onboarding-snapshot";
import { getOnboardingService } from "@/services/onboarding/onboarding-service";

const serverSnapshot: OnboardingFlowSnapshot = {
  kind: "ready",
  draft: {
    state: {
      version: 1,
      status: "not_started",
      currentStep: "welcome",
      initialLevel: null,
      learningGoal: null,
      completedAt: null,
      updatedAt: "",
    },
    preferredDurationMinutes: 15,
  },
};

export function OnboardingFlow() {
  const router = useRouter();
  const postCompleteHrefRef = useRef(POST_ONBOARDING_COMPLETE_HREF);
  const snapshot = useSyncExternalStore(
    subscribeOnboardingSnapshots,
    getOnboardingFlowSnapshot,
    () => serverSnapshot,
  );

  const status =
    snapshot.kind === "ready" ? snapshot.draft.state.status : "error";

  useEffect(() => {
    if (status === "error") return;
    try {
      const service = getOnboardingService();
      if (status === "completed") {
        router.replace(postCompleteHrefRef.current);
        return;
      }
      if (status === "skipped") {
        router.replace(POST_ONBOARDING_SKIP_HREF);
        return;
      }
      if (status === "not_started") {
        service.start();
      }
    } catch {
      /* l’erreur est déjà exposée via snapshot */
    }
  }, [router, status]);

  const run = useCallback((action: () => void) => {
    action();
  }, []);

  if (snapshot.kind === "error") {
    return (
      <OnboardingShell currentStep="welcome">
        <ErrorState
          title="Accueil momentanément indisponible"
          description={`${snapshot.message} Vous pouvez tout de même accéder à l’application.`}
          action={
            <Button
              type="button"
              variant="primary"
              onClick={() => router.replace(POST_ONBOARDING_SKIP_HREF)}
            >
              Continuer vers l’application
            </Button>
          }
        />
      </OnboardingShell>
    );
  }

  const { state, preferredDurationMinutes } = snapshot.draft;
  const service = getOnboardingService();

  const canContinue = canAdvanceFrom(state.currentStep, {
    initialLevel: state.initialLevel,
    learningGoal: state.learningGoal,
  });

  const completeTo = (href: string) => {
    postCompleteHrefRef.current = href;
    service.complete();
  };

  const skipToApp = () => {
    service.skip();
  };

  return (
    <OnboardingShell currentStep={state.currentStep}>
      {state.currentStep === "welcome" ? (
        <OnboardingStepView
          title="Bienvenue"
          description="Un accompagnement calme pour pratiquer à votre rythme. Quelques questions simples — vous pourrez tout modifier plus tard."
          actions={
            <>
              <Button
                type="button"
                variant="primary"
                onClick={() => run(() => service.goNext())}
              >
                Commencer
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={() => run(skipToApp)}
              >
                Plus tard
              </Button>
            </>
          }
        >
          <p className="text-small text-muted-foreground max-w-xl leading-relaxed">
            Adaptez l’effort à votre forme du jour. Interrompez en cas de
            douleur. Cette application n’est pas un dispositif médical.
          </p>
        </OnboardingStepView>
      ) : null}

      {state.currentStep === "level" ? (
        <OnboardingStepView
          title="Votre niveau de départ"
          description="Choisissez l’option la plus proche de votre situation. Ce n’est ni un test, ni une évaluation sportive."
          actions={
            <>
              <Button
                type="button"
                variant="primary"
                disabled={!canContinue}
                onClick={() => run(() => service.goNext())}
              >
                Continuer
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => run(() => service.goBack())}
              >
                Retour
              </Button>
            </>
          }
        >
          <LevelChoice
            value={state.initialLevel}
            onChange={(level: InitialLevel) =>
              run(() => service.setInitialLevel(level))
            }
          />
        </OnboardingStepView>
      ) : null}

      {state.currentStep === "goal" ? (
        <OnboardingStepView
          title="Votre objectif principal"
          description="Un seul objectif pour commencer. Vous pourrez le faire évoluer plus tard."
          actions={
            <>
              <Button
                type="button"
                variant="primary"
                disabled={!canContinue}
                onClick={() => run(() => service.goNext())}
              >
                Continuer
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => run(() => service.goBack())}
              >
                Retour
              </Button>
            </>
          }
        >
          <GoalChoice
            value={state.learningGoal}
            onChange={(goal: LearningGoal) =>
              run(() => service.setLearningGoal(goal))
            }
          />
        </OnboardingStepView>
      ) : null}

      {state.currentStep === "duration" ? (
        <OnboardingStepView
          title="Durée préférée des séances"
          description="Indiquez une durée confortable. Elle aide à mettre en avant des séances adaptées dans la bibliothèque."
          actions={
            <>
              <Button
                type="button"
                variant="primary"
                onClick={() => run(() => service.goNext())}
              >
                Continuer
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => run(() => service.goBack())}
              >
                Retour
              </Button>
            </>
          }
        >
          <DurationChoice
            value={preferredDurationMinutes}
            onChange={(minutes: PreferredDurationMinutes) =>
              run(() => {
                service.setPreferredDuration(minutes);
              })
            }
          />
        </OnboardingStepView>
      ) : null}

      {state.currentStep === "summary" &&
      state.initialLevel &&
      state.learningGoal ? (
        <OnboardingStepView
          title="Confirmer votre point de départ"
          description="Vérifiez vos choix, puis entrez dans l’application quand vous êtes prêt."
          actions={
            <OnboardingSummaryActions
              onComplete={() =>
                run(() => completeTo(POST_ONBOARDING_COMPLETE_HREF))
              }
              onBeginnerPath={() =>
                run(() => completeTo(POST_ONBOARDING_BEGINNER_PATH_HREF))
              }
              onBack={() => run(() => service.goBack())}
            />
          }
        >
          <OnboardingSummary
            initialLevel={state.initialLevel}
            learningGoal={state.learningGoal}
            preferredDurationMinutes={preferredDurationMinutes}
          />
        </OnboardingStepView>
      ) : null}
    </OnboardingShell>
  );
}
