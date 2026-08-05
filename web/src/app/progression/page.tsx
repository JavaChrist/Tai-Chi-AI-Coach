import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/ui/page-placeholder";

export const metadata: Metadata = {
  title: "Progression",
};

export default function ProgressionPage() {
  return (
    <PagePlaceholder
      title="Progression"
      description="Page temporaire de progression personnelle. Aucune donnée ni statistique n’est encore connectée."
    />
  );
}
