import type { Metadata } from "next";

import { SessionList } from "@/components/sessions/session-list";
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
        description="Parcourez les séances pédagogiques disponibles localement."
      >
        <ErrorState
          title="Lecture momentanément indisponible"
          description="Les séances n’ont pas pu être chargées. Vous pouvez réessayer dans un instant."
        />
      </ContentLayout>
    );
  }

  return (
    <ContentLayout
      title="Bibliothèque"
      description="Parcourez les séances pédagogiques disponibles localement. Chaque fiche présente la structure du cursus, sans démarrer encore une pratique guidée."
    >
      <SessionList sessions={result.sessions} />
    </ContentLayout>
  );
}
