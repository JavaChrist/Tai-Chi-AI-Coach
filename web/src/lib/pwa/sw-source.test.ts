import { describe, expect, it } from "vitest";

import {
  CORE_HERO_MOBILE_PATHS,
  CORE_MOVEMENT_IMAGE_PATHS,
  OFFLINE_FALLBACK_PATH,
} from "@/lib/pwa/precache-core";
import { buildServiceWorkerSource } from "@/lib/pwa/sw-source";

describe("buildServiceWorkerSource (MVP-017)", () => {
  const source = buildServiceWorkerSource("abc123-1700000000000");

  it("injecte Build ID et caches versionnés", () => {
    expect(source).toContain('const APP_BUILD_ID = "abc123-1700000000000"');
    expect(source).toContain('const PRECACHE = "tcac-precache-abc123-1700000000000"');
    expect(source).toContain('const RUNTIME = "tcac-runtime-abc123-1700000000000"');
    expect(source).not.toContain("cache-v1");
    expect(source).not.toContain("cache-v2");
  });

  it("conserve SKIP_WAITING contrôlé et claim à l’activate", () => {
    expect(source).toContain('event.data.type === "SKIP_WAITING"');
    expect(source).toContain("self.skipWaiting()");
    expect(source).toContain("self.clients.claim()");
  });

  it("n’appelle pas skipWaiting à l’install", () => {
    const installBlock = source.slice(
      source.indexOf('addEventListener("install"'),
      source.indexOf('addEventListener("message"'),
    );
    expect(installBlock).not.toMatch(/skipWaiting\s*\(/);
    expect(installBlock).toContain("installPrecache");
  });

  it("ajoute precache + fetch + purge des caches tcac obsolètes", () => {
    expect(source).toContain("caches.open");
    expect(source).toContain('addEventListener("fetch"');
    expect(source).toContain('key.startsWith("tcac-")');
    expect(source).toContain("caches.delete");
  });

  it("applique Network Only à /sw.js et aux vidéos", () => {
    expect(source).toContain('pathname === "/sw.js"');
    expect(source).toContain("isVideoPath");
    expect(source).toContain('pathname.startsWith("/video/")');
  });

  it("sert le fallback /hors-ligne et les assets cœur", () => {
    expect(source).toContain(OFFLINE_FALLBACK_PATH);
    expect(source).toContain("networkFirstNavigate");
    for (const hero of CORE_HERO_MOBILE_PATHS) {
      expect(source).toContain(hero);
    }
    for (const movement of CORE_MOVEMENT_IMAGE_PATHS) {
      expect(source).toContain(movement);
    }
  });

  it("BUG-002 — navigation : Response HTTP non-ok renvoyée (pas de fallback offline)", () => {
    const start = source.indexOf("async function networkFirstNavigate");
    const end = source.indexOf("async function networkFirstWithCache");
    const body = source.slice(start, end);
    // Ancien bug : if (response && response.ok) { ... return response } sans return hors ok
    expect(body).toContain("if (response) {");
    expect(body).toContain("return response;");
    expect(body).toMatch(/if\s*\(\s*response\.ok\s*\)\s*\{[\s\S]*putRequest/);
    // Le return response doit être hors du seul bloc response.ok
    const afterOkBlock = body.split("if (response.ok)")[1] ?? "";
    expect(afterOkBlock).toContain("return response;");
  });

  it("ne référence aucun fichier .mp4 dans le precache injecté", () => {
    expect(source).not.toMatch(/\.mp4"/);
    expect(source).not.toMatch(/\.mp4'/);
  });
});
