import type { SessionTemplateSummary } from "@/domain/curriculum/types";
import type { PracticePreferences } from "@/domain/preferences/types";

/**
 * Trie les séances pour mettre en avant niveau et durée préférés.
 * Ne filtre pas le catalogue — personnalisation douce uniquement.
 */
export function sortSessionsByPreferences(
  sessions: SessionTemplateSummary[],
  practice: PracticePreferences,
): SessionTemplateSummary[] {
  return [...sessions].sort((a, b) => {
    const scoreA = sessionPreferenceScore(a, practice);
    const scoreB = sessionPreferenceScore(b, practice);
    if (scoreA !== scoreB) return scoreB - scoreA;
    return a.sortOrder - b.sortOrder;
  });
}

function sessionPreferenceScore(
  session: SessionTemplateSummary,
  practice: PracticePreferences,
): number {
  let score = 0;
  if (session.difficulty === practice.preferredLevel) score += 100;
  const durationDelta = Math.abs(
    session.plannedDurationMinutes - practice.preferredDurationMinutes,
  );
  score += Math.max(0, 40 - durationDelta);
  return score;
}
