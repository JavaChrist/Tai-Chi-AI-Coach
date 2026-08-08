import { describe, expect, it } from "vitest";

import {
  buildResumeSnapshot,
  hydratePracticeState,
} from "@/domain/practice/resume-snapshot";
import {
  createInitialPracticeState,
  practiceReducer,
} from "@/domain/practice/practice-reducer";
import type { PracticeTemplateSnapshot } from "@/domain/practice/types";
import type { PracticeResumeState } from "@/domain/practice/resume-types";
import { parsePracticeResumeState } from "@/domain/practice/resume-validation";

const template: PracticeTemplateSnapshot = {
  id: "st-resume",
  title: "Séance reprise",
  contentVersion: "1.0.0",
  plannedDurationMinutes: 10,
  isStructuralPlaceholder: true,
  objectives: [],
  steps: [
    {
      id: "step-a",
      kind: "preparation",
      title: "A",
      summary: "A",
      sortOrder: 1,
    },
    {
      id: "step-b",
      kind: "mouvement",
      title: "B",
      summary: "B",
      sortOrder: 2,
    },
  ],
};

function advanceToStep1() {
  let state = practiceReducer(createInitialPracticeState(template), {
    type: "START",
  });
  state = practiceReducer(state, { type: "BEGIN_STEPS" });
  state = practiceReducer(state, { type: "NEXT_STEP" });
  return state;
}

describe("PracticeResumeState — snapshot / hydrate", () => {
  it("sauvegarde après changement d’étape", () => {
    const state = advanceToStep1();
    const snapshot = buildResumeSnapshot(state, 1000);
    expect(snapshot).not.toBeNull();
    expect(snapshot?.phase).toBe("step");
    expect(snapshot?.currentStepId).toBe("step-b");
    expect(snapshot?.currentStepIndex).toBe(1);
  });

  it("sauvegarde l’état pause", () => {
    let state = advanceToStep1();
    state = practiceReducer(state, { type: "PAUSE" });
    const snapshot = buildResumeSnapshot(state, 2000);
    expect(snapshot?.status).toBe("paused");
  });

  it("hydrate à la bonne étape", () => {
    const state = advanceToStep1();
    const snapshot = buildResumeSnapshot(state, 3000)!;
    const restored = hydratePracticeState(template, snapshot);
    expect(restored?.phase).toBe("step");
    expect(restored?.currentStepIndex).toBe(1);
    expect(restored?.steps[1]?.id).toBe("step-b");
  });

  it("rejette schéma invalide", () => {
    expect(parsePracticeResumeState(null)).toBeNull();
    expect(parsePracticeResumeState({ version: 2 })).toBeNull();
    expect(parsePracticeResumeState({ version: 1 })).toBeNull();
  });

  it("rejette session / étape / version incompatibles", () => {
    const base: PracticeResumeState = {
      version: 1,
      practiceSessionId: "p1",
      sessionTemplateId: "st-resume",
      templateVersion: "1.0.0",
      phase: "step",
      currentStepIndex: 0,
      currentStepId: "step-a",
      completedStepIds: [],
      status: "running",
      activeElapsedMs: 10,
      startedAt: 1,
      stepsTotal: 2,
      updatedAt: 1,
    };

    expect(
      hydratePracticeState(template, {
        ...base,
        sessionTemplateId: "unknown",
      }),
    ).toBeNull();

    expect(
      hydratePracticeState(template, {
        ...base,
        templateVersion: "9.9.9",
      }),
    ).toBeNull();

    expect(
      hydratePracticeState(template, {
        ...base,
        currentStepId: "missing",
      }),
    ).toBeNull();
  });

  it("ne crée pas de snapshot en bilan", () => {
    let state = advanceToStep1();
    state = practiceReducer(state, { type: "COMPLETE" });
    expect(buildResumeSnapshot(state)).toBeNull();
  });
});
