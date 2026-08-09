import path from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

import { measurePrecacheBudget } from "@/lib/pwa/precache-budget";
import { CACHE_BUDGET_HARD_BYTES } from "@/lib/pwa/precache-core";

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");

describe("measurePrecacheBudget", () => {
  it("mesure les assets public cœur et reste sous le plafond dur 12 Mo", () => {
    const report = measurePrecacheBudget(webRoot);

    expect(report.publicAssetCount).toBeGreaterThanOrEqual(10 + 3 + 4);
    expect(report.publicAssetBytes).toBeGreaterThan(100_000);
    expect(report.routeCount).toBeGreaterThan(10);
    expect(report.totalEstimatedBytes).toBeLessThanOrEqual(CACHE_BUDGET_HARD_BYTES);
    expect(report.withinHard12Mo).toBe(true);

    // Cœur public seul (sans chunks) doit rester largement sous 8 Mo.
    expect(report.publicAssetBytes).toBeLessThanOrEqual(8 * 1024 * 1024);
  });
});
