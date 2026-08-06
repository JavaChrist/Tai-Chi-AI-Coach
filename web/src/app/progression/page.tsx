import type { Metadata } from "next";

import { PageEnvironment } from "@/components/environment/page-environment";
import { ContentLayout } from "@/components/layout/content-layout";
import { ProgressionDashboard } from "@/components/progression/progression-dashboard";

export const metadata: Metadata = {
  title: "Progression",
};

export default function ProgressionPage() {
  return (
    <PageEnvironment family="mist">
      <ContentLayout
        title="Progression"
        description="Votre carnet de pratique — local, personnel, sans compétition."
      >
        <ProgressionDashboard />
      </ContentLayout>
    </PageEnvironment>
  );
}
