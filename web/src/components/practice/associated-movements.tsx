import Link from "next/link";

import { movementReader } from "@/services/movements/movement-reader";

type AssociatedMovementsProps = {
  movementIds: string[] | undefined;
  /** Libellé court pour l’étape de pratique ou la fiche séance. */
  heading?: string;
  /** Masquer le libellé visible (ex. section parente déjà titrée). */
  hideHeading?: boolean;
};

/**
 * Liens légers séance ↔ fiche mouvement (MVP-012).
 * Pas de player vidéo — PracticePlayer reste inchangé structurellement.
 */
export function AssociatedMovements({
  movementIds,
  heading = "Mouvement associé",
  hideHeading = false,
}: AssociatedMovementsProps) {
  const ids = movementIds ?? [];
  if (ids.length === 0) return null;

  const movements = ids
    .map((id) => movementReader.getMovementById(id))
    .filter((result) => result.ok)
    .map((result) => (result.ok ? result.movement : null))
    .filter((m): m is NonNullable<typeof m> => m !== null);

  if (movements.length === 0) return null;

  const label =
    movements.length > 1 ? "Mouvements associés" : heading;

  return (
    <aside
      className="space-y-2"
      data-testid="associated-movements"
      aria-label={label}
    >
      {hideHeading ? null : (
        <p className="text-caption text-muted-foreground">{label}</p>
      )}
      <ul className="space-y-1">
        {movements.map((movement) => (
          <li key={movement.id}>
            <Link
              href={`/bibliotheque/mouvements/${movement.slug}`}
              className="text-small text-foreground underline-offset-4 hover:underline"
            >
              {movement.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
