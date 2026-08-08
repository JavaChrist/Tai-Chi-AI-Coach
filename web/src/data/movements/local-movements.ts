/**
 * Corpus mouvements MVP — source locale.
 * Contenu : docs/08_TAI_CHI_CURRICULUM.md §27 (validé PO).
 * Ne pas inventer de gestes ni d’images.
 */

import type { MovementCatalog } from "@/domain/movements/types";

export const LOCAL_MOVEMENTS_VERSION = "1.0.0";

export const localMovements: MovementCatalog = {
  id: "movements-mvp-initiation",
  title: "Mouvements — Initiation",
  contentVersion: LOCAL_MOVEMENTS_VERSION,
  locale: "fr",
  movements: [
    {
      id: "MV-001",
      slug: "posture-de-depart",
      title: "Posture de départ",
      summary:
        "Trouver une position stable et détendue avant de commencer à bouger.",
      level: "initiation",
      category: "fondamentaux",
      curriculumPhaseKey: "initiation",
      placement:
        "Pieds posés confortablement au sol ; genoux souples, sans chercher à descendre ; buste vertical sans rigidité ; épaules et bras relâchés ; regard naturellement dirigé devant soi.",
      instructions: [
        {
          id: "ins-mv001-01",
          sortOrder: 1,
          body: "S’installer dans une position confortable.",
        },
        {
          id: "ins-mv001-02",
          sortOrder: 2,
          body: "Répartir tranquillement le poids entre les deux jambes.",
        },
        {
          id: "ins-mv001-03",
          sortOrder: 3,
          body: "Relâcher les épaules et les bras.",
        },
        {
          id: "ins-mv001-04",
          sortOrder: 4,
          body: "Garder les genoux souples.",
        },
        {
          id: "ins-mv001-05",
          sortOrder: 5,
          body: "Observer simplement la posture et la respiration quelques instants.",
        },
      ],
      breathing: "Naturelle, sans imposer de rythme.",
      rhythm: "Immobile et calme. Environ 20 à 30 secondes pour l’apprentissage.",
      attentionPoints: [
        "Chercher confort et stabilité plutôt qu’une posture parfaite.",
      ],
      commonMistakes: [
        "Verrouiller les genoux",
        "Hausser les épaules",
        "Retenir sa respiration",
        "Rechercher volontairement une position très basse",
      ],
      safetyNote:
        "En cas d’inconfort ou de douleur, réduire l’amplitude ou interrompre l’exercice.",
      styleKey: null,
      mediaKeyImage: "/curriculum/movements/movement-posture-de-depart-key.webp",
      /** F-006 — null tant qu’aucune MP4 pédagogique n’est validée. */
      mediaKeyVideo: null,
      publicationStatus: "published",
      contentVersion: LOCAL_MOVEMENTS_VERSION,
      locale: "fr",
      sortOrder: 1,
    },
    {
      id: "MV-002",
      slug: "transfert-poids-lateral",
      title: "Transfert de poids latéral",
      summary:
        "Sentir progressivement le passage du poids d’une jambe vers l’autre.",
      level: "initiation",
      category: "fondamentaux",
      curriculumPhaseKey: "initiation",
      placement:
        "Position stable proche de la posture de départ avec suffisamment d’espace entre les pieds pour rester confortable.",
      instructions: [
        {
          id: "ins-mv002-01",
          sortOrder: 1,
          body: "Commencer avec le poids réparti entre les deux jambes.",
        },
        {
          id: "ins-mv002-02",
          sortOrder: 2,
          body: "Déplacer lentement le poids vers une jambe.",
        },
        {
          id: "ins-mv002-03",
          sortOrder: 3,
          body: "Garder les deux pieds en contact avec le sol.",
        },
        {
          id: "ins-mv002-04",
          sortOrder: 4,
          body: "Arrêter le déplacement avant toute sensation d’instabilité.",
        },
        {
          id: "ins-mv002-05",
          sortOrder: 5,
          body: "Revenir progressivement au centre.",
        },
        {
          id: "ins-mv002-06",
          sortOrder: 6,
          body: "Répéter vers l’autre côté.",
        },
      ],
      breathing: "Naturelle et continue.",
      rhythm: "Lent, régulier, sans à-coup.",
      attentionPoints: [
        "Le déplacement doit rester contrôlé.",
        "Il n’est pas nécessaire de transférer tout le poids sur une seule jambe.",
      ],
      commonMistakes: [
        "Déplacer brusquement le bassin",
        "Se pencher fortement sur le côté",
        "Bloquer la respiration",
        "Rechercher une amplitude excessive",
      ],
      safetyNote:
        "Conserver une amplitude permettant de revenir facilement au centre.",
      styleKey: null,
      mediaKeyImage:
        "/curriculum/movements/movement-transfert-poids-lateral-key.webp",
      mediaKeyVideo: null,
      publicationStatus: "published",
      contentVersion: LOCAL_MOVEMENTS_VERSION,
      locale: "fr",
      sortOrder: 2,
    },
    {
      id: "MV-003",
      slug: "pas-avant-controle",
      title: "Pas avant contrôlé",
      summary:
        "Découvrir comment déplacer un pied tout en conservant contrôle et stabilité.",
      level: "initiation",
      category: "deplacement",
      curriculumPhaseKey: "initiation",
      placement:
        "Position confortable et stable avec suffisamment d’espace libre devant soi.",
      instructions: [
        {
          id: "ins-mv003-01",
          sortOrder: 1,
          body: "Transférer progressivement le poids sur une jambe.",
        },
        {
          id: "ins-mv003-02",
          sortOrder: 2,
          body: "Lorsque l’autre pied devient suffisamment léger, le soulever sans précipitation.",
        },
        {
          id: "ins-mv003-03",
          sortOrder: 3,
          body: "L’avancer d’une petite distance.",
        },
        {
          id: "ins-mv003-04",
          sortOrder: 4,
          body: "Poser doucement le pied devant soi.",
        },
        {
          id: "ins-mv003-05",
          sortOrder: 5,
          body: "Stabiliser la position.",
        },
        {
          id: "ins-mv003-06",
          sortOrder: 6,
          body: "Transférer progressivement une partie du poids vers l’avant.",
        },
        {
          id: "ins-mv003-07",
          sortOrder: 7,
          body: "Revenir tranquillement à la position de départ.",
        },
      ],
      breathing:
        "Naturelle. Ne pas chercher à synchroniser artificiellement chaque étape avec une inspiration ou une expiration.",
      rhythm:
        "Lent, avec une courte pause possible entre les différentes phases.",
      attentionPoints: [
        "Privilégier un petit pas maîtrisé plutôt qu’un grand pas.",
      ],
      commonMistakes: [
        "Avancer avant d’avoir suffisamment transféré le poids",
        "Faire un pas trop grand",
        "Déplacer le corps brutalement",
        "Accélérer pour retrouver l’équilibre",
      ],
      safetyNote:
        "Pratiquer dans un espace dégagé et réduire la longueur du pas dès que la stabilité diminue.",
      styleKey: null,
      mediaKeyImage:
        "/curriculum/movements/movement-pas-avant-controle-key.webp",
      mediaKeyVideo: null,
      publicationStatus: "published",
      contentVersion: LOCAL_MOVEMENTS_VERSION,
      locale: "fr",
      sortOrder: 3,
    },
  ],
};
