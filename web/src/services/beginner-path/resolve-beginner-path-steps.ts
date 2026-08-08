import { pedagogicalCueForStepIndex } from "@/domain/beginner-path/pedagogical-cue";
import type { BeginnerPath } from "@/domain/beginner-path/types";
import { sessionAssociatedMovementIds } from "@/domain/curriculum/session-movement-links";
import type { SessionTemplate } from "@/domain/curriculum/types";
import type { Movement } from "@/domain/movements/types";
import { curriculumReader } from "@/services/curriculum/curriculum-reader";
import { movementReader } from "@/services/movements/movement-reader";

export type ResolvedBeginnerPathStep = {
  order: number;
  pedagogicalCue: string;
  session: SessionTemplate;
  /** Mouvements issus du mapping SessionStep → Movement (MVP-012), sans liste dupliquée. */
  movements: Movement[];
};

export type ResolveBeginnerPathStepsResult =
  | { ok: true; steps: ResolvedBeginnerPathStep[] }
  | { ok: false; reason: "missing_session"; sessionId: string };

/**
 * Résout les étapes du parcours à partir des séances et du mapping mouvements existants.
 */
export function resolveBeginnerPathSteps(
  path: BeginnerPath,
): ResolveBeginnerPathStepsResult {
  const total = path.orderedSessionIds.length;
  const steps: ResolvedBeginnerPathStep[] = [];

  for (let index = 0; index < path.orderedSessionIds.length; index += 1) {
    const sessionId = path.orderedSessionIds[index]!;
    const result = curriculumReader.getSessionById(sessionId);
    if (!result.ok) {
      return { ok: false, reason: "missing_session", sessionId };
    }

    const movementIds = sessionAssociatedMovementIds(result.session);
    const movements = movementIds
      .map((id) => movementReader.getMovementById(id))
      .filter((item) => item.ok)
      .map((item) => (item.ok ? item.movement : null))
      .filter((m): m is Movement => m !== null);

    steps.push({
      order: index + 1,
      pedagogicalCue: pedagogicalCueForStepIndex(index, total),
      session: result.session,
      movements,
    });
  }

  return { ok: true, steps };
}
