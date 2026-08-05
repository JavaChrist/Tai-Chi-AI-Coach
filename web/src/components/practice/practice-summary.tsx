import Link from "next/link";

import { InformationCard } from "@/components/cards/information-card";
import { SuccessState } from "@/components/states/success-state";
import { Button } from "@/components/ui/button";
import { formatActiveDuration } from "@/domain/practice/practice-reducer";
import type { PracticeSummary } from "@/domain/practice/types";

type PracticeSummaryViewProps = {
  summary: PracticeSummary;
  templateId: string;
};

export function PracticeSummaryView({
  summary,
  templateId,
}: PracticeSummaryViewProps) {
  const completed = summary.endReason === "completed";

  return (
    <section className="space-y-8" aria-labelledby="practice-summary-heading">
      {completed ? (
        <SuccessState
          title="Séance terminée"
          description="Merci pour ce moment de pratique. Aucun score n’est attribué — seule compte votre présence."
        />
      ) : (
        <InformationCard
          title="Séance interrompue"
          description="Vous avez quitté la séance. C’est parfaitement acceptable. Vous pourrez y revenir quand vous le souhaiterez."
        />
      )}

      <div className="space-y-3">
        <h2
          id="practice-summary-heading"
          className="font-heading text-lg font-medium"
        >
          Bilan local
        </h2>
        <p className="text-muted-foreground text-sm">
          Ce bilan n’est pas enregistré. Il disparaîtra en quittant cet écran.
        </p>
        <dl className="border-border bg-card grid gap-3 rounded-xl border p-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-muted-foreground">Séance</dt>
            <dd className="font-medium">{summary.templateTitle}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Durée active</dt>
            <dd className="font-medium">
              {formatActiveDuration(summary.activeElapsedMs)}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Étapes parcourues</dt>
            <dd className="font-medium">
              {summary.stepsCompleted} / {summary.stepsTotal}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Durée indicative</dt>
            <dd className="font-medium">{summary.plannedDurationMinutes} min</dd>
          </div>
        </dl>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button variant="primary" asChild>
          <Link href={`/bibliotheque/${templateId}`}>Retour à la fiche</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/bibliotheque">Bibliothèque</Link>
        </Button>
      </div>
    </section>
  );
}
