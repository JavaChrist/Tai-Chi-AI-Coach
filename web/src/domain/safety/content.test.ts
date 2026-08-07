import { describe, expect, it } from "vitest";

import {
  PRE_PRACTICE_WARNING,
  SAFETY_ADVICE,
  SAFETY_ADVICE_PATH,
} from "@/domain/safety/content";

describe("safety content — F-016 / F-031", () => {
  it("F-016 : conseils consultables mentionnent l’arrêt si douleur", () => {
    const joined = SAFETY_ADVICE.points.map((p) => p.text).join(" ");
    expect(joined.toLowerCase()).toContain("douleur");
    expect(joined.toLowerCase()).toContain("interrompez");
  });

  it("F-016 : exclut diagnostic et traitement", () => {
    const joined = SAFETY_ADVICE.points.map((p) => p.text).join(" ");
    expect(joined.toLowerCase()).toContain("diagnostic");
    expect(joined.toLowerCase()).toContain("traitement");
    expect(joined.toLowerCase()).toContain("promesse médicale");
  });

  it("F-016 : oriente vers un professionnel compétent et adaptation de l’effort", () => {
    const joined = SAFETY_ADVICE.points.map((p) => p.text).join(" ");
    expect(joined.toLowerCase()).toContain("professionnel");
    expect(joined.toLowerCase()).toContain("adaptez");
  });

  it("F-031 : avertissement avant pratique mentionne douleur et exclut promesse médicale", () => {
    const joined = PRE_PRACTICE_WARNING.points.map((p) => p.text).join(" ");
    expect(joined.toLowerCase()).toContain("douleur");
    expect(joined.toLowerCase()).toContain("promesse médicale");
    expect(joined.toLowerCase()).toContain("adaptez");
  });

  it("expose le chemin consultable F-016", () => {
    expect(SAFETY_ADVICE_PATH).toBe("/conseils-de-securite");
  });
});
