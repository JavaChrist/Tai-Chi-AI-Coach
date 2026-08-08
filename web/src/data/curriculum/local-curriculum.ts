import type { Curriculum } from "@/domain/curriculum/types";

/**
 * Jeu minimal de curriculum local (MVP-003).
 * Structure alignée sur docs/08_TAI_CHI_CURRICULUM.md.
 * Aucun style Tai Chi ni mouvement nommé inventé comme leçon officielle.
 * Contenu marqué `isStructuralPlaceholder` = structure pédagogique initiale.
 */
/** 0.2.0 — mapping minimal SessionStep.movementIds (MVP-012 / F-013). */
export const LOCAL_CURRICULUM_VERSION = "0.2.0";

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
        "Séance structurelle de phase Découverte. Elle aide à comprendre le cadre, à intégrer la prudence et à pratiquer quelques minutes dans le calme. Aucun enchaînement de style figé n’est imposé ici : le corps de séance reste une pratique douce générique, en attendant le contenu pédagogique détaillé.",
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
          title: "Corps de séance — pratique douce",
          summary:
            "Pratique courte et générique (structure curriculum). Les gestes de style seront ajoutés ultérieurement ; aucun mouvement inventé n’est présenté comme leçon officielle.",
          sortOrder: 3,
          /** Optionnel Découverte — posture de départ (curriculum §27). */
          movementIds: ["MV-001"],
        },
        {
          id: "step-dec-retour",
          kind: "retour",
          title: "Retour au calme",
          summary: "Ralentir progressivement et conclure sans pression.",
          sortOrder: 4,
        },
        {
          id: "step-dec-cloture",
          kind: "cloture",
          title: "Clôture",
          summary:
            "Fin claire de la séance. La reprise et la prochaine étape arriveront dans un ticket ultérieur.",
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
        "Séance structurelle de phase Initiation (niveau Débutant). Elle pose le rituel : préparation, entrée, corps de séance, retour et clôture. Le contenu gestuel détaillé du style retenu n’est pas encore figé dans le Design Freeze ; cette fiche décrit uniquement la structure pédagogique validée.",
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
            "Recentrage léger. Les exercices de respiration dédiés (F-014) seront enrichis plus tard.",
          sortOrder: 2,
        },
        {
          id: "step-init-corps",
          kind: "corps",
          title: "Corps de séance — bases à venir",
          summary:
            "Espace réservé aux gestes fondateurs du style retenu. Contenu placeholder structurel — pas de catalogue de mouvements inventé.",
          sortOrder: 3,
          /** Initiation — MV-001 puis MV-002 (curriculum §27). */
          movementIds: ["MV-001", "MV-002"],
        },
        {
          id: "step-init-retour",
          kind: "retour",
          title: "Retour au calme",
          summary: "Transition douce vers la fin de séance.",
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
        "Séance structurelle de début de phase Progression. Elle conserve une durée réaliste et introduit une étape de liaison légère entre les moments de pratique. Les micro-enchaînements concrets dépendront du contenu pédagogique ultérieur ; aucun enchaînement de style n’est inventé ici.",
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
            "Pratique structurée à enrichir. Placeholder curriculum — pas de mouvements inventés.",
          sortOrder: 3,
        },
        {
          id: "step-prog-liaison",
          kind: "liaison",
          title: "Liaison légère",
          summary:
            "Transition courte entre deux moments déjà connus, sans complexifier inutilement.",
          sortOrder: 4,
          /** Progression — liaison MV-002 / MV-003 (curriculum §27). */
          movementIds: ["MV-002", "MV-003"],
        },
        {
          id: "step-prog-retour",
          kind: "retour",
          title: "Retour au calme",
          summary: "Ralentir et conclure sans évaluation compétitive.",
          sortOrder: 5,
        },
        {
          id: "step-prog-cloture",
          kind: "cloture",
          title: "Clôture",
          summary: "Fin de séance. La reprise guidée (F-032) reste hors périmètre.",
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
