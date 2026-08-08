import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { BeginnerPathStepCard } from "@/components/beginner-path/beginner-path-step-card";
import { Button } from "@/components/ui/button";
import type { BeginnerPath } from "@/domain/beginner-path/types";
import type { ProgressSummary } from "@/domain/progression/progress-summary";
import type { ResolvedBeginnerPathStep } from "@/services/beginner-path/resolve-beginner-path-steps";

type BeginnerPathViewProps = {
  path: BeginnerPath;
  steps: ResolvedBeginnerPathStep[];
  progressSummary?: ProgressSummary | null;
};

/**
 * F-003 — parcours débutant structuré.
 * F-010 — états calculés optionnels (pas de verrou).
 */
export function BeginnerPathView({
  path,
  steps,
  progressSummary = null,
}: BeginnerPathViewProps) {
  const nextSessionId = progressSummary?.nextSessionId ?? null;
  const allCompleted = progressSummary?.allCompleted ?? false;

  return (
    <article
      className="mx-auto max-w-reading space-y-10"
      data-testid="beginner-path"
      data-path-id={path.id}
    >
      <div className="space-y-6">
        <Button variant="ghost" size="sm" asChild className="-ml-2 w-fit">
          <Link href="/">
            <ArrowLeft className="size-4" strokeWidth={1.75} aria-hidden />
            Accueil
          </Link>
        </Button>

        <header className="space-y-4">
          <h1 className="text-h1 text-foreground tracking-tight">
            {path.title}
          </h1>
          <p className="text-body text-muted-foreground max-w-reading">
            {path.description}
          </p>
          <p className="text-small text-muted-foreground">
            Suivez l’ordre proposé. Vous pouvez ouvrir chaque étape librement.
          </p>
          {allCompleted ? (
            <p
              className="text-body text-foreground"
              role="status"
              data-testid="beginner-path-all-completed"
            >
              Vous avez parcouru toutes les étapes. Vous pouvez les revisiter
              quand vous le souhaitez.
            </p>
          ) : nextSessionId ? (
            <p
              className="text-body text-foreground"
              role="status"
              data-testid="beginner-path-next-step"
            >
              Prochaine étape suggérée :{" "}
              {steps.find((step) => step.session.id === nextSessionId)?.session
                .title ?? "à venir"}
            </p>
          ) : null}
        </header>
      </div>

      <section aria-labelledby="beginner-path-steps-heading" className="space-y-5">
        <h2 id="beginner-path-steps-heading" className="text-h2 text-foreground">
          Les étapes
        </h2>
        <ol className="space-y-6" data-testid="beginner-path-steps">
          {steps.map((step) => {
            const status =
              progressSummary?.steps.find(
                (item) => item.sessionId === step.session.id,
              )?.status ?? "not_started";
            const isNext = step.session.id === nextSessionId;
            return (
              <BeginnerPathStepCard
                key={step.session.id}
                step={step}
                progressStatus={status}
                isNextSuggested={isNext}
              />
            );
          })}
        </ol>
      </section>

      <div className="min-h-16" aria-hidden />
    </article>
  );
}
