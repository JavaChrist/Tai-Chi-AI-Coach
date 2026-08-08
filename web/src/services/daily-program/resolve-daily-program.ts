/**
 * F-008 — Suggestion de séance du jour (service pur).
 *
 * Algorithme (option C+B — ticket MVP-014) :
 * 1. Pool = `BeginnerPath.orderedSessionIds` (parcours publié)
 * 2. `dateKey` = date civile locale `YYYY-MM-DD` (injectable pour les tests)
 * 3. `index = dayOrdinal(dateKey) % pool.length` (modulo positif)
 * 4. `sessionId = pool[index]`
 *
 * Propriétés :
 * - déterministe (pas de random)
 * - stable toute la journée locale
 * - peut changer au jour civil suivant
 * - aucun backend / historique / vidéo
 */

import type { BeginnerPath } from "@/domain/beginner-path/types";
import {
  dayOrdinalFromDateKey,
  isValidLocalDateKey,
  toLocalDateKey,
} from "@/domain/daily-program/local-date";
import type { DailyProgramSuggestion } from "@/domain/daily-program/types";

export type ResolveDailyProgramInput = {
  path: BeginnerPath;
  /** Clé civile locale injectée (tests). Sinon dérivée de `now`. */
  dateKey?: string;
  /** Instant de référence si `dateKey` absent (défaut : maintenant). */
  now?: Date;
};

export type ResolveDailyProgramResult =
  | { ok: true; suggestion: DailyProgramSuggestion }
  | {
      ok: false;
      reason: "not_published" | "empty_path" | "invalid_date";
    };

function positiveModulo(value: number, modulus: number): number {
  return ((value % modulus) + modulus) % modulus;
}

export function resolveDailyProgram(
  input: ResolveDailyProgramInput,
): ResolveDailyProgramResult {
  const { path } = input;

  if (path.publicationStatus !== "published") {
    return { ok: false, reason: "not_published" };
  }

  const pool = path.orderedSessionIds;
  if (pool.length === 0) {
    return { ok: false, reason: "empty_path" };
  }

  const dateKey = input.dateKey ?? toLocalDateKey(input.now ?? new Date());
  if (!isValidLocalDateKey(dateKey)) {
    return { ok: false, reason: "invalid_date" };
  }

  const index = positiveModulo(dayOrdinalFromDateKey(dateKey), pool.length);
  const sessionId = pool[index]!;

  const suggestion: DailyProgramSuggestion = {
    dateKey,
    index,
    sessionId,
    pathId: path.id,
  };

  return { ok: true, suggestion };
}
