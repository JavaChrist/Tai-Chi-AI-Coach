import { Clock, Layers, Target } from "lucide-react";

import {
  difficultyLabels,
  formatDurationMinutes,
  phaseLabels,
  publicationStatusLabels,
} from "@/domain/curriculum/labels";
import type { SessionTemplateSummary } from "@/domain/curriculum/types";
import { Badge } from "@/components/ui/badge";
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

export function SessionMetadata({
  session,
  className,
  showObjective = true,
}: SessionMetadataProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <ul className="text-muted-foreground flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
        <li className="inline-flex items-center gap-1.5">
          <Clock className="size-3.5 shrink-0" aria-hidden />
          <span>
            <span className="sr-only">Durée : </span>
            {formatDurationMinutes(session.plannedDurationMinutes)}
          </span>
        </li>
        <li className="inline-flex items-center gap-1.5">
          <Layers className="size-3.5 shrink-0" aria-hidden />
          <span>
            <span className="sr-only">Niveau : </span>
            {difficultyLabels[session.difficulty]}
            <span className="text-muted-foreground/80">
              {" "}
              · {phaseLabels[session.curriculumPhaseKey]}
            </span>
          </span>
        </li>
        {showObjective && session.primaryObjectiveLabel ? (
          <li className="inline-flex items-center gap-1.5">
            <Target className="size-3.5 shrink-0" aria-hidden />
            <span>
              <span className="sr-only">Objectif : </span>
              {session.primaryObjectiveLabel}
            </span>
          </li>
        ) : null}
      </ul>

      <div className="flex flex-wrap gap-2">
        <Badge variant={session.isAvailable ? "secondary" : "outline"}>
          {session.isAvailable
            ? publicationStatusLabels.published
            : publicationStatusLabels[session.publicationStatus]}
        </Badge>
        {session.isStructuralPlaceholder ? (
          <Badge variant="outline">Structure curriculum</Badge>
        ) : null}
      </div>
    </div>
  );
}
