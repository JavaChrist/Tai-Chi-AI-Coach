import type { DifficultyLevel } from "@/domain/curriculum/types";
import type {
  LocalePreference,
  PreferredDurationMinutes,
  ThemePreference,
} from "@/domain/preferences/types";

export const themePreferenceLabels: Record<ThemePreference, string> = {
  light: "Clair",
  dark: "Sombre",
  system: "Système",
};

export const localePreferenceLabels: Record<LocalePreference, string> = {
  fr: "Français",
};

export const preferredLevelLabels: Record<DifficultyLevel, string> = {
  decouverte: "Découverte",
  debutant: "Débutant",
  progression: "Progression",
};

export function preferredDurationLabel(minutes: PreferredDurationMinutes): string {
  return `${minutes} min`;
}
