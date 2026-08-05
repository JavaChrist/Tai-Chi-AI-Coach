import Link from "next/link";

import { ContentLayout } from "@/components/layout/content-layout";
import { ErrorState } from "@/components/states/error-state";
import { Button } from "@/components/ui/button";

export default function PracticeNotFound() {
  return (
    <ContentLayout>
      <ErrorState
        title="Séance introuvable"
        description="Cette séance n’est plus disponible ici. Choisissez-en une autre dans la bibliothèque — rien n’est perdu."
        action={
          <Button variant="primary" asChild>
            <Link href="/bibliotheque">Voir la bibliothèque</Link>
          </Button>
        }
      />
    </ContentLayout>
  );
}
