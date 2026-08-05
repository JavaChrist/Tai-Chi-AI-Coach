import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { AppBrand } from "@/components/brand/app-brand";
import { BRAND_NAME, assets } from "@/config/assets";

describe("AppBrand", () => {
  it("utilise le fallback textuel lorsque les logos officiels sont absents", () => {
    const html = renderToStaticMarkup(
      <AppBrand variant="compact" preferText href={null} />,
    );

    expect(html).toContain(BRAND_NAME);
    expect(html).toContain("TC");
    expect(html).not.toContain(assets.brand.logoCompact.path);
    expect(html).not.toContain("<img");
  });

  it("rend un logo lorsque logoSrc est fourni (asset disponible)", () => {
    const html = renderToStaticMarkup(
      <AppBrand
        variant="compact"
        href={null}
        logoSrc={assets.placeholders.brandMarkTemp.path}
      />,
    );

    expect(html).toContain(BRAND_NAME);
    expect(html).toContain(assets.placeholders.brandMarkTemp.path);
  });

  it("expose un lien accessible vers l’accueil par défaut", () => {
    const html = renderToStaticMarkup(<AppBrand variant="compact" />);

    expect(html).toContain('href="/"');
    expect(html).toContain(`aria-label="${BRAND_NAME} — Accueil"`);
  });

  it("n’injecte aucun chemin de logo manquant dans le HTML rendu", () => {
    const html = renderToStaticMarkup(<AppBrand variant="full" href={null} />);

    expect(html).not.toContain(assets.brand.logo.path);
    expect(html).not.toContain(assets.brand.logoCompact.path);
    expect(html).toContain(BRAND_NAME);
  });
});
