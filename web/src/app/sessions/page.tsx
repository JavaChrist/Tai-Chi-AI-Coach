import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/ui/page-placeholder";

export const metadata: Metadata = {
  title: "Séances",
};

export default function SessionsPage() {
  return (
    <PagePlaceholder
      title="Séances"
      description="Page temporaire des séances guidées. Aucune logique de pratique n’est disponible dans ce ticket."
    />
  );
}
