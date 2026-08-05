/**
 * Types curriculum utiles au MVP-003.
 * Terminologie alignée sur docs/14_DATA_MODEL.md (D3 Curriculum).
 * Ne reproduit pas les 40 entités conceptuelles.
 */

/** Phases du cursus (`08_TAI_CHI_CURRICULUM.md`). */
export type CurriculumPhaseKey =
  | "decouverte"
  | "initiation"
  | "progression"
  | "consolidation"
  | "autonomie";

/**
 * Niveau de difficulté pédagogique (stratégie de contenu / phases MVP).
 * « Initiation » ↔ Débutant (D-041).
 */
export type DifficultyLevel = "decouverte" | "debutant" | "progression";

export type PublicationStatus =
  | "draft"
  | "in_review"
  | "validated"
  | "published"
  | "archived";

export type LocaleCode = "fr";

/** Étapes structurelles d’une séance guidée (`08` §12). */
export type SessionStepKind =
  | "preparation"
  | "entree"
  | "corps"
  | "liaison"
  | "retour"
  | "cloture";

export type LearningObjective = {
  id: string;
  label: string;
};

export type CurriculumPhase = {
  id: string;
  key: CurriculumPhaseKey;
  title: string;
  intention: string;
  sortOrder: number;
};

export type SessionStep = {
  id: string;
  kind: SessionStepKind;
  title: string;
  /** Description neutre ; pas de mouvement inventé présenté comme officiel. */
  summary: string;
  sortOrder: number;
};

/**
 * Définition pédagogique d’une séance (`SessionTemplate`).
 * Distincte de PracticeSession (exécution utilisateur — hors périmètre).
 */
export type SessionTemplate = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  curriculumPhaseKey: CurriculumPhaseKey;
  difficulty: DifficultyLevel;
  /** Durée planifiée indicative en minutes. */
  plannedDurationMinutes: number;
  objectives: LearningObjective[];
  steps: SessionStep[];
  locale: LocaleCode;
  contentVersion: string;
  publicationStatus: PublicationStatus;
  sortOrder: number;
  /**
   * Indique un contenu structurel initial (cursus) plutôt qu’une leçon officielle
   * de style Tai Chi figé.
   */
  isStructuralPlaceholder: boolean;
  styleKey: string | null;
};

/** Vue liste — champs utiles à la bibliothèque. */
export type SessionTemplateSummary = {
  id: string;
  title: string;
  shortDescription: string;
  difficulty: DifficultyLevel;
  curriculumPhaseKey: CurriculumPhaseKey;
  plannedDurationMinutes: number;
  primaryObjectiveLabel: string | null;
  publicationStatus: PublicationStatus;
  isAvailable: boolean;
  isStructuralPlaceholder: boolean;
  sortOrder: number;
};

export type Curriculum = {
  id: string;
  title: string;
  contentVersion: string;
  locale: LocaleCode;
  phases: CurriculumPhase[];
  sessions: SessionTemplate[];
};

export type SessionListFilters = {
  /** Par défaut : uniquement les séances publiées. */
  publicationStatus?: PublicationStatus | "any";
  difficulty?: DifficultyLevel;
  curriculumPhaseKey?: CurriculumPhaseKey;
  availableOnly?: boolean;
};
