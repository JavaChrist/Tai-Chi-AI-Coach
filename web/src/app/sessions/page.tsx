import Link from "next/link";

import { PageEnvironment } from "@/components/environment/page-environment";
import { ContentLayout } from "@/components/layout/content-layout";
import { EmptyState } from "@/components/states/empty-state";
import { Button } from "@/components/ui/button";

/** Route héritée — invitation vers la bibliothèque (Hero Bamboo, même univers). */
export default function SessionsPage() {
  return (
    <PageEnvironment family="bamboo">
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
    </PageEnvironment>
  );
}
