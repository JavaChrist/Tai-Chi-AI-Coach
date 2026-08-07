import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { SafetyAdvice } from "@/components/safety/safety-advice";

describe("SafetyAdvice — F-016", () => {
  it("rend les conseils consultables avec douleur, diagnostic et traitement exclus", () => {
    const html = renderToStaticMarkup(<SafetyAdvice />);

    expect(html).toContain('data-testid="safety-advice"');
    expect(html).toContain("Conseils de sécurité");
    expect(html).toContain("douleur");
    expect(html).toContain("diagnostic");
    expect(html).toContain("traitement");
    expect(html).toContain("professionnel");
    expect(html).toContain("promesse médicale");
  });
});
