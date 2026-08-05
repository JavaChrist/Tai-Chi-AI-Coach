import Link from "next/link";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  difficultyLabels,
  formatDurationMinutes,
} from "@/domain/curriculum/labels";
import type { SessionTemplateSummary } from "@/domain/curriculum/types";
import { cn } from "@/lib/utils";

type SessionCardProps = {
  session: SessionTemplateSummary;
  className?: string;
};

/** Carte séance — titre, durée, niveau, objectif (12A §7.3 / ticket §39). */
export function SessionCard({ session, className }: SessionCardProps) {
  return (
    <Card
      className={cn(
        "relative h-full min-h-40 ease-calm duration-normal transition-colors hover:bg-secondary/50",
        className,
      )}
    >
      <CardHeader className="gap-3">
        <CardTitle>
          <Link
            href={`/bibliotheque/${session.id}`}
            className="focus-visible:ring-ring rounded-[var(--radius)] after:absolute after:inset-0 focus-visible:ring-2 focus-visible:outline-none"
          >
            {session.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-small space-y-1">
          <span className="text-muted-foreground block">
            {formatDurationMinutes(session.plannedDurationMinutes)}
            {" · "}
            {difficultyLabels[session.difficulty]}
          </span>
          {session.primaryObjectiveLabel ? (
            <span className="text-muted-foreground block">
              {session.primaryObjectiveLabel}
            </span>
          ) : null}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
