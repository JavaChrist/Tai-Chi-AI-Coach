import { StretchHorizontal } from "lucide-react";
import Link from "next/link";

import { MovementCard } from "@/components/movements/movement-card";
import { EmptyState } from "@/components/states/empty-state";
import { Button } from "@/components/ui/button";
import type { MovementSummary } from "@/domain/movements/types";

type MovementListProps = {
  movements: MovementSummary[];
};

export function MovementList({ movements }: MovementListProps) {
  if (movements.length === 0) {
    return (
      <EmptyState
        icon={StretchHorizontal}
        title="Aucun mouvement pour le moment"
        description="Les mouvements publiés apparaîtront ici. Revenez un peu plus tard, sans pression."
        action={
          <Button variant="primary" asChild>
            <Link href="/bibliotheque">Retour aux séances</Link>
          </Button>
        }
      />
    );
  }

  return (
    <ul
      className="grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3"
      data-testid="movement-list"
    >
      {movements.map((movement) => (
        <li key={movement.id} className="relative">
          <MovementCard movement={movement} className="h-full" />
        </li>
      ))}
    </ul>
  );
}
