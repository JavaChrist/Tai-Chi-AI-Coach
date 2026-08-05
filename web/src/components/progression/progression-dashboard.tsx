"use client";

import { useCallback, useSyncExternalStore } from "react";
import Link from "next/link";

import { HistoryList } from "@/components/progression/history-list";
import { ProgressionStats } from "@/components/progression/progression-stats";
import { Section } from "@/components/layout/section";
import { ErrorState } from "@/components/states/error-state";
import { Button } from "@/components/ui/button";
import { InformationCard } from "@/components/cards/information-card";
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
  const snapshot = useSyncExternalStore(subscribe, readSnapshot, () => emptySnapshot);

  const retry = useCallback(() => {
    cachedSnapshot = emptySnapshot;
    window.dispatchEvent(new Event("tai-chi-progress-updated"));
  }, []);

  if (snapshot.status === "error") {
    return (
      <ErrorState
        title="Lecture momentanément indisponible"
        description={snapshot.message}
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
  const nextStepHint =
    summaries.length === 0
      ? "Commencer une première séance depuis la bibliothèque."
      : "Revenir à la bibliothèque pour une nouvelle pratique calme.";

  return (
    <div className="space-y-8">
      <InformationCard
        title="Progression locale"
        description="Ces informations restent dans votre navigateur. Aucun compte ni synchronisation n’est utilisé pour le moment."
      />

      <Section
        title="Vue d’ensemble"
        description="Indicateurs sobres, sans classement ni compétition."
      >
        <ProgressionStats statistics={statistics} />
      </Section>

      <Section
        title="Prochaine étape"
        description="Une suggestion simple pour continuer sans pression."
      >
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-muted-foreground text-sm">{nextStepHint}</p>
          <Button variant="primary" asChild>
            <Link href="/bibliotheque">Ouvrir la bibliothèque</Link>
          </Button>
        </div>
      </Section>

      <Section
        title="Historique"
        description="Séances enregistrées localement, de la plus récente à la plus ancienne."
      >
        <HistoryList summaries={summaries} />
      </Section>
    </div>
  );
}
