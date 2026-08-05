import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

import {
  BRAND_DESCRIPTION,
  BRAND_NAME,
  BRAND_THEME,
  assets,
  isAssetReady,
} from "@/config/assets";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

describe("catalogue assets", () => {
  it("expose des chemins publics stables commençant par /", () => {
    const paths = [
      assets.brand.logo.path,
      assets.brand.logoCompact.path,
      assets.brand.icon192.path,
      assets.brand.icon512.path,
      assets.brand.iconMaskable192.path,
      assets.brand.iconMaskable512.path,
      assets.brand.appleTouchIcon.path,
      assets.brand.favicon.path,
      assets.characters.mei.avatar.path,
      assets.placeholders.brandMarkTemp.path,
      assets.manifest.path,
    ];

    for (const assetPath of paths) {
      expect(assetPath.startsWith("/")).toBe(true);
      expect(assetPath).not.toMatch(/\s/);
      expect(assetPath).toBe(assetPath.toLowerCase());
    }
  });

  it("ne marque aucun logo de marque comme final tant qu’il est manquant", () => {
    expect(assets.brand.logo.status).toBe("missing");
    expect(assets.brand.logoCompact.status).toBe("missing");
    expect(isAssetReady(assets.brand.logo)).toBe(false);
  });

  it("identifie le placeholder temporaire comme prêt à l’affichage", () => {
    expect(assets.placeholders.brandMarkTemp.status).toBe("placeholder");
    expect(isAssetReady(assets.placeholders.brandMarkTemp)).toBe(true);
  });

  it("conserve les métadonnées de marque pour le layout", () => {
    expect(BRAND_NAME).toBe("Tai-Chi AI Coach");
    expect(BRAND_DESCRIPTION.length).toBeGreaterThan(10);
    expect(BRAND_THEME.themeColor).toMatch(/^#/);
  });
});

describe("manifeste PWA", () => {
  it("est un JSON valide avec les champs minimaux", () => {
    const manifestPath = path.join(rootDir, "public/manifest.webmanifest");
    const raw = readFileSync(manifestPath, "utf8");
    const manifest = JSON.parse(raw) as {
      name: string;
      short_name: string;
      lang: string;
      dir: string;
      start_url: string;
      display: string;
      theme_color: string;
      background_color: string;
      icons: Array<{ src: string; purpose?: string }>;
    };

    expect(manifest.name).toBe(BRAND_NAME);
    expect(manifest.short_name).toBeTruthy();
    expect(manifest.lang).toBe("fr");
    expect(manifest.dir).toBe("ltr");
    expect(manifest.start_url).toBe("/");
    expect(manifest.display).toBe("standalone");
    expect(manifest.theme_color).toBe(BRAND_THEME.themeColor);
    expect(manifest.background_color).toBe(BRAND_THEME.backgroundColor);
    expect(manifest.icons.some((icon) => icon.purpose === "maskable")).toBe(true);
    expect(manifest.icons.every((icon) => icon.src.startsWith("/brand/icons/"))).toBe(
      true,
    );
  });
});
