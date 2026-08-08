import { describe, expect, it } from "vitest";

import type { PracticeResumeState } from "@/domain/practice/resume-types";
import type { PracticeTemplateSnapshot } from "@/domain/practice/types";
import {
  createMemoryPracticeResumeStore,
  createPracticeResumeService,
} from "@/services/practice-resume/practice-resume-service";
import { createLocalStoragePracticeResumeStore } from "@/services/practice-resume/local-storage-practice-resume-store";

const template: PracticeTemplateSnapshot = {
  id: "st-1",
  title: "T",
  contentVersion: "1.0.0",
  plannedDurationMinutes: 5,
  isStructuralPlaceholder: true,
  objectives: [],
  steps: [
    {
      id: "s1",
      kind: "preparation",
      title: "S1",
      summary: "",
      sortOrder: 1,
    },
  ],
};

const validResume: PracticeResumeState = {
  version: 1,
  practiceSessionId: "p1",
  sessionTemplateId: "st-1",
  templateVersion: "1.0.0",
  phase: "intro",
  currentStepIndex: 0,
  currentStepId: null,
  completedStepIds: [],
  status: "paused",
  activeElapsedMs: 1200,
  startedAt: 10,
  stepsTotal: 1,
  updatedAt: 20,
};

function memoryStorage(initial: Record<string, string> = {}) {
  const map = new Map(Object.entries(initial));
  return {
    getItem: (key: string) => map.get(key) ?? null,
    setItem: (key: string, value: string) => {
      map.set(key, value);
    },
    removeItem: (key: string) => {
      map.delete(key);
    },
  };
}

describe("practiceResumeService", () => {
  it("persiste et recharge un snapshot", () => {
    const service = createPracticeResumeService(
      createMemoryPracticeResumeStore(),
    );
    service.saveResume(validResume);
    expect(service.getResume()?.practiceSessionId).toBe("p1");
    expect(service.getValidResumeForTemplate(template)?.status).toBe("paused");
  });

  it("nettoie un snapshot incompatible (même séance, version)", () => {
    const store = createMemoryPracticeResumeStore({
      ...validResume,
      templateVersion: "old",
    });
    const service = createPracticeResumeService(store);
    expect(service.getValidResumeForTemplate(template)).toBeNull();
    expect(service.getResume()).toBeNull();
  });

  it("ne détruit pas une reprise d’une autre séance", () => {
    const store = createMemoryPracticeResumeStore(validResume);
    const service = createPracticeResumeService(store);
    expect(
      service.getValidResumeForTemplate({
        ...template,
        id: "st-other",
      }),
    ).toBeNull();
    expect(service.getResume()?.sessionTemplateId).toBe("st-1");
  });

  it("ignore et purge un JSON corrompu en localStorage", () => {
    const storage = memoryStorage({
      "tai-chi-ai-coach.practice-resume.v1": "{not-json",
    });
    const service = createPracticeResumeService(
      createLocalStoragePracticeResumeStore(storage),
    );
    expect(service.getResume()).toBeNull();
    expect(storage.getItem("tai-chi-ai-coach.practice-resume.v1")).toBeNull();
  });

  it("clear efface la reprise (PWA reload survit tant que non clear)", () => {
    const storage = memoryStorage();
    const service = createPracticeResumeService(
      createLocalStoragePracticeResumeStore(storage),
    );
    service.saveResume(validResume);
    const again = createPracticeResumeService(
      createLocalStoragePracticeResumeStore(storage),
    );
    expect(again.getResume()?.sessionTemplateId).toBe("st-1");
    again.clearResume();
    expect(
      createPracticeResumeService(
        createLocalStoragePracticeResumeStore(storage),
      ).getResume(),
    ).toBeNull();
  });
});
