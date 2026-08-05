import type {
  PreferredDurationMinutes,
  UserPreferences,
} from "@/domain/preferences/types";

export const PREFERRED_DURATION_OPTIONS: PreferredDurationMinutes[] = [
  5, 10, 15, 20, 30,
];

export function createDefaultPreferences(): UserPreferences {
  return {
    version: 1,
    theme: "system",
    locale: "fr",
    practice: {
      preferredDurationMinutes: 15,
      preferredLevel: "debutant",
      showTips: true,
    },
    accessibility: {
      reduceMotion: false,
    },
  };
}
