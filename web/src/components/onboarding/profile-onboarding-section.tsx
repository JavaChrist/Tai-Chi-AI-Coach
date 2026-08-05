"use client";

import { useRouter } from "next/navigation";
import { useState, useSyncExternalStore } from "react";

import { ConfirmationDialog } from "@/components/dialogs/confirmation-dialog";
import { PreferenceCard } from "@/components/preferences/preference-card";
import { PreferenceSection } from "@/components/preferences/preference-section";
import { Button } from "@/components/ui/button";
import {
  CURRENT_ONBOARDING_VERSION,
} from "@/domain/onboarding/types";
import {
  initialLevelLabel,
  learningGoalLabel,
  onboardingStatusLabels,
} from "@/domain/onboarding/labels";
import {
  getOnboardingStateSnapshot,
  subscribeOnboardingSnapshots,
} from "@/services/onboarding/onboarding-snapshot";
import { getOnboardingService } from "@/services/onboarding/onboarding-service";

export function ProfileOnboardingSection() {
  const router = useRouter();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const state = useSyncExternalStore(
    subscribeOnboardingSnapshots,
    getOnboardingStateSnapshot,
    () => null,
  );

  if (!state) {
    return (
      <PreferenceSection id="onboarding" title="Accueil guidé">
        <PreferenceCard
          title="Statut indisponible"
          description="L’état de l’accueil n’a pas pu être lu sur cet appareil."
        />
      </PreferenceSection>
    );
  }

  const details = [
    onboardingStatusLabels[state.status],
    `Version ${state.version || CURRENT_ONBOARDING_VERSION}`,
    state.initialLevel ? initialLevelLabel(state.initialLevel) : null,
    state.learningGoal ? learningGoalLabel(state.learningGoal) : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <>
      <PreferenceSection
        id="onboarding"
        title="Accueil guidé"
        description="Consultez le statut de votre première découverte. Les préférences de pratique se règlent dans les sections ci-dessous."
      >
        <PreferenceCard
          title="Statut"
          description={details}
          action={
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => setConfirmOpen(true)}
            >
              Relancer
            </Button>
          }
        />
        {error ? (
          <p role="alert" className="text-destructive text-sm">
            {error}
          </p>
        ) : null}
      </PreferenceSection>

      <ConfirmationDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title="Relancer l’accueil guidé ?"
        description="Vous pourrez revoir vos choix de départ. Vos autres préférences restent disponibles dans cette page."
        confirmLabel="Relancer"
        cancelLabel="Annuler"
        onConfirm={() => {
          try {
            getOnboardingService().restart();
            router.push("/onboarding");
          } catch (err) {
            setError(
              err instanceof Error
                ? err.message
                : "Impossible de relancer l’accueil localement.",
            );
          }
        }}
      />
    </>
  );
}
