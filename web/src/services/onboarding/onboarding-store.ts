import type { OnboardingState } from "@/domain/onboarding/types";

/**
 * Contrat de stockage onboarding — localStorage aujourd’hui, Supabase plus tard.
 * Les composants UI ne dépendent pas de l’implémentation.
 */
export type OnboardingStore = {
  load: () => OnboardingState;
  save: (state: OnboardingState) => void;
};
