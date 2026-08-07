import { MovementList } from "@/components/movements/movement-list";
import type { MovementSummary } from "@/domain/movements/types";

type MovementLibraryProps = {
  movements: MovementSummary[];
};

/** Catalogue mouvements F-004 — pas de recherche, favoris ni filtres avancés. */
export function MovementLibrary({ movements }: MovementLibraryProps) {
  return (
    <div data-testid="movement-library" className="space-y-8">
      <MovementList movements={movements} />
    </div>
  );
}
