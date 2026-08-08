import { beforeEach, describe, expect, it } from "vitest";

import type { PracticeResumeState } from "@/domain/practice/resume-types";
import { clearPracticeData } from "@/services/practice-data/clear-practice-data";
import {
  __resetPracticeResumeServiceForTests,
  getPracticeResumeService,
} from "@/services/practice-resume/practice-resume-service";
import {
  __resetProgressServiceForTests,
  getProgressService,
} from "@/services/progression/progress-service";

const resume: PracticeResumeState = {
  version: 1,
  practiceSessionId: "p1",
  sessionTemplateId: "st-1",
  templateVersion: "1",
  phase: "intro",
  currentStepIndex: 0,
  currentStepId: null,
  completedStepIds: [],
  status: "running",
  activeElapsedMs: 10,
  startedAt: 1,
  stepsTotal: 1,
  updatedAt: 2,
};

function installMemoryLocalStorage() {
  const map = new Map<string, string>();
  const storage = {
    getItem: (key: string) => map.get(key) ?? null,
    setItem: (key: string, value: string) => {
      map.set(key, value);
    },
    removeItem: (key: string) => {
      map.delete(key);
    },
    clear: () => map.clear(),
    key: () => null,
    get length() {
      return map.size;
    },
  };
  Object.defineProperty(globalThis, "localStorage", {
    value: storage,
    configurable: true,
  });
}

describe("clearPracticeData", () => {
  beforeEach(() => {
    installMemoryLocalStorage();
    __resetProgressServiceForTests();
    __resetPracticeResumeServiceForTests();
  });

  it("efface historique et reprise", () => {
    const progress = getProgressService();
    const resumeService = getPracticeResumeService();
    progress.recordPractice({
      sessionTemplateId: "x",
      sessionTitle: "X",
      durationMs: 1,
      status: "completed",
      stepsCompleted: 1,
      stepsTotal: 1,
    });
    resumeService.saveResume(resume);

    clearPracticeData();

    expect(progress.getHistory().records).toHaveLength(0);
    expect(resumeService.getResume()).toBeNull();
  });
});
