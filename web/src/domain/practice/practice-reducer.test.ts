import { describe, expect, it } from "vitest";

import {
  buildPracticeSummary,
  createInitialPracticeState,
  formatActiveDuration,
  practiceReducer,
} from "@/domain/practice/practice-reducer";
import type { PracticeTemplateSnapshot } from "@/domain/practice/types";

const template: PracticeTemplateSnapshot = {
  id: "st-test",
  title: "Séance test",
  contentVersion: "0.1.0",
  plannedDurationMinutes: 10,
  isStructuralPlaceholder: true,
  objectives: [{ id: "o1", label: "Rester calme" }],
  steps: [
    {
      id: "s1",
      kind: "preparation",
      title: "Préparation",
      summary: "S’installer",
      sortOrder: 1,
    },
    {
      id: "s2",
      kind: "corps",
      title: "Pratique",
      summary: "Pratiquer",
      sortOrder: 2,
    },
    {
      id: "s3",
      kind: "retour",
      title: "Retour",
      summary: "Ralentir",
      sortOrder: 3,
    },
  ],
};

function started() {
  return practiceReducer(createInitialPracticeState(template), { type: "START" });
}

describe("practiceReducer", () => {
  it("démarre en introduction avec statut running", () => {
    const state = started();
    expect(state.status).toBe("running");
    expect(state.phase).toBe("intro");
    expect(state.startedAt).not.toBeNull();
  });

  it("enchaîne intro → étapes → bilan terminé", () => {
    let state = started();
    state = practiceReducer(state, { type: "BEGIN_STEPS" });
    expect(state.phase).toBe("step");
    expect(state.currentStepIndex).toBe(0);

    state = practiceReducer(state, { type: "NEXT_STEP" });
    expect(state.currentStepIndex).toBe(1);
    expect(state.completedStepIds).toContain("s1");

    state = practiceReducer(state, { type: "NEXT_STEP" });
    expect(state.currentStepIndex).toBe(2);

    state = practiceReducer(state, { type: "NEXT_STEP" });
    expect(state.phase).toBe("summary");
    expect(state.status).toBe("completed");
    expect(state.endReason).toBe("completed");
    expect(state.completedStepIds).toHaveLength(3);
  });

  it("met en pause et reprend sans perdre l’étape", () => {
    let state = started();
    state = practiceReducer(state, { type: "BEGIN_STEPS" });
    state = practiceReducer(state, { type: "NEXT_STEP" });
    expect(state.currentStepIndex).toBe(1);

    state = practiceReducer(state, { type: "PAUSE" });
    expect(state.status).toBe("paused");
    expect(state.currentStepIndex).toBe(1);

    state = practiceReducer(state, { type: "RESUME" });
    expect(state.status).toBe("running");
    expect(state.currentStepIndex).toBe(1);
  });

  it("abandonne vers un bilan non culpabilisant", () => {
    let state = started();
    state = practiceReducer(state, { type: "BEGIN_STEPS" });
    state = practiceReducer(state, { type: "ABANDON" });

    expect(state.status).toBe("abandoned");
    expect(state.phase).toBe("summary");
    expect(state.endReason).toBe("abandoned");

    const summary = buildPracticeSummary(state, template.plannedDurationMinutes);
    expect(summary?.endReason).toBe("abandoned");
    expect(summary?.templateTitle).toBe("Séance test");
  });

  it("cumule le temps actif hors pause", () => {
    let state = started();
    const t0 = state.activeSegmentStartedAt ?? 0;
    state = practiceReducer(state, { type: "TICK", now: t0 + 5000 });
    expect(state.activeElapsedMs).toBeGreaterThanOrEqual(5000);

    state = practiceReducer(state, { type: "PAUSE" });
    const pausedMs = state.activeElapsedMs;
    state = practiceReducer(state, { type: "TICK", now: t0 + 20000 });
    expect(state.activeElapsedMs).toBe(pausedMs);

    state = practiceReducer(state, { type: "RESUME" });
    const resumeAt = state.activeSegmentStartedAt ?? 0;
    state = practiceReducer(state, { type: "TICK", now: resumeAt + 2000 });
    expect(state.activeElapsedMs).toBeGreaterThanOrEqual(pausedMs + 2000);
  });
});

describe("formatActiveDuration", () => {
  it("formate secondes et minutes", () => {
    expect(formatActiveDuration(45000)).toBe("45 s");
    expect(formatActiveDuration(125000)).toBe("2 min 05 s");
  });
});
