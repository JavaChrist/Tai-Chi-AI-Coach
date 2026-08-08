import Link from "next/link";
import { BookOpen, Leaf, RotateCcw } from "lucide-react";

import { AppBrand } from "@/components/brand/app-brand";
import { PageEnvironment } from "@/components/environment/page-environment";
import { Button } from "@/components/ui/button";
import { difficultyLabels, formatDurationMinutes } from "@/domain/curriculum/labels";
import type { SessionTemplateSummary } from "@/domain/curriculum/types";
import type { UserStatistics } from "@/domain/progression/types";

type HomeWelcomeViewProps = {
  /** Suggestion F-008 du jour (null si indisponible). */
  dailySession: SessionTemplateSummary | null;
  resumeSession: SessionTemplateSummary | null;
  stats: UserStatistics;
  progressLabel: string;
};

/**
 * Présentation Accueil — actions toujours structurées ici.
 * `Séance du jour` (F-008) = proposition, jamais une obligation.
 * `Parcourir` / parcours restent des accès secondaires.
 */
export function HomeWelcomeView({
  dailySession,
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

        {dailySession ? (
          <section
            className="space-y-4"
            aria-labelledby="home-daily-heading"
            data-testid="home-daily-section"
          >
            <h2 id="home-daily-heading" className="text-h2 text-foreground">
              Séance du jour
            </h2>
            <p className="text-small text-muted-foreground">
              Une suggestion pour aujourd’hui — libre de l’ignorer ou d’en choisir
              une autre.
            </p>
            <div className="surface-card space-y-4 p-6">
              <div className="space-y-2">
                <p className="text-h3 text-foreground">{dailySession.title}</p>
                <p className="text-small text-muted-foreground">
                  {formatDurationMinutes(dailySession.plannedDurationMinutes)}
                  {" · "}
                  {difficultyLabels[dailySession.difficulty]}
                  {dailySession.primaryObjectiveLabel
                    ? ` · ${dailySession.primaryObjectiveLabel}`
                    : null}
                </p>
                {dailySession.shortDescription ? (
                  <p className="text-body text-foreground">
                    {dailySession.shortDescription}
                  </p>
                ) : null}
              </div>
              <Button variant="primary" asChild>
                <Link
                  href={`/pratique/${dailySession.id}`}
                  data-testid="home-daily-cta"
                >
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
          aria-labelledby="home-path-heading"
          data-testid="home-beginner-path-section"
        >
          <h2 id="home-path-heading" className="text-h2 text-foreground">
            Parcours débutant
          </h2>
          <p className="text-body text-foreground">
            Trois séances ordonnées pour savoir par où commencer, puis quoi faire
            ensuite.
          </p>
          <Button
            variant="surface"
            asChild
            data-testid="home-beginner-path-action"
          >
            <Link href="/parcours/debutant">Voir le parcours</Link>
          </Button>
        </section>

        <section
          className="space-y-3"
          aria-labelledby="home-discovery-heading"
          data-testid="home-discovery-section"
        >
          <h2 id="home-discovery-heading" className="text-h2 text-foreground">
            Découvrir le Tai Chi
          </h2>
          <p className="text-body text-foreground">
            Une courte présentation pour poser le cadre, sans pression.
          </p>
          <Button
            variant="surface"
            asChild
            data-testid="home-discovery-action"
          >
            <Link href="/decouverte">Lire la présentation</Link>
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
