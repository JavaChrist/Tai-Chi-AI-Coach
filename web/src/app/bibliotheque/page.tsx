import Link from "next/link";

import { PageEnvironment } from "@/components/environment/page-environment";
import { SessionLibrary } from "@/components/sessions/session-library";
import { ContentLayout } from "@/components/layout/content-layout";
import { ErrorState } from "@/components/states/error-state";
import { Button } from "@/components/ui/button";
import type { SessionTemplateSummary } from "@/domain/curriculum/types";
import { curriculumReader } from "@/services/curriculum/curriculum-reader";

function readPublishedSessions():
  | { ok: true; sessions: SessionTemplateSummary[] }
  | { ok: false } {
  try {
    return {
      ok: true,
      sessions: curriculumReader.listSessions({
        publicationStatus: "published",
        availableOnly: true,
      }),
    };
  } catch {
    return { ok: false };
  }
}

export default function BibliothequePage() {
  const result = readPublishedSessions();

  if (!result.ok) {
    return (
      <PageEnvironment family="bamboo">
        <ContentLayout
          title="Bibliothèque"
          description="Des séances pour pratiquer, quand vous le souhaitez."
        >
          <ErrorState
            title="Lecture momentanément indisponible"
            description="Les séances n’ont pas pu être chargées. Vous pouvez réessayer dans un instant — rien n’est perdu."
          />
        </ContentLayout>
      </PageEnvironment>
    );
  }

  return (
    <PageEnvironment family="bamboo">
      <ContentLayout
        title="Bibliothèque"
        description="Choisissez une séance. Prenez votre temps."
      >
        <section
          aria-labelledby="movements-access-heading"
          className="surface-card mb-10 space-y-4 p-6"
          data-testid="bibliotheque-movements-access"
        >
          <div className="space-y-2">
            <h2
              id="movements-access-heading"
              className="text-h3 text-foreground"
            >
              Mouvements
            </h2>
            <p className="text-small text-muted-foreground max-w-reading">
              Consultez les fondamentaux expliqués, avec images de référence.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/bibliotheque/mouvements">Voir les mouvements</Link>
          </Button>
        </section>

        <SessionLibrary sessions={result.sessions} />
      </ContentLayout>
    </PageEnvironment>
  );
}
