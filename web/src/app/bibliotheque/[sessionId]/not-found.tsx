import Link from "next/link";

import { ContentLayout } from "@/components/layout/content-layout";
import { ErrorState } from "@/components/states/error-state";
import { Button } from "@/components/ui/button";

export default function SessionNotFound() {
  return (
    <ContentLayout>
      <ErrorState
        title="Séance introuvable"
        description="Cette fiche n’est plus disponible. Revenez à la bibliothèque pour en choisir une autre."
        action={
          <Button variant="primary" asChild>
            <Link href="/bibliotheque">Voir la bibliothèque</Link>
          </Button>
        }
      />
    </ContentLayout>
  );
}
