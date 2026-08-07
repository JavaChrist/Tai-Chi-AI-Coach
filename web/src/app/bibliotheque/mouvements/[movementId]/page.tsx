import Link from "next/link";
import { notFound } from "next/navigation";

import { PageEnvironment } from "@/components/environment/page-environment";
import { ContentLayout } from "@/components/layout/content-layout";
import { MovementDetails } from "@/components/movements/movement-details";
import { ErrorState } from "@/components/states/error-state";
import { Button } from "@/components/ui/button";
import { movementReader } from "@/services/movements/movement-reader";

type MovementPageProps = {
  params: Promise<{ movementId: string }>;
};

export async function generateStaticParams() {
  return movementReader
    .listMovements({ publicationStatus: "any" })
    .map((movement) => ({
      movementId: movement.slug,
    }));
}

export default async function MovementPage({ params }: MovementPageProps) {
  const { movementId } = await params;
  const result = movementReader.getMovementById(movementId);

  if (!result.ok) {
    notFound();
  }

  if (result.movement.publicationStatus !== "published") {
    return (
      <PageEnvironment family="bamboo">
        <ContentLayout>
          <ErrorState
            title="Mouvement non disponible"
            description="Ce mouvement n’est pas encore proposé à la consultation."
            action={
              <Button variant="outline" asChild>
                <Link href="/bibliotheque/mouvements">
                  Retour aux mouvements
                </Link>
              </Button>
            }
          />
        </ContentLayout>
      </PageEnvironment>
    );
  }

  return (
    <PageEnvironment family="bamboo">
      <ContentLayout>
        <MovementDetails movement={result.movement} />
      </ContentLayout>
    </PageEnvironment>
  );
}
