import Link from "next/link";

import { InformationCard } from "@/components/cards/information-card";
import { SuccessState } from "@/components/states/success-state";
import { Button } from "@/components/ui/button";
import { formatActiveDuration } from "@/domain/practice/practice-reducer";
import type { PracticeSummary as SessionBilanSummary } from "@/domain/practice/types";

type PracticeSummaryViewProps = {
  summary: SessionBilanSummary;
  templateId: string;
  savedLocally?: boolean;
  saveError?: string | null;
};

export function PracticeSummaryView({
  summary,
  templateId,
  savedLocally = false,
  saveError = null,
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
        {saveError ? (
          <p role="alert" className="text-destructive text-sm">
            {saveError}
          </p>
        ) : savedLocally ? (
          <p className="text-muted-foreground text-sm">
            Cette pratique a été enregistrée dans votre historique local
            (navigateur uniquement).
          </p>
        ) : (
          <p className="text-muted-foreground text-sm">
            Enregistrement de l’historique en cours…
          </p>
        )}
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
          <Link href="/">Retour à l’accueil</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/progression">Voir la progression</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href={`/bibliotheque/${templateId}`}>Retour à la fiche</Link>
        </Button>
      </div>
    </section>
  );
}
