/**
 * Types F-003 — Parcours débutant (MVP-013).
 * Référence des SessionTemplate existants ; pas de duplication pédagogique.
 */

import type { LocaleCode, PublicationStatus } from "@/domain/curriculum/types";

/**
 * Parcours débutant publié.
 * `orderedSessionIds` = ordre pédagogique officiel (Découverte → Initiation → Progression).
 */
export type BeginnerPath = {
  id: string;
  title: string;
  description: string;
  orderedSessionIds: string[];
  publicationStatus: PublicationStatus;
  contentVersion: string;
  locale: LocaleCode;
};
