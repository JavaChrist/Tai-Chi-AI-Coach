import { describe, expect, it } from "vitest";

import { pedagogicalCueForStepIndex } from "@/domain/beginner-path/pedagogical-cue";

describe("pedagogicalCueForStepIndex", () => {
  it("fournit des indices pédagogiques déterministes", () => {
    expect(pedagogicalCueForStepIndex(0, 3)).toBe("Commencer ici");
    expect(pedagogicalCueForStepIndex(1, 3)).toBe("Ensuite");
    expect(pedagogicalCueForStepIndex(2, 3)).toBe("Puis continuer");
  });
});
