import { describe, expect, it } from "vitest";

import { canAdvanceFrom, nextStep, previousStep } from "@/domain/onboarding/steps";
import { CURRENT_ONBOARDING_VERSION } from "@/domain/onboarding/types";
import { createDefaultPreferences } from "@/domain/preferences/defaults";
import type { UserPreferences } from "@/domain/preferences/types";
import { createLocalStorageOnboardingStore } from "@/services/onboarding/local-storage-onboarding-store";
import { createOnboardingService } from "@/services/onboarding/onboarding-service";
import type { PreferenceService } from "@/services/preferences/preference-service";

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

function createMemoryPreferences(
  initial: UserPreferences = createDefaultPreferences(),
): PreferenceService & { current: UserPreferences } {
  const api = {
    current: structuredClone(initial),
    getPreferences() {
      return structuredClone(api.current);
    },
    savePreferences(preferences: UserPreferences) {
      api.current = structuredClone(preferences);
      return api.current;
    },
    updatePreferences(patch: (current: UserPreferences) => UserPreferences) {
      api.current = structuredClone(patch(api.current));
      return api.current;
    },
    getDefaults() {
      return createDefaultPreferences();
    },
  };
  return api;
}

function createHarness() {
  const storage = createMemoryStorage();
  const preferences = createMemoryPreferences();
  const store = createLocalStorageOnboardingStore(storage);
  const service = createOnboardingService(store, preferences, {
    notify: false,
    now: () => "2026-08-05T12:00:00.000Z",
  });
  return { storage, preferences, store, service };
}

describe("onboarding domain steps", () => {
  it("navigue avant / arrière entre les étapes", () => {
    expect(nextStep("welcome")).toBe("level");
    expect(previousStep("level")).toBe("welcome");
    expect(previousStep("welcome")).toBeNull();
    expect(nextStep("summary")).toBeNull();
  });

  it("exige niveau et objectif avant de quitter leurs étapes", () => {
    expect(
      canAdvanceFrom("level", { initialLevel: null, learningGoal: null }),
    ).toBe(false);
    expect(
      canAdvanceFrom("level", {
        initialLevel: "debutant",
        learningGoal: null,
      }),
    ).toBe(true);
    expect(
      canAdvanceFrom("goal", {
        initialLevel: "debutant",
        learningGoal: null,
      }),
    ).toBe(false);
  });
});

describe("onboarding-service", () => {
  it("part d’un état non commencé", () => {
    const { service } = createHarness();
    expect(service.getState()).toMatchObject({
      status: "not_started",
      currentStep: "welcome",
      initialLevel: null,
      learningGoal: null,
    });
    expect(service.needsOnboarding()).toBe(true);
  });

  it("démarre l’onboarding", () => {
    const { service } = createHarness();
    const started = service.start();
    expect(started.status).toBe("in_progress");
    expect(started.version).toBe(CURRENT_ONBOARDING_VERSION);
  });

  it("conserve les choix et permet le retour", () => {
    const { service } = createHarness();
    service.start();
    service.goNext();
    service.setInitialLevel("debutant");
    service.goNext();
    service.setLearningGoal("regularity");
    expect(service.getState().currentStep).toBe("goal");
    service.goBack();
    expect(service.getState()).toMatchObject({
      currentStep: "level",
      initialLevel: "debutant",
      learningGoal: "regularity",
    });
  });

  it("reprend après interruption sans perdre les choix", () => {
    const storage = createMemoryStorage();
    const preferences = createMemoryPreferences();
    const store = createLocalStorageOnboardingStore(storage);
    const first = createOnboardingService(store, preferences, {
      notify: false,
      now: () => "2026-08-05T12:00:00.000Z",
    });
    first.start();
    first.goNext();
    first.setInitialLevel("decouverte");
    first.goNext();
    first.setLearningGoal("discover");

    const resumed = createOnboardingService(
      createLocalStorageOnboardingStore(storage),
      preferences,
      { notify: false },
    );
    expect(resumed.getState()).toMatchObject({
      status: "in_progress",
      currentStep: "goal",
      initialLevel: "decouverte",
      learningGoal: "discover",
    });
    expect(resumed.needsOnboarding()).toBe(true);
  });

  it("finalise avec version et date", () => {
    const { service, preferences } = createHarness();
    service.start();
    service.goNext();
    service.setInitialLevel("progression");
    service.goNext();
    service.setLearningGoal("deepen_basics");
    service.goNext();
    service.setPreferredDuration(20);
    service.goNext();
    const completed = service.complete();
    expect(completed.status).toBe("completed");
    expect(completed.version).toBe(CURRENT_ONBOARDING_VERSION);
    expect(completed.completedAt).toBe("2026-08-05T12:00:00.000Z");
    expect(service.needsOnboarding()).toBe(false);
    expect(preferences.getPreferences().practice.preferredLevel).toBe(
      "progression",
    );
    expect(preferences.getPreferences().practice.preferredDurationMinutes).toBe(
      20,
    );
  });

  it("intègre la durée uniquement via PreferenceStore", () => {
    const { service, preferences, store } = createHarness();
    service.start();
    service.setPreferredDuration(10);
    expect(preferences.getPreferences().practice.preferredDurationMinutes).toBe(
      10,
    );
    const raw = JSON.stringify(store.load());
    expect(raw).not.toContain("preferredDurationMinutes");
  });

  it("permet de reporter (Plus tard) sans bloquer", () => {
    const { service } = createHarness();
    const skipped = service.skip();
    expect(skipped.status).toBe("skipped");
    expect(service.needsOnboarding()).toBe(false);
  });

  it("retombe sur les défauts si le JSON est corrompu", () => {
    const storage = createMemoryStorage({
      "tai-chi-ai-coach.onboarding.v1": "{broken",
    });
    const store = createLocalStorageOnboardingStore(storage);
    const loaded = store.load();
    expect(loaded.status).toBe("not_started");
    expect(loaded.currentStep).toBe("welcome");
    expect(loaded.initialLevel).toBeNull();
  });

  it("signale l’indisponibilité du stockage", () => {
    const store = createLocalStorageOnboardingStore({
      getItem: () => {
        throw new Error("Le stockage local n’est pas disponible.");
      },
      setItem: () => {
        throw new Error("Le stockage local n’est pas disponible.");
      },
    });
    expect(() => store.load()).toThrow(/disponible/i);
  });

  it("n’inclut ni Mei ni caméra dans le parcours MVP", () => {
    const { service } = createHarness();
    expect(service.mvpPathExcludesMeiAndCamera()).toBe(true);
    const state = service.getState() as Record<string, unknown>;
    expect(state).not.toHaveProperty("mei");
    expect(state).not.toHaveProperty("camera");
    expect(JSON.stringify(state).toLowerCase()).not.toContain("mei");
    expect(JSON.stringify(state).toLowerCase()).not.toContain("camera");
  });

  it("considère completed/skipped comme redirection possible hors onboarding", () => {
    const { service } = createHarness();
    service.skip();
    expect(service.needsOnboarding()).toBe(false);
    service.restart();
    expect(service.needsOnboarding()).toBe(true);
    expect(service.getState().currentStep).toBe("welcome");
  });
});
