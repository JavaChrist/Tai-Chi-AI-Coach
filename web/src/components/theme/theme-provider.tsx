"use client";

import type { ReactNode } from "react";

import { PreferencesProvider, usePreferences } from "@/components/preferences/preferences-provider";
import type { ThemePreference } from "@/domain/preferences/types";
import type { ResolvedTheme } from "@/domain/preferences/resolve-theme";

type ThemeContextCompat = {
  /** Thème résolu (clair / sombre). */
  theme: ResolvedTheme;
  /** Préférence utilisateur (clair / sombre / système). */
  themePreference: ThemePreference;
  setTheme: (theme: ThemePreference) => void;
  toggleTheme: () => void;
};

/**
 * Compatibilité : ThemeProvider délègue désormais aux préférences utilisateur.
 * Persistance via PreferenceStore (remplaçable plus tard par Supabase).
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return <PreferencesProvider>{children}</PreferencesProvider>;
}

export function useTheme(): ThemeContextCompat {
  const { resolvedTheme, preferences, setThemePreference } = usePreferences();

  const toggleTheme = () => {
    const order: ThemePreference[] = ["light", "dark", "system"];
    const index = order.indexOf(preferences.theme);
    const next = order[(index + 1) % order.length] ?? "system";
    setThemePreference(next);
  };

  return {
    theme: resolvedTheme,
    themePreference: preferences.theme,
    setTheme: setThemePreference,
    toggleTheme,
  };
}
