import type {
  Movement,
  MovementCatalog,
  MovementListFilters,
  MovementSummary,
} from "@/domain/movements/types";
import { localMovementSource } from "@/services/movements/local-movement-source";
import type { MovementSource } from "@/services/movements/movement-source";

export type GetMovementResult =
  | { ok: true; movement: Movement }
  | { ok: false; reason: "not_found" };

export type MovementReader = {
  getCatalog: () => MovementCatalog;
  listMovements: (filters?: MovementListFilters) => MovementSummary[];
  /** Résout par ID métier (`MV-001`) ou slug (`posture-de-depart`). */
  getMovementById: (movementId: string) => GetMovementResult;
};

function isAvailable(movement: Movement): boolean {
  return movement.publicationStatus === "published";
}

function toSummary(movement: Movement): MovementSummary {
  return {
    id: movement.id,
    slug: movement.slug,
    title: movement.title,
    summary: movement.summary,
    level: movement.level,
    category: movement.category,
    curriculumPhaseKey: movement.curriculumPhaseKey,
    mediaKeyImage: movement.mediaKeyImage,
    publicationStatus: movement.publicationStatus,
    isAvailable: isAvailable(movement),
    sortOrder: movement.sortOrder,
  };
}

function matchesFilters(
  movement: Movement,
  filters: MovementListFilters = {},
): boolean {
  const statusFilter = filters.publicationStatus ?? "published";
  if (statusFilter !== "any" && movement.publicationStatus !== statusFilter) {
    return false;
  }

  if (filters.availableOnly && !isAvailable(movement)) {
    return false;
  }

  if (filters.category && movement.category !== filters.category) {
    return false;
  }

  return true;
}

export function createMovementReader(source: MovementSource): MovementReader {
  return {
    getCatalog() {
      return source.getCatalog();
    },

    listMovements(filters = {}) {
      return source
        .getCatalog()
        .movements.filter((movement) => matchesFilters(movement, filters))
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map(toSummary);
    },

    getMovementById(movementId) {
      const normalized = movementId.trim();
      const movement = source
        .getCatalog()
        .movements.find(
          (item) => item.id === normalized || item.slug === normalized,
        );

      if (!movement) {
        return { ok: false, reason: "not_found" };
      }

      return { ok: true, movement };
    },
  };
}

/** Lecteur par défaut — données locales embarquées. */
export const movementReader = createMovementReader(localMovementSource);
