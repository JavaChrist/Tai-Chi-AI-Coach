import { ArrowLeft, Play } from "lucide-react";
import Link from "next/link";

import { SessionMetadata } from "@/components/sessions/session-metadata";
import { InformationCard } from "@/components/cards/information-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  sessionStepKindLabels,
} from "@/domain/curriculum/labels";
import type { SessionTemplate } from "@/domain/curriculum/types";

type SessionDetailsProps = {
  session: SessionTemplate;
};

export function SessionDetails({ session }: SessionDetailsProps) {
  const sortedSteps = [...session.steps].sort(
    (a, b) => a.sortOrder - b.sortOrder,
  );

  return (
    <article className="space-y-8">
      <div className="space-y-4">
        <Button variant="ghost" size="sm" asChild className="-ml-2 w-fit">
          <Link href="/bibliotheque">
            <ArrowLeft className="size-4" aria-hidden />
            Retour à la bibliothèque
          </Link>
        </Button>

        <header className="space-y-3">
          <h1 className="font-heading text-2xl font-medium tracking-tight sm:text-3xl">
            {session.title}
          </h1>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
            {session.description}
          </p>
          <SessionMetadata
            session={{
              difficulty: session.difficulty,
              curriculumPhaseKey: session.curriculumPhaseKey,
              plannedDurationMinutes: session.plannedDurationMinutes,
              primaryObjectiveLabel: null,
              publicationStatus: session.publicationStatus,
              isAvailable: session.publicationStatus === "published",
              isStructuralPlaceholder: session.isStructuralPlaceholder,
            }}
            showObjective={false}
          />
          <div className="pt-2">
            <Button variant="primary" size="lg" asChild>
              <Link href={`/pratique/${session.id}`}>
                <Play className="size-4" aria-hidden />
                Démarrer la séance
              </Link>
            </Button>
          </div>
        </header>
      </div>

      <section aria-labelledby="session-objectives-heading" className="space-y-3">
        <h2
          id="session-objectives-heading"
          className="font-heading text-lg font-medium"
        >
          Objectifs
        </h2>
        <ul className="text-muted-foreground list-disc space-y-1.5 pl-5 text-sm">
          {session.objectives.map((objective) => (
            <li key={objective.id}>{objective.label}</li>
          ))}
        </ul>
      </section>

      <Separator />

      <section aria-labelledby="session-structure-heading" className="space-y-4">
        <h2
          id="session-structure-heading"
          className="font-heading text-lg font-medium"
        >
          Structure de la séance
        </h2>
        <ol className="space-y-3">
          {sortedSteps.map((step, index) => (
            <li
              key={step.id}
              className="border-border bg-card rounded-xl border p-4"
            >
              <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                Étape {index + 1} · {sessionStepKindLabels[step.kind]}
              </p>
              <p className="mt-1 font-medium">{step.title}</p>
              <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                {step.summary}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {session.isStructuralPlaceholder ? (
        <InformationCard
          title="Contenu structurel initial"
          description="Cette fiche décrit la structure pédagogique validée du cursus. Elle ne constitue pas encore une leçon officielle de style Tai Chi détaillé. La pratique guidée reste locale et non persistante."
        />
      ) : null}
    </article>
  );
}
