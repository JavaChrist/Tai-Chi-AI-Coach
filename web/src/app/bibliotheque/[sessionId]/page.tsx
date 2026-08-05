import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SessionDetails } from "@/components/sessions/session-details";
import { ContentLayout } from "@/components/layout/content-layout";
import { Button } from "@/components/ui/button";
import { ErrorState } from "@/components/states/error-state";
import { curriculumReader } from "@/services/curriculum/curriculum-reader";

type SessionPageProps = {
  params: Promise<{ sessionId: string }>;
};

export async function generateStaticParams() {
  return curriculumReader.listSessions({ publicationStatus: "any" }).map((session) => ({
    sessionId: session.id,
  }));
}

export async function generateMetadata({
  params,
}: SessionPageProps): Promise<Metadata> {
  const { sessionId } = await params;
  const result = curriculumReader.getSessionById(sessionId);

  if (!result.ok) {
    return { title: "Séance introuvable" };
  }

  return { title: result.session.title };
}

export default async function SessionPage({ params }: SessionPageProps) {
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
          description="Cette séance n’est pas encore proposée à la consultation."
          action={
            <Button variant="outline" asChild>
              <Link href="/bibliotheque">Retour à la bibliothèque</Link>
            </Button>
          }
        />
      </ContentLayout>
    );
  }

  return (
    <ContentLayout>
      <SessionDetails session={result.session} />
    </ContentLayout>
  );
}
