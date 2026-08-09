import type { LocalePreference } from "@/domain/preferences/types";

export type AppLocale = LocalePreference;

/**
 * Dictionnaire de messages — architecture multilingue.
 * Au MVP, seule la locale `fr` est fournie.
 */
export type MessageDictionary = {
  app: {
    name: string;
    shortDescription: string;
  };
  appUpdate: {
    title: string;
    description: string;
    updateLabel: string;
  };
  offline: {
    title: string;
    description: string;
    available: string;
    limited: string;
    homeLabel: string;
    libraryLabel: string;
  };
  profile: {
    title: string;
    description: string;
    appearance: string;
    appearanceHelp: string;
    practice: string;
    practiceHelp: string;
    accessibility: string;
    accessibilityHelp: string;
    about: string;
    aboutHelp: string;
    theme: string;
    themeHelp: string;
    language: string;
    languageHelp: string;
    preferredDuration: string;
    preferredDurationHelp: string;
    preferredLevel: string;
    preferredLevelHelp: string;
    showTips: string;
    showTipsHelp: string;
    reduceMotion: string;
    reduceMotionHelp: string;
    version: string;
    buildId: string;
    storage: string;
    storageLocal: string;
    safetyAdvice: string;
    safetyAdviceHelp: string;
    safetyAdviceAction: string;
    discovery: string;
    discoveryHelp: string;
    discoveryAction: string;
    saving: string;
    loadError: string;
    retry: string;
    clearPractice: string;
    clearPracticeHelp: string;
    clearPracticeAction: string;
    clearPracticeConfirmTitle: string;
    clearPracticeConfirmDescription: string;
    clearPracticeConfirmLabel: string;
    clearPracticeCancelLabel: string;
    clearPracticeDone: string;
  };
};

export type LocaleCatalog = Record<AppLocale, MessageDictionary>;
