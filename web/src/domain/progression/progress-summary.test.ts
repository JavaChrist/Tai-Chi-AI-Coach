import { describe, expect, it } from "vitest";

import type { BeginnerPath } from "@/domain/beginner-path/types";
import { emptyHistory } from "@/domain/progression/statistics";
import { computeProgressSummary } from "@/domain/progression/progress-summary";
import type { PracticeHistory } from "@/domain/progression/types";

const path: BeginnerPath = {
  id: "bp-1",
  title: "Parcours",
  description: "Desc",
  orderedSessionIds: ["a", "b", "c"],
  publicationStatus: "published",
  contentVersion: "1",
  locale: "fr",
};

function history(
  records: PracticeHistory["records"],
): PracticeHistory {
  return { version: 1, records };
}

describe("computeProgressSummary", () => {
  it("aucune séance", () => {
    const summary = computeProgressSummary(path, emptyHistory());
    expect(summary.nextSessionId).toBe("a");
    expect(summary.allCompleted).toBe(false);
    expect(summary.steps.every((s) => s.status === "not_started")).toBe(true);
  });

  it("certaines complétées → prochaine étape", () => {
    const summary = computeProgressSummary(
      path,
      history([
        {
          id: "1",
          sessionTemplateId: "a",
          sessionTitle: "A",
          practicedAt: "2026-08-01T10:00:00.000Z",
          durationMs: 1000,
          status: "completed",
          stepsCompleted: 1,
          stepsTotal: 1,
        },
        {
          id: "2",
          sessionTemplateId: "b",
          sessionTitle: "B",
          practicedAt: "2026-08-02T10:00:00.000Z",
          durationMs: 500,
          status: "abandoned",
          stepsCompleted: 0,
          stepsTotal: 2,
        },
      ]),
    );
    expect(summary.steps[0]?.status).toBe("completed");
    expect(summary.steps[1]?.status).toBe("started");
    expect(summary.nextSessionId).toBe("b");
  });

  it("toutes complétées", () => {
    const summary = computeProgressSummary(
      path,
      history(
        ["a", "b", "c"].map((id, index) => ({
          id: `${index}`,
          sessionTemplateId: id,
          sessionTitle: id,
          practicedAt: `2026-08-0${index + 1}T10:00:00.000Z`,
          durationMs: 1000,
          status: "completed" as const,
          stepsCompleted: 1,
          stepsTotal: 1,
        })),
      ),
    );
    expect(summary.allCompleted).toBe(true);
    expect(summary.nextSessionId).toBeNull();
  });

  it("répétitions sans faux progrès", () => {
    const summary = computeProgressSummary(
      path,
      history([
        {
          id: "1",
          sessionTemplateId: "a",
          sessionTitle: "A",
          practicedAt: "2026-08-01T10:00:00.000Z",
          durationMs: 1000,
          status: "completed",
          stepsCompleted: 1,
          stepsTotal: 1,
        },
        {
          id: "2",
          sessionTemplateId: "a",
          sessionTitle: "A",
          practicedAt: "2026-08-02T10:00:00.000Z",
          durationMs: 1000,
          status: "completed",
          stepsCompleted: 1,
          stepsTotal: 1,
        },
      ]),
    );
    expect(summary.nextSessionId).toBe("b");
    expect(summary.steps.filter((s) => s.status === "completed")).toHaveLength(
      1,
    );
  });
});
