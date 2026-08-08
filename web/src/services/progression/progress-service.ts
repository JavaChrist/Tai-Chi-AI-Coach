import { withTrimmedHistory } from "@/domain/progression/history-limit";
import {
  computeUserStatistics,
  emptyHistory,
  listPracticeSummaries,
} from "@/domain/progression/statistics";
import type {
  PracticeHistory,
  PracticeRecord,
  PracticeSummary,
  RecordPracticeInput,
  UserStatistics,
} from "@/domain/progression/types";
import { createLocalStorageProgressStore } from "@/services/progression/local-storage-progress-store";
import type { ProgressStore } from "@/services/progression/progress-store";

export const PROGRESS_UPDATED_EVENT = "tai-chi-progress-updated";

export type ProgressService = {
  getHistory: () => PracticeHistory;
  listSummaries: () => PracticeSummary[];
  getStatistics: () => UserStatistics;
  recordPractice: (input: RecordPracticeInput) => PracticeRecord;
  clearHistory: () => void;
};

function createId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `practice-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function notifyUpdated() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(PROGRESS_UPDATED_EVENT));
  }
}

export function createProgressService(store: ProgressStore): ProgressService {
  return {
    getHistory() {
      return store.loadHistory();
    },

    listSummaries() {
      return listPracticeSummaries(store.loadHistory());
    },

    getStatistics() {
      return computeUserStatistics(store.loadHistory());
    },

    recordPractice(input) {
      const history = store.loadHistory();
      const record: PracticeRecord = {
        id: createId(),
        sessionTemplateId: input.sessionTemplateId,
        sessionTitle: input.sessionTitle,
        practicedAt: input.practicedAt ?? new Date().toISOString(),
        durationMs: Math.max(0, input.durationMs),
        status: input.status,
        stepsCompleted: Math.max(0, input.stepsCompleted),
        stepsTotal: Math.max(0, input.stepsTotal),
      };

      const next = withTrimmedHistory({
        version: 1,
        records: [record, ...history.records],
      });
      store.saveHistory(next);
      notifyUpdated();
      return record;
    },

    clearHistory() {
      if (store.clearHistory) {
        store.clearHistory();
      } else {
        store.saveHistory(emptyHistory());
      }
      notifyUpdated();
    },
  };
}

let browserService: ProgressService | null = null;

/** Service navigateur (lazy) — à utiliser uniquement côté client. */
export function getProgressService(): ProgressService {
  if (!browserService) {
    browserService = createProgressService(createLocalStorageProgressStore());
  }
  return browserService;
}

/** Tests uniquement. */
export function __resetProgressServiceForTests() {
  browserService = null;
}

export function createMemoryProgressStore(
  initial: PracticeHistory = emptyHistory(),
): ProgressStore {
  let history = initial;
  return {
    loadHistory: () => history,
    saveHistory: (next) => {
      history = next;
    },
    clearHistory: () => {
      history = emptyHistory();
    },
  };
}
