import type { Metadata } from "next";
import Link from "next/link";

import { ContentLayout } from "@/components/layout/content-layout";
import { EmptyState } from "@/components/states/empty-state";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Séances",
};

/** Route héritée — invitation vers la bibliothèque (pas de logique métier). */
export default function SessionsPage() {
  return (
    <ContentLayout
      title="Séances"
      description="Les séances guidées se trouvent dans la bibliothèque."
    >
      <EmptyState
        title="Commençons"
        description="Choisissez une séance dans la bibliothèque, à votre rythme."
        action={
          <Button variant="primary" asChild>
            <Link href="/bibliotheque">Ouvrir la bibliothèque</Link>
          </Button>
        }
      />
    </ContentLayout>
  );
}
