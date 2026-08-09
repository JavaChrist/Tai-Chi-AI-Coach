import { readFileSync, statSync } from "node:fs";
import path from "node:path";

import {
  CACHE_BUDGET_HARD_BYTES,
  CACHE_BUDGET_TARGET_BYTES,
  CORE_HERO_MOBILE_PATHS,
  CORE_MOVEMENT_IMAGE_PATHS,
  CORE_PWA_ASSET_PATHS,
  CORE_ROUTE_PATHS,
} from "@/lib/pwa/precache-core";

export type PrecacheBudgetReport = {
  publicAssetBytes: number;
  publicAssetCount: number;
  routeCount: number;
  nextStaticBytes: number;
  nextStaticCount: number;
  totalEstimatedBytes: number;
  withinTarget8Mo: boolean;
  withinHard12Mo: boolean;
  targetBytes: number;
  hardBytes: number;
};

function publicFileBytes(webRoot: string, urlPath: string): number {
  const relative = urlPath.replace(/^\//, "");
  const absolute = path.join(webRoot, "public", relative);
  try {
    return statSync(absolute).size;
  } catch {
    return 0;
  }
}

function sumNextStatic(webRoot: string): { bytes: number; count: number } {
  const manifestPath = path.join(webRoot, "public", "tcac-precache-manifest.json");
  try {
    const raw = readFileSync(manifestPath, "utf8");
    const data = JSON.parse(raw) as {
      bytesEstimate?: number;
      urls?: string[];
    };
    return {
      bytes: typeof data.bytesEstimate === "number" ? data.bytesEstimate : 0,
      count: Array.isArray(data.urls) ? data.urls.length : 0,
    };
  } catch {
    return { bytes: 0, count: 0 };
  }
}

/** Mesure le cœur public + chunks listés dans le manifeste généré (si présent). */
export function measurePrecacheBudget(webRoot: string): PrecacheBudgetReport {
  const publicPaths = [
    ...CORE_HERO_MOBILE_PATHS,
    ...CORE_MOVEMENT_IMAGE_PATHS,
    ...CORE_PWA_ASSET_PATHS,
  ];

  let publicAssetBytes = 0;
  let publicAssetCount = 0;
  for (const url of publicPaths) {
    const size = publicFileBytes(webRoot, url);
    if (size > 0) {
      publicAssetBytes += size;
      publicAssetCount += 1;
    }
  }

  const nextStatic = sumNextStatic(webRoot);
  const totalEstimatedBytes = publicAssetBytes + nextStatic.bytes;

  return {
    publicAssetBytes,
    publicAssetCount,
    routeCount: CORE_ROUTE_PATHS.length,
    nextStaticBytes: nextStatic.bytes,
    nextStaticCount: nextStatic.count,
    totalEstimatedBytes,
    withinTarget8Mo: totalEstimatedBytes <= CACHE_BUDGET_TARGET_BYTES,
    withinHard12Mo: totalEstimatedBytes <= CACHE_BUDGET_HARD_BYTES,
    targetBytes: CACHE_BUDGET_TARGET_BYTES,
    hardBytes: CACHE_BUDGET_HARD_BYTES,
  };
}
