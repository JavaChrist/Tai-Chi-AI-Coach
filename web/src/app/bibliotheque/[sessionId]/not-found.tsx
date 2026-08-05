import Link from "next/link";

import { ContentLayout } from "@/components/layout/content-layout";
import { ErrorState } from "@/components/states/error-state";
import { Button } from "@/components/ui/button";

export default function SessionNotFound() {
  return (
    <ContentLayout>
      <ErrorState
        title="Séance introuvable"
        description="Cette séance n’existe pas dans le catalogue local, ou l’identifiant est incorrect."
        action={
          <Button variant="outline" asChild>
            <Link href="/bibliotheque">Retour à la bibliothèque</Link>
          </Button>
        }
      />
    </ContentLayout>
  );
}
