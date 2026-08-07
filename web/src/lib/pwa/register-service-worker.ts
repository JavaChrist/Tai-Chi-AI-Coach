export const SERVICE_WORKER_URL = "/sw.js";

export function canUseServiceWorker(): boolean {
  return (
    typeof window !== "undefined" &&
    window.isSecureContext &&
    "serviceWorker" in navigator
  );
}

/**
 * Enregistre le SW socle. No-op hors Secure Context / API absente.
 */
export async function registerServiceWorker(): Promise<ServiceWorkerRegistration | null> {
  if (!canUseServiceWorker()) {
    return null;
  }

  try {
    return await navigator.serviceWorker.register(SERVICE_WORKER_URL, {
      scope: "/",
    });
  } catch {
    return null;
  }
}
