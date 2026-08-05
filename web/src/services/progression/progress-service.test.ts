import { describe, expect, it } from "vitest";

import { emptyHistory } from "@/domain/progression/statistics";
import {
  createMemoryProgressStore,
  createProgressService,
} from "@/services/progression/progress-service";
import { createLocalStorageProgressStore } from "@/services/progression/local-storage-progress-store";

function memoryStorage(initial: Record<string, string> = {}) {
  const map = new Map(Object.entries(initial));
  return {
    getItem: (key: string) => map.get(key) ?? null,
    setItem: (key: string, value: string) => {
      map.set(key, value);
    },
  };
}

describe("progressService", () => {
  it("crée un historique en enregistrant une pratique", () => {
    const service = createProgressService(createMemoryProgressStore());
    expect(service.getHistory()).toEqual(emptyHistory());

    const record = service.recordPractice({
      sessionTemplateId: "st-test",
      sessionTitle: "Séance test",
      durationMs: 120000,
      status: "completed",
      stepsCompleted: 3,
      stepsTotal: 3,
    });

    expect(record.sessionTemplateId).toBe("st-test");
    expect(service.getHistory().records).toHaveLength(1);
    expect(service.listSummaries()[0]?.sessionTitle).toBe("Séance test");
  });

  it("calcule les statistiques à partir des données locales", () => {
    const service = createProgressService(createMemoryProgressStore());
    service.recordPractice({
      sessionTemplateId: "a",
      sessionTitle: "A",
      practicedAt: "2026-08-01T10:00:00.000Z",
      durationMs: 60000,
      status: "completed",
      stepsCompleted: 2,
      stepsTotal: 2,
    });
    service.recordPractice({
      sessionTemplateId: "b",
      sessionTitle: "B",
      practicedAt: "2026-08-05T10:00:00.000Z",
      durationMs: 180000,
      status: "abandoned",
      stepsCompleted: 1,
      stepsTotal: 3,
    });

    const stats = service.getStatistics();
    expect(stats.totalSessions).toBe(2);
    expect(stats.completedSessions).toBe(1);
    expect(stats.totalDurationMs).toBe(240000);
    expect(stats.averageDurationMs).toBe(120000);
    expect(stats.lastPracticedAt).toBe("2026-08-05T10:00:00.000Z");
  });

  it("retourne un historique vide sans enregistrement", () => {
    const service = createProgressService(createMemoryProgressStore());
    expect(service.listSummaries()).toEqual([]);
    expect(service.getStatistics().totalSessions).toBe(0);
    expect(service.getStatistics().lastPracticedAt).toBeNull();
  });

  it("lit et écrit via un stockage local simulé", () => {
    const storage = memoryStorage();
    const service = createProgressService(createLocalStorageProgressStore(storage));

    service.recordPractice({
      sessionTemplateId: "st-1",
      sessionTitle: "Première",
      durationMs: 30000,
      status: "completed",
      stepsCompleted: 1,
      stepsTotal: 1,
    });

    const again = createProgressService(createLocalStorageProgressStore(storage));
    expect(again.getHistory().records).toHaveLength(1);
    expect(again.listSummaries()[0]?.sessionTitle).toBe("Première");
  });

  it("expose un historique rempli trié du plus récent au plus ancien", () => {
    const service = createProgressService(createMemoryProgressStore());
    service.recordPractice({
      sessionTemplateId: "old",
      sessionTitle: "Ancienne",
      practicedAt: "2026-07-01T10:00:00.000Z",
      durationMs: 1000,
      status: "completed",
      stepsCompleted: 1,
      stepsTotal: 1,
    });
    service.recordPractice({
      sessionTemplateId: "new",
      sessionTitle: "Récente",
      practicedAt: "2026-08-05T10:00:00.000Z",
      durationMs: 2000,
      status: "completed",
      stepsCompleted: 1,
      stepsTotal: 1,
    });

    const summaries = service.listSummaries();
    expect(summaries[0]?.sessionTitle).toBe("Récente");
    expect(summaries[1]?.sessionTitle).toBe("Ancienne");
  });
});
