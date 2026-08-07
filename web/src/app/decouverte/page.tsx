import { PageEnvironment } from "@/components/environment/page-environment";
import { ContentLayout } from "@/components/layout/content-layout";
import { DiscoveryView } from "@/components/discovery/discovery-view";

/**
 * F-001 + F-002 — présentation du Tai Chi et découverte légère des styles.
 * Hero `mountain` (cadre / stabilité — mapping about).
 */
export default function DecouvertePage() {
  return (
    <PageEnvironment family="mountain">
      <ContentLayout>
        <DiscoveryView />
      </ContentLayout>
    </PageEnvironment>
  );
}
