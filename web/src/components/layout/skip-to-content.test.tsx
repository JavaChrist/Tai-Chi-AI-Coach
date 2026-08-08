import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { SkipToContent } from "@/components/layout/skip-to-content";

describe("SkipToContent", () => {
  it("cible #contenu-principal avec libellé explicite", () => {
    const html = renderToStaticMarkup(<SkipToContent />);
    expect(html).toContain('href="#contenu-principal"');
    expect(html).toContain("Aller au contenu principal");
    expect(html).toContain("skip-to-content");
  });
});
