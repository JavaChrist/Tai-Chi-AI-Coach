import Link from "next/link";

import { PageEnvironment } from "@/components/environment/page-environment";
import { ContentLayout } from "@/components/layout/content-layout";
import { MovementLibrary } from "@/components/movements/movement-library";
import { ErrorState } from "@/components/states/error-state";
import { Button } from "@/components/ui/button";
import type { MovementSummary } from "@/domain/movements/types";
import { movementReader } from "@/services/movements/movement-reader";

function readPublishedMovements():
  | { ok: true; movements: MovementSummary[] }
  | { ok: false } {
  try {
    return {
      ok: true,
      movements: movementReader.listMovements({
        publicationStatus: "published",
        availableOnly: true,
      }),
    };
  } catch {
    return { ok: false };
  }
}

export default function MouvementsBibliothequePage() {
  const result = readPublishedMovements();

  if (!result.ok) {
    return (
      <PageEnvironment family="bamboo">
        <ContentLayout
          title="Mouvements"
          description="Des gestes fondateurs, expliqués simplement."
        >
          <ErrorState
            title="Lecture momentanément indisponible"
            description="Les mouvements n’ont pas pu être chargés. Vous pouvez réessayer dans un instant — rien n’est perdu."
            action={
              <Button variant="outline" asChild>
                <Link href="/bibliotheque">Retour aux séances</Link>
              </Button>
            }
          />
        </ContentLayout>
      </PageEnvironment>
    );
  }

  return (
    <PageEnvironment family="bamboo">
      <ContentLayout
        title="Mouvements"
        description="Parcourez les fondamentaux. Ouvrez une fiche pour les détails."
      >
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="-ml-2 w-fit">
            <Link href="/bibliotheque">Retour aux séances</Link>
          </Button>
        </div>
        <MovementLibrary movements={result.movements} />
      </ContentLayout>
    </PageEnvironment>
  );
}
