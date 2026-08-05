import { createDefaultPreferences } from "@/domain/preferences/defaults";
import type { UserPreferences } from "@/domain/preferences/types";
import { emitPreferencesChanged } from "@/services/preferences/preference-events";
import { createLocalStoragePreferenceStore } from "@/services/preferences/local-storage-preference-store";
import type { PreferenceStore } from "@/services/preferences/preference-store";

export type PreferenceService = {
  getPreferences: () => UserPreferences;
  savePreferences: (preferences: UserPreferences) => UserPreferences;
  updatePreferences: (
    patch: (current: UserPreferences) => UserPreferences,
  ) => UserPreferences;
  getDefaults: () => UserPreferences;
};

export function createPreferenceService(
  store: PreferenceStore,
  options?: { notify?: boolean },
): PreferenceService {
  const notify = options?.notify ?? true;

  return {
    getPreferences() {
      return store.load();
    },

    savePreferences(preferences) {
      store.save(preferences);
      if (notify) emitPreferencesChanged();
      return preferences;
    },

    updatePreferences(patch) {
      const next = patch(store.load());
      store.save(next);
      if (notify) emitPreferencesChanged();
      return next;
    },

    getDefaults() {
      return createDefaultPreferences();
    },
  };
}

let singleton: PreferenceService | null = null;

export function getPreferenceService(): PreferenceService {
  if (!singleton) {
    singleton = createPreferenceService(createLocalStoragePreferenceStore());
  }
  return singleton;
}

/** Réservé aux tests. */
export function __resetPreferenceServiceForTests() {
  singleton = null;
}
