/**
 * Parcours débutant MVP — source locale.
 * Ordre : Découverte → Initiation → Progression (`08` / ticket MVP-013).
 * Les contenus pédagogiques restent dans SessionTemplate / Movement.
 */

import type { BeginnerPath } from "@/domain/beginner-path/types";

export const LOCAL_BEGINNER_PATH_VERSION = "1.0.0";

export const BEGINNER_PATH_ID = "path-debutant-mvp";

export const localBeginnerPath: BeginnerPath = {
  id: BEGINNER_PATH_ID,
  title: "Parcours débutant",
  description:
    "Trois séances pour démarrer en douceur : où commencer, quoi faire ensuite, et quels gestes accompagneront votre pratique.",
  orderedSessionIds: [
    "st-decouverte-premiere-courte",
    "st-initiation-rituel-base",
    "st-progression-liaison-legere",
  ],
  publicationStatus: "published",
  contentVersion: LOCAL_BEGINNER_PATH_VERSION,
  locale: "fr",
};
