import Link from "next/link";
import { notFound } from "next/navigation";

import { PageEnvironment } from "@/components/environment/page-environment";
import { ContentLayout } from "@/components/layout/content-layout";
import { PracticePlayer } from "@/components/practice/practice-player";
import { ErrorState } from "@/components/states/error-state";
import { Button } from "@/components/ui/button";
import { curriculumReader } from "@/services/curriculum/curriculum-reader";

type PracticePageProps = {
  params: Promise<{ sessionId: string }>;
  searchParams: Promise<{ fresh?: string }>;
};

export async function generateStaticParams() {
  return curriculumReader
    .listSessions({ publicationStatus: "published" })
    .map((session) => ({ sessionId: session.id }));
}

export default async function PracticePage({
  params,
  searchParams,
}: PracticePageProps) {
  const { sessionId } = await params;
  const { fresh } = await searchParams;
  const preferFresh = fresh === "1";
  const result = curriculumReader.getSessionById(sessionId);

  if (!result.ok) {
    notFound();
  }

  if (result.session.publicationStatus !== "published") {
    return (
      <PageEnvironment family="morning" withBottomNavInset={false}>
        <ContentLayout>
          <ErrorState
            title="Séance non disponible"
            description="Cette séance ne peut pas être démarrée pour le moment. Choisissez-en une autre — vous pourrez y revenir plus tard."
            action={
              <Button variant="primary" asChild>
                <Link href="/bibliotheque">Voir la bibliothèque</Link>
              </Button>
            }
          />
        </ContentLayout>
      </PageEnvironment>
    );
  }

  const session = result.session;

  return (
    <PageEnvironment family="morning" withBottomNavInset={false}>
      <ContentLayout>
        <PracticePlayer
          preferFresh={preferFresh}
          template={{
            id: session.id,
            title: session.title,
            contentVersion: session.contentVersion,
            plannedDurationMinutes: session.plannedDurationMinutes,
            objectives: session.objectives,
            steps: session.steps,
            isStructuralPlaceholder: session.isStructuralPlaceholder,
          }}
        />
      </ContentLayout>
    </PageEnvironment>
  );
}
