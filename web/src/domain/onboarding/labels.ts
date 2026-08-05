import type {
  InitialLevel,
  LearningGoal,
  OnboardingStatus,
  OnboardingStepId,
} from "@/domain/onboarding/types";

export const onboardingStepLabels: Record<OnboardingStepId, string> = {
  welcome: "Bienvenue",
  level: "Niveau",
  goal: "Objectif",
  duration: "Durée",
  summary: "Confirmation",
};

export const onboardingStatusLabels: Record<OnboardingStatus, string> = {
  not_started: "Non commencé",
  in_progress: "En cours",
  completed: "Terminé",
  skipped: "Reporté",
};

export const initialLevelOptions: {
  value: InitialLevel;
  label: string;
  description: string;
}[] = [
  {
    value: "decouverte",
    label: "Je découvre",
    description: "Première approche, sans expérience préalable du Tai Chi.",
  },
  {
    value: "debutant",
    label: "Je débute",
    description: "Je commence à poser les bases, à mon rythme.",
  },
  {
    value: "progression",
    label: "J’ai déjà quelques bases",
    description: "Je souhaite progresser avec des séances un peu plus structurées.",
  },
];

export const learningGoalOptions: {
  value: LearningGoal;
  label: string;
  description: string;
}[] = [
  {
    value: "discover",
    label: "Découvrir le Tai Chi",
    description: "Comprendre l’essentiel et oser une première pratique courte.",
  },
  {
    value: "regularity",
    label: "Améliorer la régularité",
    description: "Installer une habitude simple, sans pression.",
  },
  {
    value: "gentle_practice",
    label: "Pratiquer en douceur",
    description: "Privilégier le calme, l’écoute du corps et la prudence.",
  },
  {
    value: "deepen_basics",
    label: "Approfondir les bases",
    description: "Consolider les fondations gestuelles et le rituel de séance.",
  },
];

export function learningGoalLabel(goal: LearningGoal): string {
  return learningGoalOptions.find((option) => option.value === goal)?.label ?? goal;
}

export function initialLevelLabel(level: InitialLevel): string {
  return initialLevelOptions.find((option) => option.value === level)?.label ?? level;
}
