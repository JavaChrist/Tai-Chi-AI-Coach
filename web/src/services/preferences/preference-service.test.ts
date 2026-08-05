import { describe, expect, it } from "vitest";

import { createDefaultPreferences } from "@/domain/preferences/defaults";
import { resolveTheme } from "@/domain/preferences/resolve-theme";
import { sortSessionsByPreferences } from "@/domain/preferences/sort-sessions";
import type { SessionTemplateSummary } from "@/domain/curriculum/types";
import { createLocalStoragePreferenceStore } from "@/services/preferences/local-storage-preference-store";
import { createPreferenceService } from "@/services/preferences/preference-service";

function createMemoryStorage(initial: Record<string, string> = {}) {
  const map = new Map(Object.entries(initial));
  return {
    getItem: (key: string) => map.get(key) ?? null,
    setItem: (key: string, value: string) => {
      map.set(key, value);
    },
    removeItem: (key: string) => {
      map.delete(key);
    },
  };
}

function session(
  partial: Partial<SessionTemplateSummary> & Pick<SessionTemplateSummary, "id">,
): SessionTemplateSummary {
  return {
    title: partial.id,
    shortDescription: "",
    difficulty: "debutant",
    curriculumPhaseKey: "initiation",
    plannedDurationMinutes: 15,
    primaryObjectiveLabel: null,
    publicationStatus: "published",
    isAvailable: true,
    isStructuralPlaceholder: true,
    sortOrder: 1,
    ...partial,
  };
}

describe("preference-service / store local", () => {
  it("retourne les préférences par défaut si le stockage est vide", () => {
    const store = createLocalStoragePreferenceStore(createMemoryStorage());
    const service = createPreferenceService(store);
    expect(service.getPreferences()).toEqual(createDefaultPreferences());
  });

  it("persiste et relit les préférences", () => {
    const store = createLocalStoragePreferenceStore(createMemoryStorage());
    const service = createPreferenceService(store);
    const next = service.updatePreferences((current) => ({
      ...current,
      theme: "dark",
      practice: {
        ...current.practice,
        showTips: false,
        preferredDurationMinutes: 10,
      },
      accessibility: { reduceMotion: true },
    }));

    expect(next.theme).toBe("dark");
    expect(service.getPreferences().practice.showTips).toBe(false);
    expect(service.getPreferences().accessibility.reduceMotion).toBe(true);
  });

  it("migre l’ancien thème localStorage", () => {
    const storage = createMemoryStorage({ "tai-chi-theme": "dark" });
    const store = createLocalStoragePreferenceStore(storage);
    const loaded = store.load();
    expect(loaded.theme).toBe("dark");
    expect(storage.getItem("tai-chi-theme")).toBeNull();
  });

  it("retombe sur les défauts si le JSON est corrompu", () => {
    const storage = createMemoryStorage({
      "tai-chi-ai-coach.preferences.v1": "{broken",
    });
    const store = createLocalStoragePreferenceStore(storage);
    expect(store.load()).toEqual(createDefaultPreferences());
  });
});

describe("resolveTheme", () => {
  it("respecte clair, sombre et système", () => {
    expect(resolveTheme("light", true)).toBe("light");
    expect(resolveTheme("dark", false)).toBe("dark");
    expect(resolveTheme("system", true)).toBe("dark");
    expect(resolveTheme("system", false)).toBe("light");
  });
});

describe("sortSessionsByPreferences", () => {
  it("priorise le niveau et la durée préférés", () => {
    const practice = createDefaultPreferences().practice;
    const sessions = [
      session({
        id: "a",
        difficulty: "decouverte",
        plannedDurationMinutes: 30,
        sortOrder: 1,
      }),
      session({
        id: "b",
        difficulty: "debutant",
        plannedDurationMinutes: 15,
        sortOrder: 2,
      }),
      session({
        id: "c",
        difficulty: "debutant",
        plannedDurationMinutes: 10,
        sortOrder: 3,
      }),
    ];

    const ordered = sortSessionsByPreferences(sessions, practice);
    expect(ordered[0]?.id).toBe("b");
  });
});
