import type { Metadata } from "next";

import { ContentLayout } from "@/components/layout/content-layout";
import { ProgressionDashboard } from "@/components/progression/progression-dashboard";

export const metadata: Metadata = {
  title: "Progression",
};

export default function ProgressionPage() {
  return (
    <ContentLayout
      title="Progression"
      description="Retrouvez votre historique local et des indicateurs calmes sur votre pratique."
    >
      <ProgressionDashboard />
    </ContentLayout>
  );
}
