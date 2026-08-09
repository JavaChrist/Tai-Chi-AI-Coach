import { describe, expect, it } from "vitest";

import {
  CACHE_BUDGET_HARD_BYTES,
  CACHE_BUDGET_TARGET_BYTES,
  CORE_HERO_MOBILE_PATHS,
  CORE_MOVEMENT_IMAGE_PATHS,
  CORE_PUBLIC_URLS,
  CORE_ROUTE_PATHS,
  OFFLINE_FALLBACK_PATH,
  isVideoPath,
  precacheCacheName,
  runtimeCacheName,
} from "@/lib/pwa/precache-core";

describe("precache-core", () => {
  it("versionne les caches avec le Build ID (pas cache-v1)", () => {
    expect(precacheCacheName("abc-1")).toBe("tcac-precache-abc-1");
    expect(runtimeCacheName("abc-1")).toBe("tcac-runtime-abc-1");
    expect(precacheCacheName("abc-1")).not.toContain("cache-v");
  });

  it("inclut /hors-ligne et les routes pratique des 3 séances", () => {
    expect(CORE_ROUTE_PATHS).toContain(OFFLINE_FALLBACK_PATH);
    expect(CORE_ROUTE_PATHS).toContain("/pratique/st-decouverte-premiere-courte");
    expect(CORE_ROUTE_PATHS).toContain("/pratique/st-initiation-rituel-base");
    expect(CORE_ROUTE_PATHS).toContain("/pratique/st-progression-liaison-legere");
  });

  it("précache 10 Hero Mobile Light/Dark (PO-A) sans desktop/tablet", () => {
    expect(CORE_HERO_MOBILE_PATHS).toHaveLength(10);
    for (const path of CORE_HERO_MOBILE_PATHS) {
      expect(path).toContain("-mobile.webp");
      expect(path).not.toContain("-desktop");
      expect(path).not.toContain("-tablet");
    }
  });

  it("précache les 3 WebP mouvements et aucun MP4 (PO-D)", () => {
    expect(CORE_MOVEMENT_IMAGE_PATHS).toHaveLength(3);
    for (const path of CORE_PUBLIC_URLS) {
      expect(isVideoPath(path)).toBe(false);
      expect(path.endsWith(".mp4")).toBe(false);
    }
  });

  it("définit les budgets 8 Mo / 12 Mo", () => {
    expect(CACHE_BUDGET_TARGET_BYTES).toBe(8 * 1024 * 1024);
    expect(CACHE_BUDGET_HARD_BYTES).toBe(12 * 1024 * 1024);
  });
});
