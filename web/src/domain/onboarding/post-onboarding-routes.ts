/** Après skip : bibliothèque. */
export const POST_ONBOARDING_SKIP_HREF = "/bibliotheque";

/** Après complétion primaire : présentation F-001 (`/decouverte`). */
export const POST_ONBOARDING_COMPLETE_HREF = "/decouverte";

/**
 * Accès secondaire post-complétion (PO-A) — ne remplace pas le redirect primaire.
 * Nécessite `complete()` avant navigation (gate onboarding).
 */
export const POST_ONBOARDING_BEGINNER_PATH_HREF = "/parcours/debutant";
