/**
 * Contenu F-014 — Respiration calme.
 * Source de vérité : `docs/08_TAI_CHI_CURRICULUM.md` §28.1 (validé PO).
 * Non médical ; pas de rythme imposé ; pas de timer / audio requis.
 */

export const CALM_BREATHING_PATH = "/respiration";

export const CALM_BREATHING = {
  id: "EX-014-respiration-calme",
  title: "Respiration calme",
  intro:
    "Un exercice court pour vous poser avant ou entre les pratiques. Suivez les consignes à votre rythme — rien n’est imposé.",
  durationLabel: "Environ 1 minute",
  instructions: [
    "Installe-toi confortablement, debout ou assis.",
    "Relâche les épaules et laisse les bras se détendre.",
    "Respire naturellement, sans chercher à prendre de grandes inspirations.",
    "Observe simplement l’air qui entre et qui sort.",
    "Si c’est confortable, laisse progressivement la respiration devenir plus lente et régulière.",
    "Ne retiens pas ton souffle et ne force ni l’inspiration ni l’expiration.",
    "Après quelques respirations, reprends simplement ton rythme naturel.",
  ],
  caution:
    "Si la respiration devient inconfortable, reviens à ta respiration naturelle ou arrête l’exercice.",
  startLabel: "Suivre les instructions",
  quitLabel: "Retour à l’accueil",
} as const;
