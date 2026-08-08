import { describe, expect, it } from "vitest";

import { wasSessionCompletedOnLocalDate } from "@/domain/progression/practiced-today";
import type { PracticeHistory } from "@/domain/progression/types";

describe("wasSessionCompletedOnLocalDate", () => {
  it("détecte une séance complétée le jour local", () => {
    const history: PracticeHistory = {
      version: 1,
      records: [
        {
          id: "1",
          sessionTemplateId: "st-day",
          sessionTitle: "Jour",
          practicedAt: "2026-08-09T15:00:00.000Z",
          durationMs: 1000,
          status: "completed",
          stepsCompleted: 1,
          stepsTotal: 1,
        },
      ],
    };
    // Utilise la clé locale dérivée de practicedAt pour rester déterministe.
    const date = new Date("2026-08-09T15:00:00.000Z");
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    expect(wasSessionCompletedOnLocalDate(history, "st-day", key)).toBe(true);
    expect(wasSessionCompletedOnLocalDate(history, "st-day", "2020-01-01")).toBe(
      false,
    );
  });

  it("ignore abandoned", () => {
    const history: PracticeHistory = {
      version: 1,
      records: [
        {
          id: "1",
          sessionTemplateId: "st-day",
          sessionTitle: "Jour",
          practicedAt: "2026-08-09T15:00:00.000Z",
          durationMs: 1000,
          status: "abandoned",
          stepsCompleted: 0,
          stepsTotal: 1,
        },
      ],
    };
    expect(
      wasSessionCompletedOnLocalDate(history, "st-day", "2026-08-09"),
    ).toBe(false);
  });
});
