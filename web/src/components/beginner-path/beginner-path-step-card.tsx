import Link from "next/link";
import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  difficultyLabels,
  formatDurationMinutes,
  phaseLabels,
} from "@/domain/curriculum/labels";
import {
  pathStepStatusLabel,
  type PathStepProgressStatus,
} from "@/domain/progression/progress-summary";
import type { ResolvedBeginnerPathStep } from "@/services/beginner-path/resolve-beginner-path-steps";

type BeginnerPathStepCardProps = {
  step: ResolvedBeginnerPathStep;
  progressStatus?: PathStepProgressStatus;
  isNextSuggested?: boolean;
};

/** Une étape pédagogique du parcours — accessible, sans verrou. */
export function BeginnerPathStepCard({
  step,
  progressStatus = "not_started",
  isNextSuggested = false,
}: BeginnerPathStepCardProps) {
  const { session, movements, order, pedagogicalCue } = step;
  const primaryObjective = session.objectives[0]?.label ?? null;
  const statusLabel = pathStepStatusLabel(progressStatus);

  return (
    <li
      className="surface-card space-y-5 p-6 sm:p-8"
      data-testid="beginner-path-step"
      data-step-order={order}
      data-session-id={session.id}
      data-progress-status={progressStatus}
    >
      <div className="space-y-3">
        <p className="text-caption text-muted-foreground">
          Étape {order}
          {" · "}
          {pedagogicalCue}
          {" · "}
          <span data-testid="beginner-path-step-status">{statusLabel}</span>
          {isNextSuggested ? (
            <span data-testid="beginner-path-step-next-marker">
              {" · "}
              Prochaine étape
            </span>
          ) : null}
        </p>
        <h2 className="text-h2 text-foreground">{session.title}</h2>
        <p className="text-small text-muted-foreground">
          {phaseLabels[session.curriculumPhaseKey]}
          {" · "}
          {difficultyLabels[session.difficulty]}
          {" · "}
          {formatDurationMinutes(session.plannedDurationMinutes)}
        </p>
        <p className="text-body text-muted-foreground">
          {session.shortDescription}
        </p>
        {primaryObjective ? (
          <p className="text-small text-muted-foreground">
            Objectif : {primaryObjective}
          </p>
        ) : null}
      </div>

      {movements.length > 0 ? (
        <div className="space-y-2" data-testid="beginner-path-step-movements">
          <p className="text-caption text-muted-foreground">
            Mouvements associés
          </p>
          <ul className="space-y-1">
            {movements.map((movement) => (
              <li key={movement.id}>
                <Link
                  href={`/bibliotheque/mouvements/${movement.slug}`}
                  className="text-small text-foreground underline-offset-4 hover:underline"
                >
                  {movement.id} — {movement.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button variant="primary" asChild>
          <Link href={`/pratique/${session.id}?fresh=1`}>
            <Play className="size-4" strokeWidth={1.75} aria-hidden />
            Démarrer la séance
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href={`/bibliotheque/${session.id}`}>Voir la séance</Link>
        </Button>
      </div>
    </li>
  );
}
