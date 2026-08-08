import { describe, expect, it } from "vitest";

import { CALM_BREATHING, CALM_BREATHING_PATH } from "@/domain/breathing/content";

describe("F-014 â€” contenu Respiration calme", () => {
  it("expose titre, durÃ©e indicative, 7 instructions et prudence", () => {
    expect(CALM_BREATHING.title).toBe("Respiration calme");
    expect(CALM_BREATHING.durationLabel).toBe("Environ 1 minute");
    expect(CALM_BREATHING.instructions).toHaveLength(7);
    expect(CALM_BREATHING.caution.length).toBeGreaterThan(20);
    expect(CALM_BREATHING_PATH).toBe("/respiration");
  });

  it("conserve la consigne Â« Ne retiens pas ton souffle Â» (instruction 6)", () => {
    expect(CALM_BREATHING.instructions[5]).toMatch(/Ne retiens pas ton souffle/i);
  });

  it("interdit les protocoles / promesses (sens â€” pas un substring naÃ¯f sur Â« retiens Â»)", () => {
    const blob = [
      CALM_BREATHING.title,
      CALM_BREATHING.intro,
      CALM_BREATHING.durationLabel,
      ...CALM_BREATHING.instructions,
      CALM_BREATHING.caution,
    ]
      .join("\n")
      .toLowerCase();

    // AutorisÃ© : nÃ©gation officielle Â« Ne retiens pas ton souffle Â».
    const withoutAllowedNegation = blob.replace(
      /ne retiens pas ton souffle/g,
      "",
    );

    expect(blob).not.toMatch(/4\s*[-â€“]\s*7\s*[-â€“]\s*8/);
    expect(blob).not.toMatch(/4\s*[-â€“]\s*4\b/);
    expect(blob).not.toContain("box breathing");
    expect(blob).not.toContain("hyperventilation");
    expect(blob).not.toContain("guÃ©rison");
    expect(blob).not.toContain("thÃ©rapeutique");
    expect(blob).not.toContain("traitement");
    expect(blob).not.toContain("mÃ©dical");
    expect(blob).not.toContain("performance");
    expect(blob).not.toContain("apnÃ©e");
    expect(blob).not.toMatch(/\bratio\b/);
    expect(blob).not.toMatch(/\d+\s*secondes?\s*(d['â€™])?(inspi|expi)/);
    // AprÃ¨s retrait de la nÃ©gation autorisÃ©e : aucune rÃ©tention guidÃ©e.
    expect(withoutAllowedNegation).not.toMatch(/reten(?:s|ir|tion)\b/);
  });
});
