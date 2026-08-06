import Link from "next/link";
import { BookOpen, Leaf, RotateCcw } from "lucide-react";

import { AppBrand } from "@/components/brand/app-brand";
import { PageEnvironment } from "@/components/environment/page-environment";
import { Button } from "@/components/ui/button";
import { difficultyLabels, formatDurationMinutes } from "@/domain/curriculum/labels";
import type { SessionTemplateSummary } from "@/domain/curriculum/types";
import type { UserStatistics } from "@/domain/progression/types";

type HomeWelcomeViewProps = {
  nextSession: SessionTemplateSummary | null;
  resumeSession: SessionTemplateSummary | null;
  stats: UserStatistics;
  progressLabel: string;
};

/**
 * Présentation Accueil — actions toujours structurées ici.
 * `Parcourir` n’a aucune condition. `Reprendre` uniquement si `resumeSession`.
 */
export function HomeWelcomeView({
  nextSession,
  resumeSession,
  stats,
  progressLabel,
}: HomeWelcomeViewProps) {
  return (
    <PageEnvironment family="morning">
      <div className="relative mx-auto flex w-full max-w-reading flex-col gap-12 px-4 py-10 sm:px-6">
        <header className="space-y-6 pt-4">
          <AppBrand variant="compact" size="lg" href={null} />
          <div className="space-y-3">
            <h1 className="text-hero text-foreground">Bienvenue</h1>
            <p className="text-body text-foreground">
              Un espace calme pour pratiquer le Tai Chi, à votre rythme.
            </p>
          </div>
        </header>

        {nextSession ? (
          <section className="space-y-4" aria-labelledby="home-next-heading">
            <h2 id="home-next-heading" className="text-h2 text-foreground">
              Prochaine pratique
            </h2>
            <div className="surface-card space-y-4 p-6">
              <div className="space-y-2">
                <p className="text-h3 text-foreground">{nextSession.title}</p>
                <p className="text-small text-muted-foreground">
                  {formatDurationMinutes(nextSession.plannedDurationMinutes)}
                  {" · "}
                  {difficultyLabels[nextSession.difficulty]}
                  {nextSession.primaryObjectiveLabel
                    ? ` · ${nextSession.primaryObjectiveLabel}`
                    : null}
                </p>
              </div>
              <Button variant="primary" asChild>
                <Link href={`/pratique/${nextSession.id}`}>
                  <Leaf className="size-4" strokeWidth={1.75} aria-hidden />
                  Commencer
                </Link>
              </Button>
            </div>
          </section>
        ) : null}

        {resumeSession ? (
          <section
            className="space-y-3"
            aria-labelledby="home-resume-heading"
            data-testid="home-resume-section"
          >
            <h2 id="home-resume-heading" className="text-h2 text-foreground">
              Reprendre
            </h2>
            <p className="text-small text-foreground">
              Dernière séance : {resumeSession.title}
            </p>
            <Button
              variant="surface"
              asChild
              data-testid="home-resume-action"
            >
              <Link href={`/pratique/${resumeSession.id}`}>
                <RotateCcw className="size-4" strokeWidth={1.75} aria-hidden />
                Reprendre cette séance
              </Link>
            </Button>
          </section>
        ) : null}

        <section className="space-y-3" aria-labelledby="home-progress-heading">
          <h2 id="home-progress-heading" className="text-h2 text-foreground">
            Progression
          </h2>
          <p className="text-body text-foreground">{progressLabel}</p>
          <span className="sr-only" data-testid="home-stats-total">
            {stats.totalSessions}
          </span>
          <Button variant="surface" asChild>
            <Link href="/progression">Voir mon carnet</Link>
          </Button>
        </section>

        <section
          className="space-y-3"
          aria-labelledby="home-library-heading"
          data-testid="home-library-section"
        >
          <h2 id="home-library-heading" className="text-h2 text-foreground">
            Bibliothèque
          </h2>
          <p className="text-body font-medium text-foreground">
            Découvrir d’autres séances, sans obligation.
          </p>
          <Button
            variant="surface"
            asChild
            data-testid="home-browse-action"
          >
            <Link href="/bibliotheque">
              <BookOpen className="size-4" strokeWidth={1.75} aria-hidden />
              Parcourir
            </Link>
          </Button>
        </section>
      </div>
    </PageEnvironment>
  );
}
