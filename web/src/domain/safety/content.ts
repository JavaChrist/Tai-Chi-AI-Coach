/**
 * Contenu stable de prudence — F-016 / F-031.
 * Source : `docs/05_FEATURES.md`, `docs/02_PRODUCT_SCOPE.md`, ticket MVP-009.
 * Ton calme, non médical, non anxiogène.
 */

export const SAFETY_ADVICE_PATH = "/conseils-de-securite";

/** F-016 — Conseils de sécurité (socle durable, toujours consultable). */
export const SAFETY_ADVICE = {
  title: "Conseils de sécurité",
  intro:
    "Quelques repères simples pour pratiquer à votre rythme, sans pression.",
  points: [
    {
      id: "stop-pain",
      text: "Interrompez la pratique en cas de douleur.",
    },
    {
      id: "adapt-effort",
      text: "Adaptez l’effort à votre forme du jour. Rien n’est imposé.",
    },
    {
      id: "professional",
      text: "En cas de doute, adressez-vous à un professionnel compétent.",
    },
    {
      id: "non-medical",
      text: "Cette application n’établit aucun diagnostic, ne propose aucun traitement et ne remplace pas un avis professionnel. Elle ne fait aucune promesse médicale.",
    },
  ],
} as const;

/** F-031 — Avertissements avant pratique (rappel court et actionnable). */
export const PRE_PRACTICE_WARNING = {
  title: "Avant de pratiquer",
  intro: "Trois rappels pratiques avant de commencer.",
  points: [
    {
      id: "stop-pain",
      text: "Arrêtez en cas de douleur.",
    },
    {
      id: "reduce-effort",
      text: "Réduisez l’amplitude ou l’effort si nécessaire.",
    },
    {
      id: "take-time",
      text: "Prenez votre temps.",
    },
  ],
  acknowledgeLabel: "J’ai compris, continuer",
  adviceLinkLabel: "Voir tous les conseils de sécurité",
  backLabel: "Retour",
} as const;
