"use client";

import { useCallback, useSyncExternalStore } from "react";
import Link from "next/link";

import { HistoryList } from "@/components/progression/history-list";
import { ProgressionStats } from "@/components/progression/progression-stats";
import { Section } from "@/components/layout/section";
import { ErrorState } from "@/components/states/error-state";
import { Button } from "@/components/ui/button";
import {
  computeUserStatistics,
  emptyHistory,
  listPracticeSummaries,
} from "@/domain/progression/statistics";
import type { PracticeHistory } from "@/domain/progression/types";
import { getProgressService } from "@/services/progression/progress-service";

type Snapshot =
  | { status: "error"; message: string; historyKey: string }
  | { status: "ready"; history: PracticeHistory; historyKey: string };

const emptySnapshot: Snapshot = {
  status: "ready",
  history: emptyHistory(),
  historyKey: "empty",
};

let cachedSnapshot: Snapshot = emptySnapshot;

function readSnapshot(): Snapshot {
  try {
    const history = getProgressService().getHistory();
    const historyKey = JSON.stringify(history);
    if (
      cachedSnapshot.status === "ready" &&
      cachedSnapshot.historyKey === historyKey
    ) {
      return cachedSnapshot;
    }
    cachedSnapshot = { status: "ready", history, historyKey };
    return cachedSnapshot;
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Impossible de lire la progression locale.";
    cachedSnapshot = { status: "error", message, historyKey: "error" };
    return cachedSnapshot;
  }
}

function subscribe(onStoreChange: () => void) {
  const handler = () => {
    cachedSnapshot = emptySnapshot;
    onStoreChange();
  };
  window.addEventListener("storage", handler);
  window.addEventListener("tai-chi-progress-updated", handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener("tai-chi-progress-updated", handler);
  };
}

export function ProgressionDashboard() {
  const snapshot = useSyncExternalStore(
    subscribe,
    readSnapshot,
    () => emptySnapshot,
  );

  const retry = useCallback(() => {
    cachedSnapshot = emptySnapshot;
    window.dispatchEvent(new Event("tai-chi-progress-updated"));
  }, []);

  if (snapshot.status === "error") {
    return (
      <ErrorState
        title="Lecture momentanément indisponible"
        description="Votre carnet n’a pas pu être lu. Réessayez dans un instant — rien n’est perdu."
        action={
          <Button type="button" variant="outline" onClick={retry}>
            Réessayer
          </Button>
        }
      />
    );
  }

  const statistics = computeUserStatistics(snapshot.history);
  const summaries = listPracticeSummaries(snapshot.history);

  return (
    <div className="space-y-14">
      <Section
        title="Votre chemin"
        description="Un carnet personnel, sans classement."
      >
        <ProgressionStats statistics={statistics} />
      </Section>

      <Section
        title="Continuer"
        description="Une suggestion simple, sans obligation."
      >
        <Button variant="primary" asChild>
          <Link href="/bibliotheque">Choisir une séance</Link>
        </Button>
      </Section>

      <Section
        title="Historique"
        description="De la plus récente à la plus ancienne."
      >
        <HistoryList summaries={summaries} />
      </Section>
    </div>
  );
}
