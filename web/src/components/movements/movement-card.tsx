import Link from "next/link";

import { MovementMetadata } from "@/components/movements/movement-metadata";
import { MovementReferenceImage } from "@/components/movements/movement-reference-image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { MovementSummary } from "@/domain/movements/types";
import { cn } from "@/lib/utils";

type MovementCardProps = {
  movement: MovementSummary;
  className?: string;
};

/** Carte mouvement — titre, niveau, catégorie, résumé, image, lien fiche. */
export function MovementCard({ movement, className }: MovementCardProps) {
  const href = `/bibliotheque/mouvements/${movement.slug}`;

  return (
    <Card
      className={cn("relative h-full", className)}
      data-testid={`movement-card-${movement.id}`}
    >
      <CardHeader className="gap-4">
        <MovementReferenceImage
          src={movement.mediaKeyImage}
          alt={`Référence visuelle — ${movement.title}`}
          size="card"
          className="pointer-events-none"
        />
        <div className="space-y-2">
          <CardTitle>
            <Link
              href={href}
              className="focus-visible:ring-ring rounded-[var(--radius)] after:absolute after:inset-0 focus-visible:ring-2 focus-visible:outline-none"
            >
              {movement.title}
            </Link>
          </CardTitle>
          <MovementMetadata
            level={movement.level}
            category={movement.category}
          />
          <CardDescription className="text-small">
            {movement.summary}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
