import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/ui/page-placeholder";

export const metadata: Metadata = {
  title: "Bibliothèque",
};

export default function BibliothequePage() {
  return (
    <PagePlaceholder
      title="Bibliothèque"
      description="Page temporaire de la bibliothèque de mouvements. Le catalogue pédagogique sera ajouté ultérieurement."
    />
  );
}
