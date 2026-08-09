/**
 * Stratégie navigation document (BUG-002).
 * Une réponse HTTP reçue (404/500 inclus) est conservée.
 * Le fallback offline n’intervient qu’après échec réseau réel.
 */

export type NavigateFetchDeps = {
  fetch: (input: Request) => Promise<Response>;
  cachesMatch: (input: Request | string) => Promise<Response | undefined>;
  openPrecache: () => Promise<{
    put: (request: Request, response: Response) => Promise<void>;
  }>;
  offlineUrl: string;
};

/**
 * Network First navigate :
 * 1) fetch réseau — toute Response renvoyée telle quelle (cache seulement si ok)
 * 2) si throw / absence de réponse → cache URL
 * 3) sinon → fallback offline
 */
export async function networkFirstNavigate(
  request: Request,
  deps: NavigateFetchDeps,
): Promise<Response> {
  try {
    const response = await deps.fetch(request);
    if (response) {
      if (response.ok) {
        try {
          const cache = await deps.openPrecache();
          await cache.put(request, response.clone());
        } catch {
          /* quota / cache indisponible */
        }
      }
      return response;
    }
  } catch {
    /* échec réseau */
  }

  const cached = await deps.cachesMatch(request);
  if (cached) return cached;

  const byUrl = await deps.cachesMatch(new URL(request.url).pathname);
  if (byUrl) return byUrl;

  const offline = await deps.cachesMatch(deps.offlineUrl);
  if (offline) return offline;

  return new Response("Hors ligne", {
    status: 503,
    statusText: "Offline",
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
