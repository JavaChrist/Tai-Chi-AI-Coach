/**
 * Indices pédagogiques déterministes — ordre du parcours, pas avancement utilisateur.
 * MVP-013 : ne pas prétendre connaître la progression réelle.
 */

export function pedagogicalCueForStepIndex(
  zeroBasedIndex: number,
  stepsTotal: number,
): string {
  if (stepsTotal <= 0) return "";
  if (zeroBasedIndex <= 0) return "Commencer ici";
  if (zeroBasedIndex >= stepsTotal - 1) return "Puis continuer";
  return "Ensuite";
}
