import { ArrowLeft, Play } from "lucide-react";
import Link from "next/link";

import { AssociatedMovements } from "@/components/practice/associated-movements";
import { SessionMetadata } from "@/components/sessions/session-metadata";
import { Button } from "@/components/ui/button";
import type { SessionTemplate } from "@/domain/curriculum/types";
import { sessionAssociatedMovementIds } from "@/domain/curriculum/session-movement-links";

type SessionDetailsProps = {
  session: SessionTemplate;
};

/** Fiche séance — préparer, une CTA dominante (12A §9.6). */
export function SessionDetails({ session }: SessionDetailsProps) {
  const sortedSteps = [...session.steps].sort(
    (a, b) => a.sortOrder - b.sortOrder,
  );
  const primaryObjective = session.objectives[0]?.label ?? null;
  const associatedMovementIds = sessionAssociatedMovementIds(session);

  return (
    <article className="mx-auto max-w-reading space-y-10">
      <div className="space-y-6">
        <Button variant="ghost" size="sm" asChild className="-ml-2 w-fit">
          <Link href="/bibliotheque">
            <ArrowLeft className="size-4" strokeWidth={1.75} aria-hidden />
            Bibliothèque
          </Link>
        </Button>

        <header className="space-y-5">
          <div className="space-y-3">
            <h1 className="text-h1 text-foreground tracking-tight">
              {session.title}
            </h1>
            <p className="text-body text-muted-foreground max-w-reading">
              {session.shortDescription}
            </p>
          </div>

          <SessionMetadata
            session={{
              difficulty: session.difficulty,
              curriculumPhaseKey: session.curriculumPhaseKey,
              plannedDurationMinutes: session.plannedDurationMinutes,
              primaryObjectiveLabel: primaryObjective,
              publicationStatus: session.publicationStatus,
              isAvailable: session.publicationStatus === "published",
              isStructuralPlaceholder: session.isStructuralPlaceholder,
            }}
          />

          <div className="pt-2">
            <Button variant="primary" size="lg" asChild>
              <Link href={`/pratique/${session.id}`}>
                <Play className="size-4" strokeWidth={1.75} aria-hidden />
                Démarrer
              </Link>
            </Button>
          </div>
        </header>
      </div>

      {associatedMovementIds.length > 0 ? (
        <section
          aria-labelledby="session-movements-heading"
          className="space-y-3"
        >
          <h2
            id="session-movements-heading"
            className="text-h2 text-foreground"
          >
            Mouvements associés
          </h2>
          <AssociatedMovements
            movementIds={associatedMovementIds}
            hideHeading
          />
        </section>
      ) : null}

      <section aria-labelledby="session-structure-heading" className="space-y-5">
        <h2 id="session-structure-heading" className="text-h2 text-foreground">
          Déroulement
        </h2>
        <ol className="space-y-6">
          {sortedSteps.map((step, index) => (
            <li key={step.id} className="space-y-2">
              <p className="text-caption text-muted-foreground">
                {index + 1}. {step.title}
              </p>
              <p className="text-small text-muted-foreground">{step.summary}</p>
              <AssociatedMovements movementIds={step.movementIds} />
            </li>
          ))}
        </ol>
      </section>

      <div className="min-h-16" aria-hidden />
    </article>
  );
}
