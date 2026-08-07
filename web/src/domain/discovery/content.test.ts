import { describe, expect, it } from "vitest";

import {
  DISCOVERY_PATH,
  STYLES_DISCOVERY,
  TAI_CHI_PRESENTATION,
} from "@/domain/discovery/content";

describe("discovery content — F-001 / F-002", () => {
  it("expose la route officielle /decouverte", () => {
    expect(DISCOVERY_PATH).toBe("/decouverte");
  });

  it("F-001 : mentionne le caractère non médical et l’absence de promesse médicale", () => {
    const text = TAI_CHI_PRESENTATION.sections
      .flatMap((s) => s.paragraphs)
      .join(" ");
    expect(text.toLowerCase()).toContain("médical");
    expect(text.toLowerCase()).toMatch(/aucune promesse médicale|pas.*promesse médicale/);
    expect(text.toLowerCase()).toContain("diagnostic");
  });

  it("F-001 : reste court (nombre de sections limité)", () => {
    expect(TAI_CHI_PRESENTATION.sections.length).toBeLessThanOrEqual(5);
  });

  it("F-002 : cite les styles documentés sans imposer de choix", () => {
    expect(STYLES_DISCOVERY.exampleNames).toEqual([
      "Yang",
      "Chen",
      "Wu",
      "Sun",
    ]);
    expect(STYLES_DISCOVERY.intro.toLowerCase()).toContain("choisir");
    expect(STYLES_DISCOVERY.closing.toLowerCase()).toContain("imposé");
  });
});
