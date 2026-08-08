import type { Curriculum, SessionTemplate } from "@/domain/curriculum/types";

/** Collecte tous les Movement IDs référencés par les étapes de séance. */
export function collectReferencedMovementIds(
  curriculum: Curriculum,
): string[] {
  const ids = new Set<string>();
  for (const session of curriculum.sessions) {
    for (const step of session.steps) {
      for (const id of step.movementIds ?? []) {
        ids.add(id);
      }
    }
  }
  return [...ids].sort();
}

/** IDs référencés qui n’existent pas dans le catalogue mouvements connu. */
export function findBrokenMovementReferences(
  curriculum: Curriculum,
  knownMovementIds: ReadonlySet<string>,
): Array<{ sessionId: string; stepId: string; movementId: string }> {
  const broken: Array<{
    sessionId: string;
    stepId: string;
    movementId: string;
  }> = [];

  for (const session of curriculum.sessions) {
    for (const step of session.steps) {
      for (const movementId of step.movementIds ?? []) {
        if (!knownMovementIds.has(movementId)) {
          broken.push({
            sessionId: session.id,
            stepId: step.id,
            movementId,
          });
        }
      }
    }
  }

  return broken;
}

/** Movement IDs d’une séance (ordre de première apparition dans les steps). */
export function sessionAssociatedMovementIds(
  session: SessionTemplate,
): string[] {
  const ids: string[] = [];
  const seen = new Set<string>();
  for (const step of [...session.steps].sort(
    (a, b) => a.sortOrder - b.sortOrder,
  )) {
    for (const id of step.movementIds ?? []) {
      if (!seen.has(id)) {
        seen.add(id);
        ids.push(id);
      }
    }
  }
  return ids;
}
