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
  profile: {
    title: string;
    description: string;
    appearance: string;
    practice: string;
    accessibility: string;
    about: string;
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
    storage: string;
    storageLocal: string;
    safetyAdvice: string;
    safetyAdviceHelp: string;
    safetyAdviceAction: string;
    saving: string;
    loadError: string;
    retry: string;
  };
};

export type LocaleCatalog = Record<AppLocale, MessageDictionary>;
