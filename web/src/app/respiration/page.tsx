import { CalmBreathingView } from "@/components/breathing/calm-breathing-view";
import { PageEnvironment } from "@/components/environment/page-environment";
import { ContentLayout } from "@/components/layout/content-layout";

/**
 * F-014 — Respiration calme.
 * Hero `mist` (catalogue — rôle respiration).
 */
export default function RespirationPage() {
  return (
    <PageEnvironment family="mist">
      <ContentLayout>
        <CalmBreathingView />
      </ContentLayout>
    </PageEnvironment>
  );
}
