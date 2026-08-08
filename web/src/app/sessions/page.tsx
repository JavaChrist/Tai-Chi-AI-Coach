import Link from "next/link";

import { PageEnvironment } from "@/components/environment/page-environment";
import { ContentLayout } from "@/components/layout/content-layout";
import { EmptyState } from "@/components/states/empty-state";
import { Button } from "@/components/ui/button";

/** Route héritée — invitation bibliothèque + accès léger au parcours débutant. */
export default function SessionsPage() {
  return (
    <PageEnvironment family="bamboo">
      <ContentLayout
        title="Séances"
        description="Les séances guidées se trouvent dans la bibliothèque."
      >
        <EmptyState
          title="Commençons"
          description="Choisissez une séance dans la bibliothèque, à votre rythme. Un parcours ordonné est aussi disponible si vous préférez un fil conducteur."
          action={
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button variant="primary" asChild>
                <Link href="/bibliotheque">Ouvrir la bibliothèque</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/parcours/debutant">Parcours débutant</Link>
              </Button>
            </div>
          }
        />
      </ContentLayout>
    </PageEnvironment>
  );
}
