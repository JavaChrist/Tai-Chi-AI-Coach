import { describe, expect, it, vi } from "vitest";

import { networkFirstNavigate } from "@/lib/pwa/network-first-navigate";
import { OFFLINE_FALLBACK_PATH } from "@/lib/pwa/precache-core";

function req(path: string) {
  // Node Request n’accepte pas mode "navigate" — same-origin suffit pour la stratégie.
  return new Request(`https://example.test${path}`, { mode: "same-origin" });
}

describe("networkFirstNavigate (BUG-002)", () => {
  it("online 404 — conserve le 404, pas de fallback offline", async () => {
    const notFound = new Response("Séance introuvable", { status: 404 });
    const cachesMatch = vi.fn().mockResolvedValue(undefined);
    const openPrecache = vi.fn();

    const result = await networkFirstNavigate(req("/pratique/session-inconnue"), {
      fetch: async () => notFound,
      cachesMatch,
      openPrecache,
      offlineUrl: OFFLINE_FALLBACK_PATH,
    });

    expect(result.status).toBe(404);
    expect(await result.text()).toContain("introuvable");
    expect(openPrecache).not.toHaveBeenCalled();
    expect(cachesMatch).not.toHaveBeenCalled();
  });

  it("online 500 — conserve le 500 si le serveur répond", async () => {
    const error = new Response("Erreur serveur", { status: 500 });
    const result = await networkFirstNavigate(req("/"), {
      fetch: async () => error,
      cachesMatch: vi.fn(),
      openPrecache: vi.fn(),
      offlineUrl: OFFLINE_FALLBACK_PATH,
    });

    expect(result.status).toBe(500);
  });

  it("network failure — fallback /hors-ligne", async () => {
    const offlinePage = new Response("Hors ligne UI", { status: 200 });
    const cachesMatch = vi.fn(async (input: Request | string) => {
      if (input === OFFLINE_FALLBACK_PATH) return offlinePage;
      return undefined;
    });

    const result = await networkFirstNavigate(req("/parcours/debutant"), {
      fetch: async () => {
        throw new TypeError("Failed to fetch");
      },
      cachesMatch,
      openPrecache: vi.fn(),
      offlineUrl: OFFLINE_FALLBACK_PATH,
    });

    expect(result).toBe(offlinePage);
    expect(await result.text()).toContain("Hors ligne");
  });

  it("offline cache hit — sert le cache de la route", async () => {
    const cached = new Response("Page en cache", { status: 200 });
    const request = req("/decouverte");
    const cachesMatch = vi.fn(async (input: Request | string) => {
      if (input === request) return cached;
      return undefined;
    });

    const result = await networkFirstNavigate(request, {
      fetch: async () => {
        throw new TypeError("Failed to fetch");
      },
      cachesMatch,
      openPrecache: vi.fn(),
      offlineUrl: OFFLINE_FALLBACK_PATH,
    });

    expect(result).toBe(cached);
  });

  it("route mouvement inexistante online — not-found réel (404)", async () => {
    const notFound = new Response("Mouvement introuvable", { status: 404 });
    const result = await networkFirstNavigate(
      req("/bibliotheque/mouvements/inexistant"),
      {
        fetch: async () => notFound,
        cachesMatch: vi.fn(),
        openPrecache: vi.fn(),
        offlineUrl: OFFLINE_FALLBACK_PATH,
      },
    );
    expect(result.status).toBe(404);
    expect(await result.text()).toContain("Mouvement introuvable");
  });

  it("route session inexistante online — not-found réel (404)", async () => {
    const notFound = new Response("Séance introuvable", { status: 404 });
    const result = await networkFirstNavigate(
      req("/bibliotheque/session-inconnue-xyz"),
      {
        fetch: async () => notFound,
        cachesMatch: vi.fn(),
        openPrecache: vi.fn(),
        offlineUrl: OFFLINE_FALLBACK_PATH,
      },
    );
    expect(result.status).toBe(404);
    expect(await result.text()).toContain("Séance introuvable");
  });

  it("online 200 — met en cache precache puis renvoie la réponse", async () => {
    const ok = new Response("<html>ok</html>", { status: 200 });
    const put = vi.fn().mockResolvedValue(undefined);
    const result = await networkFirstNavigate(req("/"), {
      fetch: async () => ok,
      cachesMatch: vi.fn(),
      openPrecache: async () => ({ put }),
      offlineUrl: OFFLINE_FALLBACK_PATH,
    });
    expect(result.status).toBe(200);
    expect(put).toHaveBeenCalled();
  });
});
