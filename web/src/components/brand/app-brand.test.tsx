import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import {
  AppBrand,
  resolveBrandMarkSrc,
} from "@/components/brand/app-brand";
import { BRAND_NAME, assets, isAssetReady } from "@/config/assets";

describe("resolveBrandMarkSrc", () => {
  it("sélectionne icon512 lorsque les logos SVG sont missing", () => {
    expect(isAssetReady(assets.brand.logo)).toBe(false);
    expect(isAssetReady(assets.brand.logoCompact)).toBe(false);
    expect(isAssetReady(assets.brand.icon512)).toBe(true);
    expect(resolveBrandMarkSrc("compact")).toBe(assets.brand.icon512.path);
    expect(resolveBrandMarkSrc("full")).toBe(assets.brand.icon512.path);
  });

  it("privilégie logoSrc puis refuse le texte si preferText", () => {
    expect(
      resolveBrandMarkSrc("compact", assets.placeholders.brandMarkTemp.path),
    ).toBe(assets.placeholders.brandMarkTemp.path);
    expect(resolveBrandMarkSrc("compact", undefined, true)).toBeNull();
  });
});

describe("AppBrand", () => {
  it("affiche l’icône officielle (pas le cercle TC) quand les SVG sont missing", () => {
    const html = renderToStaticMarkup(
      <AppBrand variant="compact" href={null} />,
    );

    expect(html).toContain(BRAND_NAME);
    // next/image encode l’URL (`%2Fbrand%2F…`)
    expect(html).toContain("tai-chi-ai-coach-icon-512.png");
    expect(html).not.toContain(">TC<");
    expect(html).not.toContain("tai-chi-ai-coach-logo-compact.svg");
  });

  it("utilise le fallback textuel TC uniquement si preferText", () => {
    const html = renderToStaticMarkup(
      <AppBrand variant="compact" preferText href={null} />,
    );

    expect(html).toContain(BRAND_NAME);
    expect(html).toContain("TC");
    expect(html).not.toContain(assets.brand.icon512.path);
    expect(html).not.toContain("<img");
  });

  it("rend un logo lorsque logoSrc est fourni", () => {
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

  it("n’injecte aucun chemin de logo SVG manquant", () => {
    const html = renderToStaticMarkup(<AppBrand variant="full" href={null} />);

    expect(html).not.toContain("tai-chi-ai-coach-logo.svg");
    expect(html).not.toContain("tai-chi-ai-coach-logo-compact.svg");
    expect(html).toContain("tai-chi-ai-coach-icon-512.png");
    expect(html).toContain(BRAND_NAME);
  });
});
