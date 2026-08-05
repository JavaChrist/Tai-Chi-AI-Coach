import type { OnboardingDraft, OnboardingState } from "@/domain/onboarding/types";
import { subscribeOnboarding } from "@/services/onboarding/onboarding-events";
import { getOnboardingService } from "@/services/onboarding/onboarding-service";

export type OnboardingGateSnapshot =
  | { kind: "ready"; needsOnboarding: boolean }
  | { kind: "error"; message: string };

export type OnboardingFlowSnapshot =
  | { kind: "ready"; draft: OnboardingDraft }
  | { kind: "error"; message: string };

let cachedDraft: OnboardingDraft | null = null;
let cachedState: OnboardingState | null = null;
let cachedGate: OnboardingGateSnapshot | null = null;
let cachedFlow: OnboardingFlowSnapshot | null = null;

function invalidateCaches() {
  cachedDraft = null;
  cachedState = null;
  cachedGate = null;
  cachedFlow = null;
}

export function getOnboardingDraftSnapshot(): OnboardingDraft {
  if (!cachedDraft) {
    cachedDraft = getOnboardingService().getDraft();
  }
  return cachedDraft;
}

export function getOnboardingStateSnapshot(): OnboardingState | null {
  if (cachedState) return cachedState;
  try {
    cachedState = getOnboardingService().getState();
    return cachedState;
  } catch {
    return null;
  }
}

export function getOnboardingGateSnapshot(): OnboardingGateSnapshot {
  if (cachedGate) return cachedGate;

  try {
    cachedGate = {
      kind: "ready",
      needsOnboarding: getOnboardingService().needsOnboarding(),
    };
  } catch (error) {
    cachedGate = {
      kind: "error",
      message:
        error instanceof Error
          ? error.message
          : "Le stockage local est momentanément indisponible.",
    };
  }

  return cachedGate;
}

export function getOnboardingFlowSnapshot(): OnboardingFlowSnapshot {
  if (cachedFlow) return cachedFlow;

  try {
    cachedFlow = {
      kind: "ready",
      draft: getOnboardingDraftSnapshot(),
    };
  } catch (error) {
    cachedFlow = {
      kind: "error",
      message:
        error instanceof Error
          ? error.message
          : "Impossible de lire l’accueil local.",
    };
  }

  return cachedFlow;
}

export function subscribeOnboardingSnapshots(listener: () => void) {
  return subscribeOnboarding(() => {
    invalidateCaches();
    listener();
  });
}

/** @deprecated Utiliser subscribeOnboardingSnapshots */
export const subscribeOnboardingDraft = subscribeOnboardingSnapshots;

export function invalidateOnboardingDraftSnapshot() {
  invalidateCaches();
}
