import { describe, expect, it } from "vitest";

import { buildServiceWorkerSource } from "@/lib/pwa/sw-source";

/**
 * Contrat A→B : purge uniquement à l’activate (après SKIP_WAITING),
 * pas pendant install/waiting.
 */
describe("SW update lifecycle A→B", () => {
  const source = buildServiceWorkerSource("build-b");

  it("installe le precache B sans skipWaiting ni purge", () => {
    const installBlock = source.slice(
      source.indexOf('addEventListener("install"'),
      source.indexOf('addEventListener("message"'),
    );
    expect(installBlock).toContain("installPrecache");
    expect(installBlock).not.toContain("caches.delete");
    expect(installBlock).not.toMatch(/skipWaiting\s*\(/);
  });

  it("purge les caches tcac obsolètes seulement dans activateAndPurge", () => {
    expect(source).toContain("async function activateAndPurge");
    const activateFn = source.slice(
      source.indexOf("async function activateAndPurge"),
      source.indexOf('self.addEventListener("install"'),
    );
    expect(activateFn).toContain("caches.delete");
    expect(activateFn).toContain('key.startsWith("tcac-")');
    expect(activateFn).toContain("self.clients.claim()");
  });

  it("garde SKIP_WAITING sur message utilisateur uniquement", () => {
    const messageBlock = source.slice(
      source.indexOf('addEventListener("message"'),
      source.indexOf('addEventListener("activate"'),
    );
    expect(messageBlock).toContain("SKIP_WAITING");
    expect(messageBlock).toContain("self.skipWaiting()");
  });
});
