import Link from "next/link";
import { BookOpen } from "lucide-react";

import { EmptyState } from "@/components/states/empty-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatActiveDuration } from "@/domain/practice/practice-reducer";
import type { PracticeSummary } from "@/domain/progression/types";

type HistoryListProps = {
  summaries: PracticeSummary[];
};

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("fr-FR", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function HistoryList({ summaries }: HistoryListProps) {
  if (summaries.length === 0) {
    return (
      <EmptyState
        icon={BookOpen}
        title="Aucune pratique enregistrée"
        description="Terminez une séance guidée pour voir apparaître votre historique local. Aucune pression — vous pouvez commencer quand vous le souhaitez."
        action={
          <Button variant="primary" asChild>
            <Link href="/bibliotheque">Voir la bibliothèque</Link>
          </Button>
        }
      />
    );
  }

  return (
    <ul className="space-y-3">
      {summaries.map((summary) => (
        <li
          key={summary.id}
          className="border-border bg-card rounded-xl border p-4"
        >
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="min-w-0 space-y-1">
              <p className="font-medium">{summary.sessionTitle}</p>
              <p className="text-muted-foreground text-sm">
                {formatDate(summary.practicedAt)}
              </p>
            </div>
            <Badge variant={summary.status === "completed" ? "secondary" : "outline"}>
              {summary.status === "completed" ? "Terminée" : "Interrompue"}
            </Badge>
          </div>
          <dl className="text-muted-foreground mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <div>
              <dt className="sr-only">Durée</dt>
              <dd>{formatActiveDuration(summary.durationMs)}</dd>
            </div>
            <div>
              <dt className="sr-only">Étapes</dt>
              <dd>
                {summary.stepsCompleted} / {summary.stepsTotal} étapes
              </dd>
            </div>
          </dl>
          <p className="mt-3">
            <Link
              href={`/bibliotheque/${summary.sessionTemplateId}`}
              className="text-primary text-sm font-medium underline-offset-4 hover:underline focus-visible:ring-ring rounded-sm focus-visible:ring-2 focus-visible:outline-none"
            >
              Voir la fiche
            </Link>
          </p>
        </li>
      ))}
    </ul>
  );
}
