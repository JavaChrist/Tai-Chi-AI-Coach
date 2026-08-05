import { Clock, Layers, Target } from "lucide-react";

import {
  difficultyLabels,
  formatDurationMinutes,
} from "@/domain/curriculum/labels";
import type { SessionTemplateSummary } from "@/domain/curriculum/types";
import { cn } from "@/lib/utils";

type SessionMetadataProps = {
  session: Pick<
    SessionTemplateSummary,
    | "difficulty"
    | "curriculumPhaseKey"
    | "plannedDurationMinutes"
    | "primaryObjectiveLabel"
    | "publicationStatus"
    | "isAvailable"
    | "isStructuralPlaceholder"
  >;
  className?: string;
  showObjective?: boolean;
};

/** Métadonnées sobres — durée, niveau, objectif. Sans badges techniques. */
export function SessionMetadata({
  session,
  className,
  showObjective = true,
}: SessionMetadataProps) {
  return (
    <ul
      className={cn(
        "text-muted-foreground flex flex-wrap gap-x-5 gap-y-2 text-small",
        className,
      )}
    >
      <li className="inline-flex items-center gap-1.5">
        <Clock className="size-3.5 shrink-0" strokeWidth={1.75} aria-hidden />
        <span>
          <span className="sr-only">Durée : </span>
          {formatDurationMinutes(session.plannedDurationMinutes)}
        </span>
      </li>
      <li className="inline-flex items-center gap-1.5">
        <Layers className="size-3.5 shrink-0" strokeWidth={1.75} aria-hidden />
        <span>
          <span className="sr-only">Niveau : </span>
          {difficultyLabels[session.difficulty]}
        </span>
      </li>
      {showObjective && session.primaryObjectiveLabel ? (
        <li className="inline-flex items-center gap-1.5">
          <Target className="size-3.5 shrink-0" strokeWidth={1.75} aria-hidden />
          <span>
            <span className="sr-only">Objectif : </span>
            {session.primaryObjectiveLabel}
          </span>
        </li>
      ) : null}
    </ul>
  );
}
