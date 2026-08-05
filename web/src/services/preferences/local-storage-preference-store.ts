import { createDefaultPreferences } from "@/domain/preferences/defaults";
import type { UserPreferences } from "@/domain/preferences/types";
import type { PreferenceStore } from "@/services/preferences/preference-store";

export const PREFERENCES_STORAGE_KEY = "tai-chi-ai-coach.preferences.v1";
/** Clé historique du ThemeProvider MVP-001 — migrée une fois. */
export const LEGACY_THEME_STORAGE_KEY = "tai-chi-theme";

const DURATION_SET = new Set([5, 10, 15, 20, 30]);
const LEVEL_SET = new Set(["decouverte", "debutant", "progression"]);
const THEME_SET = new Set(["light", "dark", "system"]);

function isUserPreferences(value: unknown): value is UserPreferences {
  if (!value || typeof value !== "object") return false;
  const candidate = value as UserPreferences;
  if (candidate.version !== 1) return false;
  if (!THEME_SET.has(candidate.theme)) return false;
  if (candidate.locale !== "fr") return false;
  if (!candidate.practice || !candidate.accessibility) return false;
  if (!DURATION_SET.has(candidate.practice.preferredDurationMinutes)) return false;
  if (!LEVEL_SET.has(candidate.practice.preferredLevel)) return false;
  if (typeof candidate.practice.showTips !== "boolean") return false;
  if (typeof candidate.accessibility.reduceMotion !== "boolean") return false;
  return true;
}

function migrateLegacyTheme(
  storage: Pick<Storage, "getItem" | "removeItem">,
  defaults: UserPreferences,
): UserPreferences {
  const legacy = storage.getItem(LEGACY_THEME_STORAGE_KEY);
  if (legacy === "light" || legacy === "dark") {
    try {
      storage.removeItem(LEGACY_THEME_STORAGE_KEY);
    } catch {
      /* ignore */
    }
    return { ...defaults, theme: legacy };
  }
  return defaults;
}

export function createLocalStoragePreferenceStore(
  storage?: Pick<Storage, "getItem" | "setItem" | "removeItem">,
): PreferenceStore {
  const resolveStorage = () => {
    if (storage) return storage;
    if (typeof globalThis.localStorage === "undefined") {
      throw new Error("Le stockage local n’est pas disponible.");
    }
    return globalThis.localStorage;
  };

  return {
    load() {
      try {
        const store = resolveStorage();
        const raw = store.getItem(PREFERENCES_STORAGE_KEY);
        if (!raw) {
          return migrateLegacyTheme(store, createDefaultPreferences());
        }
        const parsed: unknown = JSON.parse(raw);
        if (!isUserPreferences(parsed)) {
          return migrateLegacyTheme(store, createDefaultPreferences());
        }
        return parsed;
      } catch (error) {
        if (error instanceof Error && error.message.includes("disponible")) {
          throw error;
        }
        // JSON corrompu ou lecture impossible → défauts (pas de crash UI).
        return migrateLegacyTheme(resolveStorage(), createDefaultPreferences());
      }
    },

    save(preferences) {
      try {
        resolveStorage().setItem(
          PREFERENCES_STORAGE_KEY,
          JSON.stringify(preferences),
        );
      } catch (error) {
        if (error instanceof Error && error.message.includes("disponible")) {
          throw error;
        }
        throw new Error("Impossible d’enregistrer les préférences locales.");
      }
    },
  };
}
