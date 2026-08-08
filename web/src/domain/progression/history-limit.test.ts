import { describe, expect, it } from "vitest";

import {
  PRACTICE_HISTORY_MAX_RECORDS,
  trimPracticeHistory,
} from "@/domain/progression/history-limit";
import type { PracticeRecord } from "@/domain/progression/types";

function record(id: string): PracticeRecord {
  return {
    id,
    sessionTemplateId: "st",
    sessionTitle: "S",
    practicedAt: `2026-08-01T10:00:00.00${id}Z`,
    durationMs: 1000,
    status: "completed",
    stepsCompleted: 1,
    stepsTotal: 1,
  };
}

describe("trimPracticeHistory FIFO", () => {
  it("conserve les 200 plus récentes", () => {
    const records = Array.from({ length: 205 }, (_, i) =>
      record(String(i).padStart(3, "0")),
    );
    // index 0 = plus récent
    const trimmed = trimPracticeHistory(records, PRACTICE_HISTORY_MAX_RECORDS);
    expect(trimmed).toHaveLength(200);
    expect(trimmed[0]?.id).toBe("000");
    expect(trimmed[199]?.id).toBe("199");
    expect(trimmed.find((r) => r.id === "204")).toBeUndefined();
  });

  it("autorise les répétitions sous la limite", () => {
    const records = [record("a"), record("a2"), record("b")];
    expect(trimPracticeHistory(records, 200)).toHaveLength(3);
  });
});
