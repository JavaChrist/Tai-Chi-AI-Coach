import { OfflineFallbackView } from "@/components/offline/offline-fallback-view";
import { PageEnvironment } from "@/components/environment/page-environment";
import { ContentLayout } from "@/components/layout/content-layout";

/**
 * Fallback offline MVP-017 — accessible après precache ; Hero existant `mist`.
 */
export default function HorsLignePage() {
  return (
    <PageEnvironment family="mist">
      <ContentLayout>
        <OfflineFallbackView />
      </ContentLayout>
    </PageEnvironment>
  );
}
