import Link from "next/link";

import { ContentLayout } from "@/components/layout/content-layout";
import { ErrorState } from "@/components/states/error-state";
import { Button } from "@/components/ui/button";

export default function MovementNotFound() {
  return (
    <ContentLayout>
      <ErrorState
        title="Mouvement introuvable"
        description="Cette fiche n’est plus disponible. Revenez à la liste pour en choisir une autre."
        action={
          <Button variant="primary" asChild>
            <Link href="/bibliotheque/mouvements">Voir les mouvements</Link>
          </Button>
        }
      />
    </ContentLayout>
  );
}
