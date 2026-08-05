"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import { createDefaultPreferences } from "@/domain/preferences/defaults";
import { resolveTheme, type ResolvedTheme } from "@/domain/preferences/resolve-theme";
import type {
  ThemePreference,
  UserPreferences,
} from "@/domain/preferences/types";
import {
  emitPreferencesChanged,
  subscribePreferences,
} from "@/services/preferences/preference-events";
import { getPreferenceService } from "@/services/preferences/preference-service";

type PreferencesStatus = "ready" | "error";

type PreferencesSnapshot = {
  preferences: UserPreferences;
  status: PreferencesStatus;
  loadError: string | null;
};

type PreferencesContextValue = {
  preferences: UserPreferences;
  resolvedTheme: ResolvedTheme;
  status: PreferencesStatus;
  loadError: string | null;
  isSaving: boolean;
  saveError: string | null;
  setPreferences: (next: UserPreferences) => void;
  patchPreferences: (patch: (current: UserPreferences) => UserPreferences) => void;
  setThemePreference: (theme: ThemePreference) => void;
  reload: () => void;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

const serverSnapshot: PreferencesSnapshot = {
  preferences: createDefaultPreferences(),
  status: "ready",
  loadError: null,
};

let clientSnapshot: PreferencesSnapshot | null = null;

function readClientSnapshot(): PreferencesSnapshot {
  try {
    return {
      preferences: getPreferenceService().getPreferences(),
      status: "ready",
      loadError: null,
    };
  } catch (error) {
    return {
      preferences: createDefaultPreferences(),
      status: "error",
      loadError:
        error instanceof Error
          ? error.message
          : "Impossible de lire les préférences locales.",
    };
  }
}

function getClientSnapshot(): PreferencesSnapshot {
  clientSnapshot ??= readClientSnapshot();
  return clientSnapshot;
}

function subscribe(listener: () => void) {
  return subscribePreferences(() => {
    clientSnapshot = null;
    listener();
  });
}

function subscribeSystemTheme(listener: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", listener);
  return () => media.removeEventListener("change", listener);
}

function readSystemPrefersDark() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyDocumentEffects(
  preferences: UserPreferences,
  systemPrefersDark: boolean,
) {
  if (typeof document === "undefined") return;
  const resolved = resolveTheme(preferences.theme, systemPrefersDark);
  document.documentElement.classList.toggle("dark", resolved === "dark");
  document.documentElement.classList.toggle(
    "reduce-motion",
    preferences.accessibility.reduceMotion,
  );
  document.documentElement.lang = preferences.locale;
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const snapshot = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    () => serverSnapshot,
  );
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const systemPrefersDark = useSyncExternalStore(
    subscribeSystemTheme,
    readSystemPrefersDark,
    () => false,
  );

  useEffect(() => {
    applyDocumentEffects(snapshot.preferences, systemPrefersDark);
  }, [snapshot.preferences, systemPrefersDark]);

  const persist = useCallback((next: UserPreferences) => {
    setIsSaving(true);
    setSaveError(null);
    try {
      getPreferenceService().savePreferences(next);
      applyDocumentEffects(next, readSystemPrefersDark());
    } catch (error) {
      setSaveError(
        error instanceof Error
          ? error.message
          : "Impossible d’enregistrer les préférences locales.",
      );
    } finally {
      setIsSaving(false);
    }
  }, []);

  const setPreferences = useCallback(
    (next: UserPreferences) => {
      persist(next);
    },
    [persist],
  );

  const patchPreferences = useCallback(
    (patch: (current: UserPreferences) => UserPreferences) => {
      const current = getClientSnapshot().preferences;
      persist(patch(current));
    },
    [persist],
  );

  const setThemePreference = useCallback(
    (theme: ThemePreference) => {
      patchPreferences((current) => ({ ...current, theme }));
    },
    [patchPreferences],
  );

  const reload = useCallback(() => {
    clientSnapshot = null;
    emitPreferencesChanged();
  }, []);

  const resolvedTheme = resolveTheme(
    snapshot.preferences.theme,
    systemPrefersDark,
  );

  const value = useMemo<PreferencesContextValue>(
    () => ({
      preferences: snapshot.preferences,
      resolvedTheme,
      status: snapshot.status,
      loadError: snapshot.loadError,
      isSaving,
      saveError,
      setPreferences,
      patchPreferences,
      setThemePreference,
      reload,
    }),
    [
      snapshot.preferences,
      snapshot.status,
      snapshot.loadError,
      resolvedTheme,
      isSaving,
      saveError,
      setPreferences,
      patchPreferences,
      setThemePreference,
      reload,
    ],
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext);
  if (!ctx) {
    throw new Error("usePreferences must be used within PreferencesProvider");
  }
  return ctx;
}
