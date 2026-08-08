"use client";

import { useCallback, useMemo, useState, useSyncExternalStore } from "react";

import { ConfirmationDialog } from "@/components/dialogs/confirmation-dialog";
import { HomeWelcomeView } from "@/components/home/home-welcome-view";
import type { SessionTemplateSummary } from "@/domain/curriculum/types";
import { wasSessionCompletedOnLocalDate } from "@/domain/progression/practiced-today";
import {
  computeUserStatistics,
  emptyHistory,
  listPracticeSummaries,
} from "@/domain/progression/statistics";
import type { PracticeHistory } from "@/domain/progression/types";
import type { PracticeResumeState } from "@/domain/practice/resume-types";
import { beginnerPathReader } from "@/services/beginner-path/beginner-path-reader";
import { curriculumReader } from "@/services/curriculum/curriculum-reader";
import { resolveDailyProgram } from "@/services/daily-program/resolve-daily-program";
import {
  getPracticeResumeService,
  PRACTICE_RESUME_UPDATED_EVENT,
} from "@/services/practice-resume/practice-resume-service";
import {
  getProgressService,
  PROGRESS_UPDATED_EVENT,
} from "@/services/progression/progress-service";

type Snapshot = {
  history: PracticeHistory;
  resume: PracticeResumeState | null;
  key: string;
};

const emptySnapshot: Snapshot = {
  history: emptyHistory(),
  resume: null,
  key: "empty",
};

let cached: Snapshot = emptySnapshot;

function readSnapshot(): Snapshot {
  try {
    const history = getProgressService().getHistory();
    const resume = getPracticeResumeService().getResume();
    const key = JSON.stringify({ history, resume });
    if (cached.key === key) return cached;
    cached = { history, resume, key };
    return cached;
  } catch {
    cached = { ...emptySnapshot, key: "error" };
    return cached;
  }
}

function subscribe(onStoreChange: () => void) {
  const handler = () => {
    cached = emptySnapshot;
    onStoreChange();
  };
  window.addEventListener("storage", handler);
  window.addEventListener(PROGRESS_UPDATED_EVENT, handler);
  window.addEventListener(PRACTICE_RESUME_UPDATED_EVENT, handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(PROGRESS_UPDATED_EVENT, handler);
    window.removeEventListener(PRACTICE_RESUME_UPDATED_EVENT, handler);
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

/** Accueil — F-008 + F-032 persistante + F-009/F-010 sobres. */
export function HomeWelcome() {
  const snapshot = useSyncExternalStore(
    subscribe,
    readSnapshot,
    () => emptySnapshot,
  );
  const [abandonOpen, setAbandonOpen] = useState(false);

  const sessions = useMemo(() => listPublished(), []);
  const dailySession = useMemo(() => resolveDailySessionSummary(), []);

  const history = snapshot.history;
  const stats = computeUserStatistics(history);
  const lastSummary = listPracticeSummaries(history)[0] ?? null;

  const activeResumeSession = useMemo(() => {
    const resume = snapshot.resume;
    if (!resume) return null;
    return (
      sessions.find((session) => session.id === resume.sessionTemplateId) ??
      null
    );
  }, [snapshot.resume, sessions]);

  const redoSession = useMemo(() => {
    if (!lastSummary) return null;
    if (
      activeResumeSession &&
      lastSummary.sessionTemplateId === activeResumeSession.id
    ) {
      return null;
    }
    return (
      sessions.find(
        (session) => session.id === lastSummary.sessionTemplateId,
      ) ?? null
    );
  }, [lastSummary, sessions, activeResumeSession]);

  const dailyAlreadyPracticedToday = dailySession
    ? wasSessionCompletedOnLocalDate(history, dailySession.id)
    : false;

  const progressLabel =
    stats.totalSessions === 0
      ? "Votre carnet est encore vide. Une première séance suffit pour commencer."
      : `${stats.totalSessions} pratique${stats.totalSessions > 1 ? "s" : ""} · ${formatSoftDate(stats.lastPracticedAt)}`;

  const confirmAbandonResume = useCallback(() => {
    const resume = getPracticeResumeService().getResume();
    if (!resume) return;
    const session = sessions.find((s) => s.id === resume.sessionTemplateId);
    try {
      getProgressService().recordPractice({
        sessionTemplateId: resume.sessionTemplateId,
        sessionTitle: session?.title ?? resume.sessionTemplateId,
        durationMs: resume.activeElapsedMs,
        status: "abandoned",
        stepsCompleted: resume.completedStepIds.length,
        stepsTotal: resume.stepsTotal,
      });
      getPracticeResumeService().clearResume();
    } catch {
      /* UI reste utilisable */
    }
  }, [sessions]);

  return (
    <>
      <HomeWelcomeView
        dailySession={dailySession}
        dailyAlreadyPracticedToday={dailyAlreadyPracticedToday}
        activeResume={activeResumeSession}
        redoSession={redoSession}
        stats={stats}
        progressLabel={progressLabel}
        onAbandonResume={
          activeResumeSession ? () => setAbandonOpen(true) : undefined
        }
      />
      <ConfirmationDialog
        open={abandonOpen}
        onOpenChange={setAbandonOpen}
        title="Abandonner la séance en cours ?"
        description="Elle sera notée comme interrompue dans votre carnet. Aucun reproche."
        confirmLabel="Abandonner"
        cancelLabel="Annuler"
        destructive
        onConfirm={confirmAbandonResume}
      />
    </>
  );
}
