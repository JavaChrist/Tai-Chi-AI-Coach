import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContentLayout } from "@/components/layout/content-layout";
import { PracticePlayer } from "@/components/practice/practice-player";
import { ErrorState } from "@/components/states/error-state";
import { Button } from "@/components/ui/button";
import { curriculumReader } from "@/services/curriculum/curriculum-reader";

type PracticePageProps = {
  params: Promise<{ sessionId: string }>;
};

export async function generateStaticParams() {
  return curriculumReader
    .listSessions({ publicationStatus: "published" })
    .map((session) => ({ sessionId: session.id }));
}

export async function generateMetadata({
  params,
}: PracticePageProps): Promise<Metadata> {
  const { sessionId } = await params;
  const result = curriculumReader.getSessionById(sessionId);

  if (!result.ok) {
    return { title: "Pratique" };
  }

  return { title: `Pratique · ${result.session.title}` };
}

export default async function PracticePage({ params }: PracticePageProps) {
  const { sessionId } = await params;
  const result = curriculumReader.getSessionById(sessionId);

  if (!result.ok) {
    notFound();
  }

  if (result.session.publicationStatus !== "published") {
    return (
      <ContentLayout>
        <ErrorState
          title="Séance non disponible"
          description="Cette séance ne peut pas être démarrée pour le moment."
          action={
            <Button variant="outline" asChild>
              <Link href="/bibliotheque">Retour à la bibliothèque</Link>
            </Button>
          }
        />
      </ContentLayout>
    );
  }

  const session = result.session;

  return (
    <ContentLayout>
      <PracticePlayer
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
  );
}
