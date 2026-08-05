import type { UserPreferences } from "@/domain/preferences/types";

/**
 * Contrat de stockage des préférences — localStorage aujourd’hui, Supabase plus tard.
 * Les composants UI ne dépendent pas de l’implémentation.
 */
export type PreferenceStore = {
  load: () => UserPreferences;
  save: (preferences: UserPreferences) => void;
};
