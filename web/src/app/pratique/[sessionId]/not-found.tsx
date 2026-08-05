import Link from "next/link";

import { ContentLayout } from "@/components/layout/content-layout";
import { ErrorState } from "@/components/states/error-state";
import { Button } from "@/components/ui/button";

export default function PracticeNotFound() {
  return (
    <ContentLayout>
      <ErrorState
        title="Séance introuvable"
        description="Impossible de démarrer cette pratique : la séance n’existe pas dans le catalogue local."
        action={
          <Button variant="outline" asChild>
            <Link href="/bibliotheque">Retour à la bibliothèque</Link>
          </Button>
        }
      />
    </ContentLayout>
  );
}
