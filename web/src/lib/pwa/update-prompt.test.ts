import { describe, expect, it, vi } from "vitest";

import {
  createSkipWaitingMessage,
  scheduleUniqueReload,
  shouldPromptAppUpdate,
} from "@/lib/pwa/update-prompt";

describe("shouldPromptAppUpdate", () => {
  it("propose hors pratique lorsque update disponible et non dismissed", () => {
    expect(
      shouldPromptAppUpdate({
        updateAvailable: true,
        isPractice: false,
        dismissed: false,
      }),
    ).toBe(true);
  });

  it("diffère pendant /pratique même si update disponible", () => {
    expect(
      shouldPromptAppUpdate({
        updateAvailable: true,
        isPractice: true,
        dismissed: false,
      }),
    ).toBe(false);
  });

  it("respecte le dismiss temporaire", () => {
    expect(
      shouldPromptAppUpdate({
        updateAvailable: true,
        isPractice: false,
        dismissed: true,
      }),
    ).toBe(false);
  });
});

describe("scheduleUniqueReload", () => {
  it("n’exécute le reload qu’une seule fois", () => {
    const reload = vi.fn();
    const state = { scheduled: false };

    expect(scheduleUniqueReload(reload, state)).toBe(true);
    expect(scheduleUniqueReload(reload, state)).toBe(false);
    expect(reload).toHaveBeenCalledTimes(1);
  });
});

describe("createSkipWaitingMessage", () => {
  it("produit le message attendu par le Service Worker", () => {
    expect(createSkipWaitingMessage()).toEqual({ type: "SKIP_WAITING" });
  });
});
