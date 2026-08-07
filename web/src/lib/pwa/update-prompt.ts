/**
 * Décide si la modale de mise à jour doit être proposée.
 * La détection SW reste active pendant `/pratique/*` ; seul l’affichage est différé.
 */
export function shouldPromptAppUpdate(options: {
  updateAvailable: boolean;
  isPractice: boolean;
  dismissed: boolean;
}): boolean {
  return (
    options.updateAvailable && !options.isPractice && !options.dismissed
  );
}

/**
 * Reload unique après controllerchange — empêche les boucles.
 */
export function scheduleUniqueReload(
  reload: () => void,
  state: { scheduled: boolean },
): boolean {
  if (state.scheduled) return false;
  state.scheduled = true;
  reload();
  return true;
}

export function createSkipWaitingMessage(): { type: "SKIP_WAITING" } {
  return { type: "SKIP_WAITING" };
}
