import { ContentLayout } from "@/components/layout/content-layout";
import { InformationCard } from "@/components/cards/information-card";

type PagePlaceholderProps = {
  title: string;
  description: string;
};

/** Placeholder de route — aucune logique métier. */
export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <ContentLayout title={title} description={description}>
      <InformationCard
        title="Espace en préparation"
        description="Cette section accueillera bientôt le contenu correspondant. Aucune action n’est requise pour le moment."
      />
    </ContentLayout>
  );
}
