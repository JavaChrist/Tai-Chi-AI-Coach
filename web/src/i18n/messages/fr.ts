import type { MessageDictionary } from "@/i18n/types";

export const fr: MessageDictionary = {
  app: {
    name: "Tai-Chi AI Coach",
    shortDescription: "Accompagnement calme pour pratiquer le Tai Chi à votre rythme.",
  },
  appUpdate: {
    title: "Mise à jour disponible",
    description:
      "Une nouvelle version de l’application est prête. Mettez à jour pour continuer avec la dernière version.",
    updateLabel: "Mettre à jour",
  },
  offline: {
    title: "Vous êtes hors ligne",
    description:
      "L’application n’a pas accès au réseau pour le moment. Certaines fonctions restent disponibles sur cet appareil.",
    available:
      "Vous pouvez retrouver l’accueil, la bibliothèque et les contenus déjà mis en cache.",
    limited:
      "Les vidéos et les contenus qui n’ont pas encore été enregistrés peuvent nécessiter une connexion.",
    homeLabel: "Retour à l’accueil",
    libraryLabel: "Bibliothèque",
  },
  profile: {
    title: "Profil",
    description: "Quelques réglages simples. Vos choix restent sur cet appareil.",
    appearance: "Apparence",
    appearanceHelp: "Préférences d’affichage — appliquées tout de suite sur cet appareil.",
    practice: "Pratique",
    practiceHelp: "Préférences de séance — utilisées pour trier et présenter le catalogue.",
    accessibility: "Accessibilité",
    accessibilityHelp: "Préférences de confort — sans changer le contenu pédagogique.",
    about: "À propos",
    aboutHelp:
      "Informations et liens utiles. Aucun réglage ici — version et build sont en lecture seule.",
    theme: "Thème",
    themeHelp: "Clair, sombre, ou selon les réglages de votre appareil.",
    language: "Langue",
    languageHelp: "Seul le français est disponible pour le moment.",
    preferredDuration: "Durée préférée des séances",
    preferredDurationHelp:
      "Utilisée pour mettre en avant les séances proches de votre durée habituelle.",
    preferredLevel: "Niveau préféré",
    preferredLevelHelp:
      "Utilisé pour mettre en avant les séances de votre niveau dans la bibliothèque.",
    showTips: "Afficher les conseils",
    showTipsHelp:
      "Affiche les rappels de prudence et conseils pendant les séances guidées.",
    reduceMotion: "Animations réduites",
    reduceMotionHelp:
      "Limite les animations de l’interface pour un affichage plus calme.",
    version: "Version de l’application",
    buildId: "Identifiant de build",
    storage: "Stockage des préférences",
    storageLocal: "Local uniquement (cet appareil) — aucune synchronisation.",
    safetyAdvice: "Conseils de sécurité",
    safetyAdviceHelp:
      "Repères de prudence : arrêt si douleur, adaptation de l’effort, limites non médicales.",
    safetyAdviceAction: "Consulter",
    discovery: "Découverte du Tai Chi",
    discoveryHelp:
      "Présentation courte de la pratique et repère léger sur les styles.",
    discoveryAction: "Lire",
    saving: "Enregistrement…",
    loadError: "Les préférences n’ont pas pu être lues sur cet appareil.",
    retry: "Réessayer",
    clearPractice: "Données de pratique",
    clearPracticeHelp:
      "Efface l’historique et la reprise de séance sur cet appareil. Les préférences et l’onboarding sont conservés.",
    clearPracticeAction: "Effacer mes données de pratique",
    clearPracticeConfirmTitle: "Effacer mes données de pratique ?",
    clearPracticeConfirmDescription:
      "Votre historique local et toute reprise en cours seront supprimés de cet appareil. Cette action est définitive. Les préférences et l’onboarding restent inchangés.",
    clearPracticeConfirmLabel: "Effacer",
    clearPracticeCancelLabel: "Annuler",
    clearPracticeDone: "Données de pratique effacées.",
  },
};
