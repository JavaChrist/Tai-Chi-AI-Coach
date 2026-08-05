import type {
  CurriculumPhaseKey,
  DifficultyLevel,
  PublicationStatus,
  SessionStepKind,
} from "@/domain/curriculum/types";

export const difficultyLabels: Record<DifficultyLevel, string> = {
  decouverte: "Découverte",
  debutant: "Débutant",
  progression: "Progression",
};

export const phaseLabels: Record<CurriculumPhaseKey, string> = {
  decouverte: "Découverte",
  initiation: "Initiation",
  progression: "Progression",
  consolidation: "Consolidation",
  autonomie: "Autonomie",
};

export const publicationStatusLabels: Record<PublicationStatus, string> = {
  draft: "Brouillon",
  in_review: "En relecture",
  validated: "Validé",
  published: "Disponible",
  archived: "Archivé",
};

export const sessionStepKindLabels: Record<SessionStepKind, string> = {
  preparation: "Préparation",
  entree: "Entrée",
  corps: "Corps de séance",
  liaison: "Liaison",
  retour: "Retour au calme",
  cloture: "Clôture",
};

export function formatDurationMinutes(minutes: number): string {
  if (minutes <= 1) return `${minutes} min`;
  return `${minutes} min`;
}
