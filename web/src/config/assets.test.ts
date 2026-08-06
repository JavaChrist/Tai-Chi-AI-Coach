import { existsSync, readFileSync } from "node:fs";
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
import {
  HERO_DARK_ASSET_PATHS,
  HERO_LIGHT_ASSET_PATHS,
  SCREEN_HERO_MAP,
} from "@/config/background-assets";

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

  it("expose splash et mapping écrans Hero (MVP-008B)", () => {
    expect(assets.backgrounds.splash.main.light.mobile.family).toBe(
      "splash-main",
    );
    expect(SCREEN_HERO_MAP.home).toBe("morning");
    expect(SCREEN_HERO_MAP.bibliotheque).toBe("bamboo");
    expect(SCREEN_HERO_MAP.sessions).toBe("bamboo");
    expect(SCREEN_HERO_MAP.progression).toBe("mist");
    expect(SCREEN_HERO_MAP.bilan).toBe("mist");
    expect(SCREEN_HERO_MAP.onboarding).toBe("dojo");
    expect(SCREEN_HERO_MAP.profil).toBe("mountain");
    expect(SCREEN_HERO_MAP.pratique).toBeNull();
  });

  it("enregistre les 15 Hero Light (Sprint 3) en status final avec fichiers présents", () => {
    const hero = assets.backgrounds.hero;
    const lightRefs = [
      hero.morning.light.desktop,
      hero.morning.light.tablet,
      hero.morning.light.mobile,
      hero.bamboo.light.desktop,
      hero.bamboo.light.tablet,
      hero.bamboo.light.mobile,
      hero.mist.light.desktop,
      hero.mist.light.tablet,
      hero.mist.light.mobile,
      hero.dojo.light.desktop,
      hero.dojo.light.tablet,
      hero.dojo.light.mobile,
      hero.mountain.light.desktop,
      hero.mountain.light.tablet,
      hero.mountain.light.mobile,
    ];

    expect(lightRefs).toHaveLength(15);
    expect(HERO_LIGHT_ASSET_PATHS).toHaveLength(15);

    for (const [index, ref] of lightRefs.entries()) {
      expect(ref.path).toBe(HERO_LIGHT_ASSET_PATHS[index]);
      expect(ref.status).toBe("final");
      expect(ref.theme).toBe("light");
      expect(ref.format).toBe("webp");
      expect(ref.width).toBeGreaterThan(0);
      expect(ref.height).toBeGreaterThan(0);
      expect(isAssetReady(ref)).toBe(true);
      const diskPath = path.join(rootDir, "public", ref.path.replace(/^\//, ""));
      expect(existsSync(diskPath)).toBe(true);
    }
  });

  it("enregistre les 15 Hero Dark (Sprint Dark) en status final avec fichiers présents", () => {
    const hero = assets.backgrounds.hero;
    const darkRefs = [
      hero.morning.dark.desktop,
      hero.morning.dark.tablet,
      hero.morning.dark.mobile,
      hero.bamboo.dark.desktop,
      hero.bamboo.dark.tablet,
      hero.bamboo.dark.mobile,
      hero.mist.dark.desktop,
      hero.mist.dark.tablet,
      hero.mist.dark.mobile,
      hero.dojo.dark.desktop,
      hero.dojo.dark.tablet,
      hero.dojo.dark.mobile,
      hero.mountain.dark.desktop,
      hero.mountain.dark.tablet,
      hero.mountain.dark.mobile,
    ];

    expect(darkRefs).toHaveLength(15);
    expect(HERO_DARK_ASSET_PATHS).toHaveLength(15);

    for (const [index, ref] of darkRefs.entries()) {
      expect(ref.path).toBe(HERO_DARK_ASSET_PATHS[index]);
      expect(ref.status).toBe("final");
      expect(ref.theme).toBe("dark");
      expect(ref.format).toBe("webp");
      expect(ref.width).toBeGreaterThan(0);
      expect(ref.height).toBeGreaterThan(0);
      expect(isAssetReady(ref)).toBe(true);
      const diskPath = path.join(rootDir, "public", ref.path.replace(/^\//, ""));
      expect(existsSync(diskPath)).toBe(true);
    }
  });

  it("mappe Light et Dark par famille avec les mêmes viewports", () => {
    const hero = assets.backgrounds.hero;
    const families = ["morning", "bamboo", "mist", "dojo", "mountain"] as const;
    const viewports = ["desktop", "tablet", "mobile"] as const;

    for (const family of families) {
      for (const viewport of viewports) {
        const light = hero[family].light[viewport];
        const dark = hero[family].dark[viewport];
        expect(light.family).toBe(dark.family);
        expect(light.viewport).toBe(dark.viewport);
        expect(light.width).toBe(dark.width);
        expect(light.height).toBe(dark.height);
        expect(light.path).toContain(`hero-${family}-light-`);
        expect(dark.path).toContain(`hero-${family}-dark-`);
        expect(isAssetReady(light)).toBe(true);
        expect(isAssetReady(dark)).toBe(true);
      }
    }
  });

  it("n’active le fallback Hero que si l’asset n’est pas prêt", () => {
    const ready = assets.backgrounds.hero.morning.dark.desktop;
    expect(isAssetReady(ready)).toBe(true);

    const absent = {
      ...ready,
      status: "missing" as const,
      path: "/backgrounds/hero/dark/hero-absent-dark-desktop.webp",
    };
    expect(isAssetReady(absent)).toBe(false);
    expect(
      existsSync(
        path.join(rootDir, "public", absent.path.replace(/^\//, "")),
      ),
    ).toBe(false);
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
