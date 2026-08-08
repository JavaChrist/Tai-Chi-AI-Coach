/**
 * Contrat de chemins vidéo F-006 (MVP-012).
 * Aucun fichier n’est requis tant que mediaKeyVideo reste null.
 */

/** Dossier public des démonstrations mouvement. */
export const MOVEMENT_VIDEO_DIR = "/video/movements";

/**
 * Locator logique futur pour une démo validée.
 * Ex. `movementDemoVideoPath("posture-de-depart")`
 * → `/video/movements/movement-posture-de-depart-demo.mp4`
 */
export function movementDemoVideoPath(slug: string): string {
  return `${MOVEMENT_VIDEO_DIR}/movement-${slug}-demo.mp4`;
}
