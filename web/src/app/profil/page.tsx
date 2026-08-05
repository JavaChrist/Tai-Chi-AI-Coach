import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/ui/page-placeholder";

export const metadata: Metadata = {
  title: "Profil",
};

export default function ProfilPage() {
  return (
    <PagePlaceholder
      title="Profil"
      description="Page temporaire du profil et des paramètres. Aucune authentification n’est implémentée dans ce ticket."
    />
  );
}
