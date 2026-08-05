import type {
  PracticeHistory,
  PracticeRecord,
  PracticeSummary,
  UserStatistics,
} from "@/domain/progression/types";

export function emptyHistory(): PracticeHistory {
  return { version: 1, records: [] };
}

export function toPracticeSummary(record: PracticeRecord): PracticeSummary {
  return {
    id: record.id,
    sessionTemplateId: record.sessionTemplateId,
    sessionTitle: record.sessionTitle,
    practicedAt: record.practicedAt,
    durationMs: record.durationMs,
    status: record.status,
    stepsCompleted: record.stepsCompleted,
    stepsTotal: record.stepsTotal,
  };
}

export function computeUserStatistics(history: PracticeHistory): UserStatistics {
  const records = history.records;
  const totalSessions = records.length;
  const completedSessions = records.filter((r) => r.status === "completed").length;
  const totalDurationMs = records.reduce((sum, r) => sum + r.durationMs, 0);
  const averageDurationMs =
    totalSessions === 0 ? 0 : Math.round(totalDurationMs / totalSessions);

  let lastPracticedAt: string | null = null;
  for (const record of records) {
    if (!lastPracticedAt || record.practicedAt > lastPracticedAt) {
      lastPracticedAt = record.practicedAt;
    }
  }

  return {
    totalSessions,
    completedSessions,
    totalDurationMs,
    averageDurationMs,
    lastPracticedAt,
  };
}

export function listPracticeSummaries(history: PracticeHistory): PracticeSummary[] {
  return [...history.records]
    .sort((a, b) => (a.practicedAt < b.practicedAt ? 1 : -1))
    .map(toPracticeSummary);
}
