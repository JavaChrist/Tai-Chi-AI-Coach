import { describe, expect, it } from "vitest";

import { buildServiceWorkerSource } from "@/lib/pwa/sw-source";

describe("buildServiceWorkerSource", () => {
  it("injecte l’identifiant de build et le handler SKIP_WAITING", () => {
    const source = buildServiceWorkerSource("abc123-1700000000000");

    expect(source).toContain('const APP_BUILD_ID = "abc123-1700000000000"');
    expect(source).toContain('APP_BUILD_ID: abc123-1700000000000');
    expect(source).toContain('event.data.type === "SKIP_WAITING"');
    expect(source).toContain("self.skipWaiting()");
    expect(source).toContain("self.clients.claim()");
  });

  it("n’appelle pas skipWaiting à l’install (activation contrôlée)", () => {
    const source = buildServiceWorkerSource("build-1");
    const installBlock = source.slice(
      source.indexOf('addEventListener("install"'),
      source.indexOf('addEventListener("message"'),
    );

    expect(installBlock).not.toContain("self.skipWaiting");
    expect(installBlock).not.toMatch(/skipWaiting\s*\(/);
  });

  it("n’ajoute pas de precache / fetch offline métier", () => {
    const source = buildServiceWorkerSource("build-2");

    expect(source).not.toContain("caches.open");
    expect(source).not.toContain('addEventListener("fetch"');
  });
});
