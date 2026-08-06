import Link from "next/link";
import { BookOpen } from "lucide-react";

import { EmptyState } from "@/components/states/empty-state";
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
        title="Commençons"
        description="Votre carnet attend une première séance. Aucune pression — commencez quand vous le souhaitez."
        action={
          <Button variant="primary" asChild>
            <Link href="/bibliotheque">Choisir une séance</Link>
          </Button>
        }
      />
    );
  }

  return (
    <ul className="space-y-4">
      {summaries.map((summary) => (
        <li key={summary.id} className="surface-card space-y-2 p-5">
          <div className="space-y-1">
            <p className="text-body text-foreground font-medium">
              {summary.sessionTitle}
            </p>
            <p className="text-small text-muted-foreground">
              {formatDate(summary.practicedAt)}
              {" · "}
              {formatActiveDuration(summary.durationMs)}
              {summary.status === "abandoned" ? " · interrompue" : null}
            </p>
          </div>
          <p>
            <Link
              href={`/bibliotheque/${summary.sessionTemplateId}`}
              className="text-primary text-small font-medium underline-offset-4 hover:underline focus-visible:ring-ring rounded-[var(--radius)] focus-visible:ring-2 focus-visible:outline-none"
            >
              Revoir la fiche
            </Link>
          </p>
        </li>
      ))}
    </ul>
  );
}
