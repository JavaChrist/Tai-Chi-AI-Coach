import type { Metadata } from "next";

import { SessionLibrary } from "@/components/sessions/session-library";
import { ContentLayout } from "@/components/layout/content-layout";
import { ErrorState } from "@/components/states/error-state";
import type { SessionTemplateSummary } from "@/domain/curriculum/types";
import { curriculumReader } from "@/services/curriculum/curriculum-reader";

export const metadata: Metadata = {
  title: "Bibliothèque",
};

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
      <ContentLayout
        title="Bibliothèque"
        description="Des séances pour pratiquer, quand vous le souhaitez."
      >
        <ErrorState
          title="Lecture momentanément indisponible"
          description="Les séances n’ont pas pu être chargées. Vous pouvez réessayer dans un instant — rien n’est perdu."
        />
      </ContentLayout>
    );
  }

  return (
    <ContentLayout
      title="Bibliothèque"
      description="Choisissez une séance. Prenez votre temps."
    >
      <SessionLibrary sessions={result.sessions} />
    </ContentLayout>
  );
}
