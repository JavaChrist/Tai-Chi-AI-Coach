/**
 * Contenu éditorial F-001 / F-002 — condensé depuis les documents officiels uniquement.
 * Sources : `docs/01_VISION.md`, `docs/02_PRODUCT_SCOPE.md`, `docs/05_FEATURES.md`,
 * `docs/07_CONTENT_STRATEGY.md`, `docs/08_TAI_CHI_CURRICULUM.md`.
 * Aucun fait externe inventé.
 */

export const DISCOVERY_PATH = "/decouverte";

/** F-001 — Présentation du Tai Chi. */
export const TAI_CHI_PRESENTATION = {
  title: "Le Tai Chi, ici",
  intro:
    "Quelques repères simples pour comprendre la pratique proposée dans cette application.",
  sections: [
    {
      id: "nature",
      title: "Nature de la pratique",
      paragraphs: [
        "Le Tai Chi est une pratique douce et progressive. Tai-Chi AI Coach vous accompagne pour découvrir, comprendre et répéter à votre rythme, dans un cadre calme.",
      ],
    },
    {
      id: "spirit",
      title: "Esprit général",
      paragraphs: [
        "L’approche privilégie l’accessibilité, la clarté et la bienveillance. Aucune compétition, aucun jugement : la régularité se construit sans pression.",
      ],
    },
    {
      id: "expectations",
      title: "Ce que vous pouvez en attendre",
      paragraphs: [
        "Vous pouvez démarrer sans vous perdre, suivre des séances guidées courtes et progresser pas à pas. Le produit aide à poser un cadre simple pour une pratique plus régulière — il ne remplace pas un professeur humain.",
      ],
    },
    {
      id: "limits",
      title: "Limites du produit",
      paragraphs: [
        "Cette application n’est pas un dispositif médical. Elle n’établit aucun diagnostic, ne propose aucun traitement et ne fait aucune promesse médicale. Adaptez toujours l’effort à votre forme du jour.",
      ],
    },
  ],
} as const;

/**
 * F-002 — Découverte des styles (légère, non bloquante).
 * Les noms Yang / Chen / Wu / Sun sont cités dans `08` comme exemples
 * d’architecture réutilisable — sans corpus pédagogique détaillé.
 */
export const STYLES_DISCOVERY = {
  title: "Les styles",
  intro:
    "Il existe différentes traditions et styles de Tai Chi. Vous n’avez pas besoin d’en choisir un pour commencer.",
  /** Exemples explicitement listés dans `docs/08_TAI_CHI_CURRICULUM.md` (réutilisabilité). */
  exampleNames: ["Yang", "Chen", "Wu", "Sun"] as const,
  examplesLead: "Parmi les familles souvent citées figurent notamment :",
  closing:
    "Avec Tai-Chi AI Coach, le parcours reste ouvert : aucun style n’est imposé pour démarrer. Vous pouvez pratiquer dès maintenant, à votre rythme.",
} as const;

export const DISCOVERY_CTA = {
  practiceLabel: "Voir les séances",
  practiceHref: "/bibliotheque",
  safetyLabel: "Conseils de sécurité",
  safetyHref: "/conseils-de-securite",
} as const;
