import { PageEnvironment } from "@/components/environment/page-environment";
import { ContentLayout } from "@/components/layout/content-layout";
import { SafetyAdvice } from "@/components/safety/safety-advice";

/**
 * F-016 — page toujours consultable des conseils de sécurité.
 * Famille Hero existante `mountain` (même registre que Profil / À propos).
 */
export default function SafetyAdvicePage() {
  return (
    <PageEnvironment family="mountain">
      <ContentLayout>
        <SafetyAdvice />
      </ContentLayout>
    </PageEnvironment>
  );
}
