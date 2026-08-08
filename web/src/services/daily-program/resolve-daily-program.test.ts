import { describe, expect, it } from "vitest";

import { localBeginnerPath } from "@/data/beginner-path/local-beginner-path";
import type { BeginnerPath } from "@/domain/beginner-path/types";
import {
  dayOrdinalFromDateKey,
  isValidLocalDateKey,
  toLocalDateKey,
} from "@/domain/daily-program/local-date";
import { resolveDailyProgram } from "@/services/daily-program/resolve-daily-program";

describe("local-date — F-008", () => {
  it("formate une Date en YYYY-MM-DD locale", () => {
    const key = toLocalDateKey(new Date(2026, 7, 8, 23, 30, 0));
    expect(key).toBe("2026-08-08");
    expect(isValidLocalDateKey(key)).toBe(true);
  });

  it("rejette les clés invalides", () => {
    expect(isValidLocalDateKey("2026-13-01")).toBe(false);
    expect(isValidLocalDateKey("2026-02-31")).toBe(false);
    expect(isValidLocalDateKey("08-08-2026")).toBe(false);
  });

  it("produit un ordinal déterministe pour une même clé", () => {
    expect(dayOrdinalFromDateKey("2026-08-08")).toBe(
      dayOrdinalFromDateKey("2026-08-08"),
    );
    expect(dayOrdinalFromDateKey("2026-08-09")).toBe(
      dayOrdinalFromDateKey("2026-08-08") + 1,
    );
  });
});

describe("resolveDailyProgram — F-008", () => {
  const path = localBeginnerPath;
  const pool = path.orderedSessionIds;

  it("même dateKey → même suggestion (stabilité journée)", () => {
    const a = resolveDailyProgram({ path, dateKey: "2026-08-08" });
    const b = resolveDailyProgram({ path, dateKey: "2026-08-08" });
    expect(a).toEqual(b);
    expect(a.ok).toBe(true);
    if (!a.ok) return;
    expect(a.suggestion.dateKey).toBe("2026-08-08");
    expect(pool).toContain(a.suggestion.sessionId);
  });

  it("changement de date → rotation correcte sur le pool", () => {
    const day0 = resolveDailyProgram({ path, dateKey: "2026-08-08" });
    const day1 = resolveDailyProgram({ path, dateKey: "2026-08-09" });
    expect(day0.ok && day1.ok).toBe(true);
    if (!day0.ok || !day1.ok) return;

    const expected0 =
      pool[dayOrdinalFromDateKey("2026-08-08") % pool.length];
    const expected1 =
      pool[dayOrdinalFromDateKey("2026-08-09") % pool.length];
    expect(day0.suggestion.sessionId).toBe(expected0);
    expect(day1.suggestion.sessionId).toBe(expected1);
    expect(day1.suggestion.index).toBe(
      (day0.suggestion.index + 1) % pool.length,
    );
  });

  it("toutes les suggestions appartiennent au BeginnerPath", () => {
    const keys = [
      "2026-01-01",
      "2026-01-02",
      "2026-01-03",
      "2026-06-15",
      "2026-12-31",
    ];
    for (const dateKey of keys) {
      const result = resolveDailyProgram({ path, dateKey });
      expect(result.ok).toBe(true);
      if (!result.ok) continue;
      expect(pool).toContain(result.suggestion.sessionId);
      expect(result.suggestion.pathId).toBe(path.id);
      expect(result.suggestion.index).toBeGreaterThanOrEqual(0);
      expect(result.suggestion.index).toBeLessThan(pool.length);
    }
  });

  it("ordre déterministe — index = ordinal % longueur", () => {
    const dateKey = "2026-03-15";
    const result = resolveDailyProgram({ path, dateKey });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const expectedIndex = dayOrdinalFromDateKey(dateKey) % pool.length;
    expect(result.suggestion.index).toBe(expectedIndex);
    expect(result.suggestion.sessionId).toBe(pool[expectedIndex]);
  });

  it("aucune dépendance historique / vidéo — entrée = path + date uniquement", () => {
    const result = resolveDailyProgram({ path, dateKey: "2026-08-08" });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(Object.keys(result.suggestion).sort()).toEqual([
      "dateKey",
      "index",
      "pathId",
      "sessionId",
    ]);
  });

  it("accepte now injecté pour dériver dateKey (tests indépendants de la machine)", () => {
    const now = new Date(2026, 0, 2, 8, 0, 0); // 2 jan 2026 local
    const result = resolveDailyProgram({ path, now });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.suggestion.dateKey).toBe("2026-01-02");
  });

  it("refuse un path non publié", () => {
    const draft: BeginnerPath = {
      ...path,
      publicationStatus: "draft",
    };
    expect(resolveDailyProgram({ path: draft, dateKey: "2026-08-08" })).toEqual(
      { ok: false, reason: "not_published" },
    );
  });

  it("refuse un pool vide", () => {
    const empty: BeginnerPath = { ...path, orderedSessionIds: [] };
    expect(
      resolveDailyProgram({ path: empty, dateKey: "2026-08-08" }),
    ).toEqual({ ok: false, reason: "empty_path" });
  });

  it("refuse une dateKey invalide", () => {
    expect(
      resolveDailyProgram({ path, dateKey: "2026-02-31" }),
    ).toEqual({ ok: false, reason: "invalid_date" });
  });
});
