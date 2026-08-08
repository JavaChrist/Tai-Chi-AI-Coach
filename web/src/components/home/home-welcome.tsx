"use client";

import { useMemo, useSyncExternalStore } from "react";

import { HomeWelcomeView } from "@/components/home/home-welcome-view";
import type { SessionTemplateSummary } from "@/domain/curriculum/types";
import {
  computeUserStatistics,
  emptyHistory,
  listPracticeSummaries,
} from "@/domain/progression/statistics";
import type { PracticeHistory } from "@/domain/progression/types";
import { beginnerPathReader } from "@/services/beginner-path/beginner-path-reader";
import { curriculumReader } from "@/services/curriculum/curriculum-reader";
import { resolveDailyProgram } from "@/services/daily-program/resolve-daily-program";
import { getProgressService } from "@/services/progression/progress-service";

type Snapshot =
  | { status: "ready"; history: PracticeHistory; key: string }
  | { status: "error"; key: string };

const emptySnapshot: Snapshot = {
  status: "ready",
  history: emptyHistory(),
  key: "empty",
};

let cached: Snapshot = emptySnapshot;

function readSnapshot(): Snapshot {
  try {
    const history = getProgressService().getHistory();
    const key = JSON.stringify(history);
    if (cached.status === "ready" && cached.key === key) return cached;
    cached = { status: "ready", history, key };
    return cached;
  } catch {
    cached = { status: "error", key: "error" };
    return cached;
  }
}

function subscribe(onStoreChange: () => void) {
  const handler = () => {
    cached = emptySnapshot;
    onStoreChange();
  };
  window.addEventListener("storage", handler);
  window.addEventListener("tai-chi-progress-updated", handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener("tai-chi-progress-updated", handler);
  };
}

function listPublished(): SessionTemplateSummary[] {
  try {
    return curriculumReader.listSessions({
      publicationStatus: "published",
      availableOnly: true,
    });
  } catch {
    return [];
  }
}

function resolveDailySessionSummary(): SessionTemplateSummary | null {
  try {
    const pathResult = beginnerPathReader.getPublishedPath();
    if (!pathResult.ok) return null;

    const resolved = resolveDailyProgram({ path: pathResult.path });
    if (!resolved.ok) return null;

    const sessions = listPublished();
    return (
      sessions.find(
        (session) => session.id === resolved.suggestion.sessionId,
      ) ?? null
    );
  } catch {
    return null;
  }
}

function formatSoftDate(iso: string | null): string {
  if (!iso) return "Pas encore de pratique";
  try {
    return new Intl.DateTimeFormat("fr-FR", { dateStyle: "long" }).format(
      new Date(iso),
    );
  } catch {
    return iso;
  }
}

/** Accueil — données locales + présentation (12A §9.3) ; F-008 séance du jour. */
export function HomeWelcome() {
  const snapshot = useSyncExternalStore(subscribe, readSnapshot, () => emptySnapshot);

  const sessions = useMemo(() => listPublished(), []);
  const dailySession = useMemo(() => resolveDailySessionSummary(), []);

  const history =
    snapshot.status === "ready" ? snapshot.history : emptyHistory();
  const stats = computeUserStatistics(history);
  const lastSummary = listPracticeSummaries(history)[0] ?? null;
  const resumeSession =
    lastSummary &&
    sessions.find((session) => session.id === lastSummary.sessionTemplateId);

  const progressLabel =
    stats.totalSessions === 0
      ? "Votre carnet est encore vide. Une première séance suffit pour commencer."
      : `${stats.totalSessions} pratique${stats.totalSessions > 1 ? "s" : ""} · ${formatSoftDate(stats.lastPracticedAt)}`;

  return (
    <HomeWelcomeView
      dailySession={dailySession}
      resumeSession={resumeSession || null}
      stats={stats}
      progressLabel={progressLabel}
    />
  );
}
