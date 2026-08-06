import Link from "next/link";

import { PageEnvironment } from "@/components/environment/page-environment";
import { SuccessState } from "@/components/states/success-state";
import { Button } from "@/components/ui/button";
import { formatActiveDuration } from "@/domain/practice/practice-reducer";
import type { PracticeSummary as SessionBilanSummary } from "@/domain/practice/types";

type PracticeSummaryViewProps = {
  summary: SessionBilanSummary;
  savedLocally?: boolean;
  saveError?: string | null;
};

/** Bilan — reconnaissance, pas récompense (12A §9.9 / ticket §43). */
export function PracticeSummaryView({
  summary,
  savedLocally = false,
  saveError = null,
}: PracticeSummaryViewProps) {
  const completed = summary.endReason === "completed";

  return (
    <PageEnvironment family="mist" className="min-h-[60dvh]">
      <section
        className="mx-auto max-w-reading space-y-10 px-4 py-8 sm:px-6"
        aria-labelledby="practice-summary-heading"
      >
        {completed ? (
          <SuccessState
            title="Séance terminée"
            description="Merci pour ce moment. Aucun score — seule compte votre présence."
          />
        ) : (
          <div className="space-y-3 text-center">
            <h1 className="text-h1 text-foreground">Séance interrompue</h1>
            <p className="text-body text-muted-foreground">
              C’est parfaitement acceptable. Vous pourrez y revenir quand vous le
              souhaiterez.
            </p>
          </div>
        )}

        <div className="space-y-4">
          <h2 id="practice-summary-heading" className="text-h2 text-foreground">
            Ce moment
          </h2>
          {saveError ? (
            <p role="alert" className="text-destructive text-small">
              {saveError}
            </p>
          ) : savedLocally ? (
            <p className="text-small text-muted-foreground">
              Enregistré dans votre carnet local.
            </p>
          ) : (
            <p className="text-small text-muted-foreground">
              Enregistrement en cours…
            </p>
          )}
          <dl className="space-y-3 text-body">
            <div>
              <dt className="text-caption text-muted-foreground">Séance</dt>
              <dd className="text-foreground">{summary.templateTitle}</dd>
            </div>
            <div>
              <dt className="text-caption text-muted-foreground">Temps</dt>
              <dd className="text-foreground">
                {formatActiveDuration(summary.activeElapsedMs)}
              </dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button variant="primary" asChild>
            <Link href="/">Retour à l’accueil</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/progression">Voir la progression</Link>
          </Button>
        </div>
      </section>
    </PageEnvironment>
  );
}
