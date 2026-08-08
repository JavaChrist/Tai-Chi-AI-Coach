/**
 * Types Movement utiles au MVP-011 (F-004 / F-005 / F-007).
 * Alignés sur docs/08_TAI_CHI_CURRICULUM.md §27.6 et docs/14_DATA_MODEL.md.
 */

import type {
  CurriculumPhaseKey,
  LocaleCode,
  PublicationStatus,
} from "@/domain/curriculum/types";

/** Niveau pédagogique du corpus MVP (Initiation). */
export type MovementLevel = "initiation";

/** Catégories du corpus MVP initial. */
export type MovementCategory = "fondamentaux" | "deplacement";

export type MovementInstruction = {
  id: string;
  sortOrder: number;
  body: string;
};

/**
 * Mouvement pédagogique publié (bibliothèque).
 * `mediaKeyImage` = logicalLocator image F-007 (nullable).
 * `mediaKeyVideo` = logicalLocator MP4 F-006 (nullable — null tant que non validé).
 * Poster vidéo = `mediaKeyImage` (pas de champ poster séparé MVP).
 */
export type Movement = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  level: MovementLevel;
  category: MovementCategory;
  curriculumPhaseKey: CurriculumPhaseKey;
  placement: string;
  instructions: MovementInstruction[];
  breathing: string;
  rhythm: string;
  attentionPoints: string[];
  commonMistakes: string[];
  safetyNote: string;
  styleKey: string | null;
  /** Chemin public WebP F-007, ou null si média absent. */
  mediaKeyImage: string | null;
  /** Chemin public MP4 F-006, ou null si démonstration absente / non validée. */
  mediaKeyVideo: string | null;
  publicationStatus: PublicationStatus;
  contentVersion: string;
  locale: LocaleCode;
  sortOrder: number;
};

/** Vue liste — champs utiles au catalogue F-004. */
export type MovementSummary = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  level: MovementLevel;
  category: MovementCategory;
  curriculumPhaseKey: CurriculumPhaseKey;
  mediaKeyImage: string | null;
  publicationStatus: PublicationStatus;
  isAvailable: boolean;
  sortOrder: number;
};

export type MovementCatalog = {
  id: string;
  title: string;
  contentVersion: string;
  locale: LocaleCode;
  movements: Movement[];
};

export type MovementListFilters = {
  /** Par défaut : uniquement les mouvements publiés. */
  publicationStatus?: PublicationStatus | "any";
  availableOnly?: boolean;
  category?: MovementCategory;
};
