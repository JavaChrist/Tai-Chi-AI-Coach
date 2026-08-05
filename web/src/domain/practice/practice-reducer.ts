import type {
  LocalPracticeSession,
  PracticeSummary,
  PracticeTemplateSnapshot,
} from "@/domain/practice/types";

export type PracticeAction =
  | { type: "START" }
  | { type: "BEGIN_STEPS" }
  | { type: "NEXT_STEP" }
  | { type: "PAUSE" }
  | { type: "RESUME" }
  | { type: "COMPLETE" }
  | { type: "ABANDON" }
  | { type: "TICK"; now: number };

function createId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `practice-${Date.now()}`;
}

export function createInitialPracticeState(
  template: PracticeTemplateSnapshot,
): LocalPracticeSession {
  const steps = [...template.steps].sort((a, b) => a.sortOrder - b.sortOrder);

  return {
    id: createId(),
    templateId: template.id,
    templateVersion: template.contentVersion,
    templateTitle: template.title,
    steps,
    status: "ready",
    phase: "intro",
    currentStepIndex: 0,
    completedStepIds: [],
    startedAt: null,
    endedAt: null,
    activeElapsedMs: 0,
    activeSegmentStartedAt: null,
    endReason: null,
  };
}

function flushActiveTime(state: LocalPracticeSession, now: number): number {
  if (state.status !== "running" || state.activeSegmentStartedAt == null) {
    return state.activeElapsedMs;
  }
  return state.activeElapsedMs + Math.max(0, now - state.activeSegmentStartedAt);
}

export function practiceReducer(
  state: LocalPracticeSession,
  action: PracticeAction,
): LocalPracticeSession {
  const now =
    action.type === "TICK"
      ? action.now
      : Date.now();

  switch (action.type) {
    case "START": {
      if (state.status !== "ready") return state;
      return {
        ...state,
        status: "running",
        phase: "intro",
        startedAt: now,
        activeSegmentStartedAt: now,
        activeElapsedMs: 0,
        completedStepIds: [],
        currentStepIndex: 0,
        endReason: null,
        endedAt: null,
      };
    }

    case "BEGIN_STEPS": {
      if (state.status !== "running" && state.status !== "paused") return state;
      if (state.phase !== "intro") return state;
      if (state.steps.length === 0) {
        const elapsed = flushActiveTime(state, now);
        return {
          ...state,
          status: "completed",
          phase: "summary",
          activeElapsedMs: elapsed,
          activeSegmentStartedAt: null,
          endedAt: now,
          endReason: "completed",
        };
      }
      return {
        ...state,
        phase: "step",
        currentStepIndex: 0,
        status: state.status === "paused" ? "paused" : "running",
        activeSegmentStartedAt:
          state.status === "paused" ? null : state.activeSegmentStartedAt ?? now,
      };
    }

    case "NEXT_STEP": {
      if (state.phase !== "step") return state;
      if (state.status !== "running" && state.status !== "paused") return state;

      const current = state.steps[state.currentStepIndex];
      const completedStepIds = current
        ? state.completedStepIds.includes(current.id)
          ? state.completedStepIds
          : [...state.completedStepIds, current.id]
        : state.completedStepIds;

      const nextIndex = state.currentStepIndex + 1;
      if (nextIndex >= state.steps.length) {
        const elapsed = flushActiveTime(state, now);
        return {
          ...state,
          completedStepIds,
          status: "completed",
          phase: "summary",
          activeElapsedMs: elapsed,
          activeSegmentStartedAt: null,
          endedAt: now,
          endReason: "completed",
        };
      }

      return {
        ...state,
        completedStepIds,
        currentStepIndex: nextIndex,
      };
    }

    case "PAUSE": {
      if (state.status !== "running") return state;
      if (state.phase === "summary") return state;
      const elapsed = flushActiveTime(state, now);
      return {
        ...state,
        status: "paused",
        activeElapsedMs: elapsed,
        activeSegmentStartedAt: null,
      };
    }

    case "RESUME": {
      if (state.status !== "paused") return state;
      return {
        ...state,
        status: "running",
        activeSegmentStartedAt: now,
      };
    }

    case "COMPLETE": {
      if (state.phase === "summary") return state;
      if (state.status === "completed" || state.status === "abandoned") return state;
      const elapsed = flushActiveTime(state, now);
      const current = state.steps[state.currentStepIndex];
      const completedStepIds =
        state.phase === "step" && current
          ? state.completedStepIds.includes(current.id)
            ? state.completedStepIds
            : [...state.completedStepIds, current.id]
          : state.completedStepIds;

      return {
        ...state,
        completedStepIds,
        status: "completed",
        phase: "summary",
        activeElapsedMs: elapsed,
        activeSegmentStartedAt: null,
        endedAt: now,
        endReason: "completed",
      };
    }

    case "ABANDON": {
      if (state.status === "completed" || state.status === "abandoned") return state;
      if (state.status === "ready") return state;
      const elapsed = flushActiveTime(state, now);
      return {
        ...state,
        status: "abandoned",
        phase: "summary",
        activeElapsedMs: elapsed,
        activeSegmentStartedAt: null,
        endedAt: now,
        endReason: "abandoned",
      };
    }

    case "TICK": {
      if (state.status !== "running" || state.activeSegmentStartedAt == null) {
        return state;
      }
      return {
        ...state,
        activeElapsedMs: flushActiveTime(state, now),
        activeSegmentStartedAt: now,
      };
    }

    default:
      return state;
  }
}

export function buildPracticeSummary(
  state: LocalPracticeSession,
  plannedDurationMinutes: number,
): PracticeSummary | null {
  if (!state.endReason) return null;
  return {
    templateId: state.templateId,
    templateTitle: state.templateTitle,
    endReason: state.endReason,
    stepsTotal: state.steps.length,
    stepsCompleted: state.completedStepIds.length,
    activeElapsedMs: state.activeElapsedMs,
    plannedDurationMinutes,
  };
}

export function formatActiveDuration(ms: number): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (minutes === 0) return `${seconds} s`;
  return `${minutes} min ${seconds.toString().padStart(2, "0")} s`;
}
