"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useSyncExternalStore } from "react";

import { InformationCard } from "@/components/cards/information-card";
import { DurationChoice } from "@/components/onboarding/duration-choice";
import { GoalChoice } from "@/components/onboarding/goal-choice";
import { LevelChoice } from "@/components/onboarding/level-choice";
import { OnboardingShell } from "@/components/onboarding/onboarding-shell";
import { OnboardingStepView } from "@/components/onboarding/onboarding-step-view";
import { OnboardingSummary } from "@/components/onboarding/onboarding-summary";
import { ErrorState } from "@/components/states/error-state";
import { Button } from "@/components/ui/button";
import { canAdvanceFrom } from "@/domain/onboarding/steps";
import type {
  InitialLevel,
  LearningGoal,
  OnboardingState,
} from "@/domain/onboarding/types";
import type { PreferredDurationMinutes } from "@/domain/preferences/types";
import {
  getOnboardingFlowSnapshot,
  subscribeOnboardingSnapshots,
  type OnboardingFlowSnapshot,
} from "@/services/onboarding/onboarding-snapshot";
import { getOnboardingService } from "@/services/onboarding/onboarding-service";

const POST_ONBOARDING_HREF = "/bibliotheque";

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
      if (status === "completed" || status === "skipped") {
        router.replace(POST_ONBOARDING_HREF);
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
              onClick={() => router.replace(POST_ONBOARDING_HREF)}
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

  const goApp = (stateAfter: OnboardingState) => {
    if (stateAfter.status === "completed" || stateAfter.status === "skipped") {
      router.replace(POST_ONBOARDING_HREF);
    }
  };

  return (
    <OnboardingShell currentStep={state.currentStep}>
      {state.currentStep === "welcome" ? (
        <OnboardingStepView
          title="Bienvenue"
          description="Tai-Chi AI Coach vous accompagne pour pratiquer le Tai Chi progressivement, avec bienveillance et sans compétition."
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
                onClick={() => run(() => goApp(service.skip()))}
              >
                Plus tard
              </Button>
            </>
          }
        >
          <div className="space-y-3">
            <InformationCard
              title="Un accompagnement calme"
              description="Aucune course aux scores. Vous avancez à votre rythme, et vous pourrez modifier vos choix plus tard dans Profil."
            />
            <InformationCard
              title="Cadre de prudence"
              description="Cette application n’est pas un dispositif médical et ne remplace pas un avis de santé. Adaptez l’effort et interrompez en cas de douleur."
            />
          </div>
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
            <>
              <Button
                type="button"
                variant="primary"
                onClick={() => run(() => goApp(service.complete()))}
              >
                Entrer dans l’application
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
