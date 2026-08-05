import type { DifficultyLevel } from "@/domain/curriculum/types";
import type { PreferredDurationMinutes } from "@/domain/preferences/types";

/** Version du parcours d’onboarding (incrémenter lors d’une évolution majeure). */
export type OnboardingVersion = number;

/** Version courante du parcours MVP. */
export const CURRENT_ONBOARDING_VERSION: OnboardingVersion = 1;

export type OnboardingStatus =
  | "not_started"
  | "in_progress"
  | "completed"
  | "skipped";

export type OnboardingStepId =
  | "welcome"
  | "level"
  | "goal"
  | "duration"
  | "summary";

/** Niveau initial déclaré — aligné sur DifficultyLevel curriculum (D-041). */
export type InitialLevel = DifficultyLevel;

/**
 * Objectifs de pratique simples (UX §10 / intention produit : découverte,
 * régularité, douceur, bases). Pas d’objectif thérapeutique.
 */
export type LearningGoal =
  | "discover"
  | "regularity"
  | "gentle_practice"
  | "deepen_basics";

/**
 * État local d’onboarding (`14` D2 OnboardingState).
 * La durée préférée n’est pas dupliquée ici : source de vérité = PreferenceStore.
 */
export type OnboardingState = {
  version: OnboardingVersion;
  status: OnboardingStatus;
  currentStep: OnboardingStepId;
  initialLevel: InitialLevel | null;
  learningGoal: LearningGoal | null;
  completedAt: string | null;
  updatedAt: string;
};

export type OnboardingDraft = {
  state: OnboardingState;
  /** Durée lue / écrite via les préférences (pas une 2e source). */
  preferredDurationMinutes: PreferredDurationMinutes;
};

export const ONBOARDING_STEPS: OnboardingStepId[] = [
  "welcome",
  "level",
  "goal",
  "duration",
  "summary",
];
