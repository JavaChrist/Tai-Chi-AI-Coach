/**
 * Corps du Service Worker minimal (socle update uniquement).
 * Aucun precache métier / fallback offline (réservé MVP-017).
 */
export function buildServiceWorkerSource(buildId: string): string {
  const safeId = JSON.stringify(buildId);

  return `/* Tai-Chi AI Coach — Service Worker (app update socle)
 * APP_BUILD_ID: ${buildId}
 * Offline / cache métier : hors périmètre (MVP-017).
 */
const APP_BUILD_ID = ${safeId};

self.addEventListener("install", () => {
  // Ne pas appeler skipWaiting ici — activation contrôlée par l'utilisateur.
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
`;
}
