"use client";

import Link from "next/link";
import { useMemo, useSyncExternalStore } from "react";
import { BookOpen, Leaf, RotateCcw } from "lucide-react";

import { AppBrand } from "@/components/brand/app-brand";
import { usePreferences } from "@/components/preferences/preferences-provider";
import { Button } from "@/components/ui/button";
import { difficultyLabels, formatDurationMinutes } from "@/domain/curriculum/labels";
import type { SessionTemplateSummary } from "@/domain/curriculum/types";
import { sortSessionsByPreferences } from "@/domain/preferences/sort-sessions";
import {
  computeUserStatistics,
  emptyHistory,
  listPracticeSummaries,
} from "@/domain/progression/statistics";
import type { PracticeHistory } from "@/domain/progression/types";
import { curriculumReader } from "@/services/curriculum/curriculum-reader";
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

/** Accueil — accueillir, une action principale, respiration (12A §9.3). */
export function HomeWelcome() {
  const { preferences, status } = usePreferences();
  const snapshot = useSyncExternalStore(subscribe, readSnapshot, () => emptySnapshot);

  const sessions = useMemo(() => listPublished(), []);
  const ordered = useMemo(() => {
    if (status !== "ready") return sessions;
    return sortSessionsByPreferences(sessions, preferences.practice);
  }, [preferences.practice, sessions, status]);

  const nextSession = ordered[0] ?? null;
  const history =
    snapshot.status === "ready" ? snapshot.history : emptyHistory();
  const stats = computeUserStatistics(history);
  const lastSummary = listPracticeSummaries(history)[0] ?? null;
  const resumeSession =
    lastSummary &&
    sessions.find((session) => session.id === lastSummary.sessionTemplateId);

  return (
    <div className="mx-auto flex w-full max-w-reading flex-col gap-12 px-4 py-10 sm:px-6">
      <header className="space-y-6 pt-4">
        <AppBrand variant="compact" size="lg" href={null} />
        <div className="space-y-3">
          <h1 className="text-hero text-foreground">Bienvenue</h1>
          <p className="text-body text-muted-foreground">
            Un espace calme pour pratiquer le Tai Chi, à votre rythme.
          </p>
        </div>
      </header>

      {nextSession ? (
        <section className="space-y-4" aria-labelledby="home-next-heading">
          <h2 id="home-next-heading" className="text-h2 text-foreground">
            Prochaine pratique
          </h2>
          <div className="bg-card border-border shadow-medium space-y-4 rounded-card border p-6">
            <div className="space-y-2">
              <p className="text-h3 text-foreground">{nextSession.title}</p>
              <p className="text-small text-muted-foreground">
                {formatDurationMinutes(nextSession.plannedDurationMinutes)}
                {" · "}
                {difficultyLabels[nextSession.difficulty]}
                {nextSession.primaryObjectiveLabel
                  ? ` · ${nextSession.primaryObjectiveLabel}`
                  : null}
              </p>
            </div>
            <Button variant="primary" asChild>
              <Link href={`/pratique/${nextSession.id}`}>
                <Leaf className="size-4" strokeWidth={1.75} aria-hidden />
                Commencer
              </Link>
            </Button>
          </div>
        </section>
      ) : null}

      {resumeSession ? (
        <section className="space-y-3" aria-labelledby="home-resume-heading">
          <h2 id="home-resume-heading" className="text-h2 text-foreground">
            Reprendre
          </h2>
          <p className="text-small text-muted-foreground">
            Dernière séance : {resumeSession.title}
          </p>
          <Button variant="secondary" asChild>
            <Link href={`/pratique/${resumeSession.id}`}>
              <RotateCcw className="size-4" strokeWidth={1.75} aria-hidden />
              Reprendre cette séance
            </Link>
          </Button>
        </section>
      ) : null}

      <section className="space-y-3" aria-labelledby="home-progress-heading">
        <h2 id="home-progress-heading" className="text-h2 text-foreground">
          Progression
        </h2>
        <p className="text-body text-muted-foreground">
          {stats.totalSessions === 0
            ? "Votre carnet est encore vide. Une première séance suffit pour commencer."
            : `${stats.totalSessions} pratique${stats.totalSessions > 1 ? "s" : ""} · ${formatSoftDate(stats.lastPracticedAt)}`}
        </p>
        <Button variant="ghost" asChild className="px-0">
          <Link href="/progression">Voir mon carnet</Link>
        </Button>
      </section>

      <section className="space-y-3" aria-labelledby="home-library-heading">
        <h2 id="home-library-heading" className="text-h2 text-foreground">
          Bibliothèque
        </h2>
        <p className="text-body text-muted-foreground">
          Découvrir d’autres séances, sans obligation.
        </p>
        <Button variant="outline" asChild>
          <Link href="/bibliotheque">
            <BookOpen className="size-4" strokeWidth={1.75} aria-hidden />
            Parcourir
          </Link>
        </Button>
      </section>

      <div className="min-h-24" aria-hidden />
    </div>
  );
}
