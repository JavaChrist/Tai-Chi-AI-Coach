import type { DifficultyLevel, LocaleCode } from "@/domain/curriculum/types";

/** Préférence de thème UI (MVP). */
export type ThemePreference = "light" | "dark" | "system";

/** Langue UI — architecture multilingue ; seul `fr` est disponible au MVP. */
export type LocalePreference = LocaleCode;

/** Durées préférées proposées au MVP (minutes). */
export type PreferredDurationMinutes = 5 | 10 | 15 | 20 | 30;

export type PracticePreferences = {
  preferredDurationMinutes: PreferredDurationMinutes;
  preferredLevel: DifficultyLevel;
  /** Afficher les conseils / cartes de prudence pendant la pratique. */
  showTips: boolean;
};

export type AccessibilityPreferences = {
  /** Réduire les animations de l’interface. */
  reduceMotion: boolean;
};

/**
 * Emplacements futurs (non implémentés au MVP) :
 * - Mei / professeurs virtuels
 * - Camera
 * - IA
 * - Notifications
 * - Audio
 * Ne pas ajouter de champs runtime ici avant le ticket dédié.
 */
export type FuturePreferenceSlots = {
  mei?: never;
  camera?: never;
  ai?: never;
  notifications?: never;
  audio?: never;
};

export type UserPreferences = {
  version: 1;
  theme: ThemePreference;
  locale: LocalePreference;
  practice: PracticePreferences;
  accessibility: AccessibilityPreferences;
  /** Réservé — ne pas utiliser au MVP. */
  future?: FuturePreferenceSlots;
};

export type PreferencesLoadResult =
  | { ok: true; preferences: UserPreferences }
  | { ok: false; error: string; preferences: UserPreferences };
