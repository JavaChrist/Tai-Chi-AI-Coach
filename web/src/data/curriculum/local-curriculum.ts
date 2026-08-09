import type { Curriculum } from "@/domain/curriculum/types";

/**
 * Jeu minimal de curriculum local (MVP-003).
 * Structure alignée sur docs/08_TAI_CHI_CURRICULUM.md.
 * Aucun style Tai Chi ni mouvement nommé inventé comme leçon officielle.
 * Contenu marqué `isStructuralPlaceholder` = structure pédagogique initiale (flag data, non affiché).
 */
/** 0.3.1 — BUG-001 : textes utilisateur sans jargon technique / placeholder. */
export const LOCAL_CURRICULUM_VERSION = "0.3.1";

export const localCurriculum: Curriculum = {
  id: "curriculum-tai-chi-ai-coach",
  title: "Cursus Tai-Chi AI Coach",
  contentVersion: LOCAL_CURRICULUM_VERSION,
  locale: "fr",
  phases: [
    {
      id: "phase-decouverte",
      key: "decouverte",
      title: "Découverte",
      intention: "Oser commencer en confiance",
      sortOrder: 1,
    },
    {
      id: "phase-initiation",
      key: "initiation",
      title: "Initiation",
      intention: "Poser les bases gestuelles et rituels de séance",
      sortOrder: 2,
    },
    {
      id: "phase-progression",
      key: "progression",
      title: "Progression",
      intention: "Relier et enrichir sans perdre la clarté",
      sortOrder: 3,
    },
    {
      id: "phase-consolidation",
      key: "consolidation",
      title: "Consolidation",
      intention: "Stabiliser mémoire et calme",
      sortOrder: 4,
    },
    {
      id: "phase-autonomie",
      key: "autonomie",
      title: "Autonomie",
      intention: "Maintenir et affiner sans dépendance excessive",
      sortOrder: 5,
    },
  ],
  sessions: [
    {
      id: "st-decouverte-premiere-courte",
      title: "Première séance courte",
      shortDescription:
        "Une entrée douce pour découvrir le rituel d’une séance, sans surcharge.",
      description:
        "Une séance de découverte pour comprendre le cadre, intégrer la prudence et pratiquer quelques minutes dans le calme. Le corps de séance propose une posture de départ douce, sans enchaînement de style imposé.",
      curriculumPhaseKey: "decouverte",
      difficulty: "decouverte",
      plannedDurationMinutes: 8,
      objectives: [
        {
          id: "obj-decouverte-cadre",
          label: "Comprendre le cadre d’une séance courte",
        },
        {
          id: "obj-decouverte-prudence",
          label: "Intégrer les consignes de prudence avant de pratiquer",
        },
      ],
      steps: [
        {
          id: "step-dec-prep",
          kind: "preparation",
          title: "Préparation et prudence",
          summary:
            "Accueil calme. Rappeler d’interrompre en cas de douleur et d’adapter l’effort.",
          sortOrder: 1,
        },
        {
          id: "step-dec-entree",
          kind: "entree",
          title: "Entrée — recentrage",
          summary:
            "Quelques instants pour se poser, sans technique avancée requise.",
          sortOrder: 2,
        },
        {
          id: "step-dec-corps",
          kind: "corps",
          title: "Corps de séance — posture de départ",
          summary:
            "Pratiquez brièvement la posture de départ : pieds confortables au sol, poids réparti, épaules et bras relâchés. Cherchez le confort et la stabilité, sans performance.",
          sortOrder: 3,
          /** Optionnel Découverte — posture de départ (curriculum §27). */
          movementIds: ["MV-001"],
        },
        {
          id: "step-dec-retour",
          kind: "retour",
          title: "Retour au calme",
          summary:
            "Ralentir progressivement. Relâcher les épaules si elles sont crispées. Conclure sans pression ni évaluation — ce moment de calme clôt la séance. Aucune performance n’est attendue.",
          sortOrder: 4,
        },
        {
          id: "step-dec-cloture",
          kind: "cloture",
          title: "Clôture",
          summary:
            "Fin claire de la séance. Vous pourrez reprendre quand vous le souhaitez, à votre rythme.",
          sortOrder: 5,
        },
      ],
      locale: "fr",
      contentVersion: LOCAL_CURRICULUM_VERSION,
      publicationStatus: "published",
      sortOrder: 1,
      isStructuralPlaceholder: true,
      styleKey: null,
    },
    {
      id: "st-initiation-rituel-base",
      title: "Rituel de séance débutant",
      shortDescription:
        "Installer le cycle calme d’une séance guidée courte (phase Initiation).",
      description:
        "Séance débutant pour installer le rituel d’une pratique guidée : préparation, entrée, corps de séance, retour et clôture. Le corps de séance relie la posture de départ et le transfert de poids latéral, dans le calme.",
      curriculumPhaseKey: "initiation",
      difficulty: "debutant",
      plannedDurationMinutes: 12,
      objectives: [
        {
          id: "obj-init-rituel",
          label: "Reconnaître le rituel d’une séance guidée",
        },
        {
          id: "obj-init-habitude",
          label: "Créer une habitude de séances courtes et terminables",
        },
      ],
      steps: [
        {
          id: "step-init-prep",
          kind: "preparation",
          title: "Préparation et prudence",
          summary:
            "Poser le cadre. La prudence reste accessible avant toute pratique.",
          sortOrder: 1,
        },
        {
          id: "step-init-entree",
          kind: "entree",
          title: "Entrée — respiration simple",
          summary:
            "Recentrage léger. Quelques souffles naturels pour vous poser, sans imposer de rythme.",
          sortOrder: 2,
        },
        {
          id: "step-init-corps",
          kind: "corps",
          title: "Corps de séance — bases gestuelles",
          summary:
            "Enchaînez calmement la posture de départ puis le transfert de poids latéral. Gardez les pieds au sol, avancez lentement, et arrêtez-vous avant toute sensation d’instabilité.",
          sortOrder: 3,
          /** Initiation — MV-001 puis MV-002 (curriculum §27). */
          movementIds: ["MV-001", "MV-002"],
        },
        {
          id: "step-init-retour",
          kind: "retour",
          title: "Retour au calme",
          summary:
            "Transition douce vers la fin de séance. Rester quelques instants dans une posture confortable, sans chercher à réussir quoi que ce soit. Vous pouvez passer à la suite quand vous êtes prêt.",
          sortOrder: 4,
        },
        {
          id: "step-init-cloture",
          kind: "cloture",
          title: "Clôture",
          summary: "Conclusion claire, sans obligation de « tout réussir ».",
          sortOrder: 5,
        },
      ],
      locale: "fr",
      contentVersion: LOCAL_CURRICULUM_VERSION,
      publicationStatus: "published",
      sortOrder: 2,
      isStructuralPlaceholder: true,
      styleKey: null,
    },
    {
      id: "st-progression-liaison-legere",
      title: "Séance avec liaison légère",
      shortDescription:
        "Début de Progression : relier des éléments déjà connus, sans surcharge.",
      description:
        "Séance de progression pour relier des éléments déjà connus, sans surcharge. Une durée réaliste, une liaison légère entre le transfert de poids latéral et le pas avant contrôlé, puis un retour au calme.",
      curriculumPhaseKey: "progression",
      difficulty: "progression",
      plannedDurationMinutes: 15,
      objectives: [
        {
          id: "obj-prog-relier",
          label: "Relier deux moments de pratique sans confusion",
        },
        {
          id: "obj-prog-clarte",
          label: "Garder une séance terminable et claire",
        },
      ],
      steps: [
        {
          id: "step-prog-prep",
          kind: "preparation",
          title: "Préparation et prudence",
          summary: "Même cadre de prudence qu’en Découverte et Initiation.",
          sortOrder: 1,
        },
        {
          id: "step-prog-entree",
          kind: "entree",
          title: "Entrée",
          summary: "Recentrage bref avant le corps de séance.",
          sortOrder: 2,
        },
        {
          id: "step-prog-corps",
          kind: "corps",
          title: "Corps de séance",
          summary:
            "Revenez brièvement aux appuis et au transfert de poids, sans chercher un nouveau geste. Gardez un rythme lent et une sensation de stabilité.",
          sortOrder: 3,
        },
        {
          id: "step-prog-liaison",
          kind: "liaison",
          title: "Liaison légère",
          summary:
            "Reliez calmement le transfert de poids latéral et le pas avant contrôlé : petit pas maîtrisé, pause possible entre les phases, sans précipitation.",
          sortOrder: 4,
          /** Progression — liaison MV-002 / MV-003 (curriculum §27). */
          movementIds: ["MV-002", "MV-003"],
        },
        {
          id: "step-prog-retour",
          kind: "retour",
          title: "Retour au calme",
          summary:
            "Ralentir et conclure sans évaluation compétitive. Garder une sensation de calme. Vous pouvez arrêter dès que vous le souhaitez — la séance se termine en douceur.",
          sortOrder: 5,
        },
        {
          id: "step-prog-cloture",
          kind: "cloture",
          title: "Clôture",
          summary:
            "Fin de séance. Vous pourrez la reprendre depuis l’accueil quand vous le souhaiterez.",
          sortOrder: 6,
        },
      ],
      locale: "fr",
      contentVersion: LOCAL_CURRICULUM_VERSION,
      publicationStatus: "published",
      sortOrder: 3,
      isStructuralPlaceholder: true,
      styleKey: null,
    },
  ],
};
