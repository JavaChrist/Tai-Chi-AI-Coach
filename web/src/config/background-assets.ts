/**
 * Catalogue typé des environnements visuels (MVP-008B).
 * (Pas d’import depuis `assets.ts` — évite les dépendances circulaires.)
 *
 * Pipeline Hero :
 * Masters Light (`masters/`) → exports `light/`
 * Masters Dark (`masters-dark/`) → exports `dark/`
 * Chemins exports : `/backgrounds/hero/<theme>/hero-<family>-<theme>-<viewport>.webp`
 */

export type BackgroundTheme = "light" | "dark";
export type BackgroundViewport = "desktop" | "tablet" | "mobile";

export type BackgroundAssetRef = {
  path: string;
  status: "missing" | "placeholder" | "final";
  format: string;
  width?: number;
  height?: number;
  transparent?: boolean;
  role: string;
  theme: BackgroundTheme;
  viewport?: BackgroundViewport;
  family: string;
};

const VIEWPORT_SIZE: Record<
  BackgroundViewport,
  { width: number; height: number }
> = {
  desktop: { width: 1920, height: 1080 },
  tablet: { width: 1280, height: 1024 },
  mobile: { width: 1080, height: 1920 },
};

function heroAsset(
  family: string,
  theme: BackgroundTheme,
  viewport: BackgroundViewport,
  role: string,
  status: BackgroundAssetRef["status"] = "missing",
): BackgroundAssetRef {
  const size = VIEWPORT_SIZE[viewport];
  return {
    path: `/backgrounds/hero/${theme}/hero-${family}-${theme}-${viewport}.webp`,
    status,
    format: "webp",
    width: size.width,
    height: size.height,
    transparent: false,
    role,
    theme,
    viewport,
    family: `hero-${family}`,
  };
}

function splashAsset(
  theme: BackgroundTheme,
  viewport: BackgroundViewport,
): BackgroundAssetRef {
  const size = VIEWPORT_SIZE[viewport];
  return {
    path: `/backgrounds/splash/${theme}/splash-main-${theme}-${viewport}.webp`,
    status: "missing",
    format: "webp",
    width: size.width,
    height: size.height,
    transparent: false,
    role: "Splash — entrée dans l’univers",
    theme,
    viewport,
    family: "splash-main",
  };
}

function sectionAsset(
  family: string,
  theme: BackgroundTheme,
  role: string,
): BackgroundAssetRef {
  return {
    path: `/backgrounds/sections/${theme}/section-${family}-${theme}-desktop.webp`,
    status: "missing",
    format: "webp",
    width: 1600,
    height: 900,
    transparent: false,
    role,
    theme,
    viewport: "desktop",
    family: `section-${family}`,
  };
}

const HERO_ROLES = {
  morning: "Hero Morning — commencement (accueil)",
  bamboo: "Hero Bamboo — souplesse (bibliothèque)",
  mist: "Hero Mist — respiration (progression / bilan)",
  mountain: "Hero Mountain — stabilité (à propos)",
  dojo: "Hero Dojo — préparation (onboarding ponctuel)",
} as const;

type HeroFamily = keyof typeof HERO_ROLES;

function heroFamily(family: HeroFamily) {
  const role = HERO_ROLES[family];
  /** Light + Dark : `final` (15 + 15 fichiers présents). */
  return {
    light: {
      desktop: heroAsset(family, "light", "desktop", role, "final"),
      tablet: heroAsset(family, "light", "tablet", role, "final"),
      mobile: heroAsset(family, "light", "mobile", role, "final"),
    },
    dark: {
      desktop: heroAsset(family, "dark", "desktop", role, "final"),
      tablet: heroAsset(family, "dark", "tablet", role, "final"),
      mobile: heroAsset(family, "dark", "mobile", role, "final"),
    },
  } as const;
}

/** Familles Hero × viewports Light — 15 références catalogue (Sprint 3 `final`). */
export const HERO_LIGHT_ASSET_PATHS = [
  "/backgrounds/hero/light/hero-morning-light-desktop.webp",
  "/backgrounds/hero/light/hero-morning-light-tablet.webp",
  "/backgrounds/hero/light/hero-morning-light-mobile.webp",
  "/backgrounds/hero/light/hero-bamboo-light-desktop.webp",
  "/backgrounds/hero/light/hero-bamboo-light-tablet.webp",
  "/backgrounds/hero/light/hero-bamboo-light-mobile.webp",
  "/backgrounds/hero/light/hero-mist-light-desktop.webp",
  "/backgrounds/hero/light/hero-mist-light-tablet.webp",
  "/backgrounds/hero/light/hero-mist-light-mobile.webp",
  "/backgrounds/hero/light/hero-dojo-light-desktop.webp",
  "/backgrounds/hero/light/hero-dojo-light-tablet.webp",
  "/backgrounds/hero/light/hero-dojo-light-mobile.webp",
  "/backgrounds/hero/light/hero-mountain-light-desktop.webp",
  "/backgrounds/hero/light/hero-mountain-light-tablet.webp",
  "/backgrounds/hero/light/hero-mountain-light-mobile.webp",
] as const;

/** Familles Hero × viewports Dark — 15 références catalogue (Sprint Dark `final`). */
export const HERO_DARK_ASSET_PATHS = [
  "/backgrounds/hero/dark/hero-morning-dark-desktop.webp",
  "/backgrounds/hero/dark/hero-morning-dark-tablet.webp",
  "/backgrounds/hero/dark/hero-morning-dark-mobile.webp",
  "/backgrounds/hero/dark/hero-bamboo-dark-desktop.webp",
  "/backgrounds/hero/dark/hero-bamboo-dark-tablet.webp",
  "/backgrounds/hero/dark/hero-bamboo-dark-mobile.webp",
  "/backgrounds/hero/dark/hero-mist-dark-desktop.webp",
  "/backgrounds/hero/dark/hero-mist-dark-tablet.webp",
  "/backgrounds/hero/dark/hero-mist-dark-mobile.webp",
  "/backgrounds/hero/dark/hero-dojo-dark-desktop.webp",
  "/backgrounds/hero/dark/hero-dojo-dark-tablet.webp",
  "/backgrounds/hero/dark/hero-dojo-dark-mobile.webp",
  "/backgrounds/hero/dark/hero-mountain-dark-desktop.webp",
  "/backgrounds/hero/dark/hero-mountain-dark-tablet.webp",
  "/backgrounds/hero/dark/hero-mountain-dark-mobile.webp",
] as const;

export const backgroundAssets = {
  hero: {
    morning: heroFamily("morning"),
    bamboo: heroFamily("bamboo"),
    mist: heroFamily("mist"),
    mountain: heroFamily("mountain"),
    dojo: heroFamily("dojo"),
  },
  splash: {
    main: {
      light: {
        desktop: splashAsset("light", "desktop"),
        tablet: splashAsset("light", "tablet"),
        mobile: splashAsset("light", "mobile"),
      },
      dark: {
        desktop: splashAsset("dark", "desktop"),
        tablet: splashAsset("dark", "tablet"),
        mobile: splashAsset("dark", "mobile"),
      },
    },
  },
  sections: {
    bamboo: {
      light: sectionAsset("bamboo", "light", "Section bamboo — respiration légère"),
      dark: sectionAsset("bamboo", "dark", "Section bamboo — respiration légère"),
    },
    mist: {
      light: sectionAsset("mist", "light", "Section mist — transition calme"),
      dark: sectionAsset("mist", "dark", "Section mist — transition calme"),
    },
    paper: {
      light: sectionAsset("paper", "light", "Section paper — carnet / intimité"),
      dark: sectionAsset("paper", "dark", "Section paper — carnet / intimité"),
    },
    stone: {
      light: sectionAsset("stone", "light", "Section stone — ancrage"),
      dark: sectionAsset("stone", "dark", "Section stone — ancrage"),
    },
  },
  textures: {
    ricePaper: {
      path: "/backgrounds/textures/texture-rice-paper.webp",
      status: "missing" as const,
      format: "webp",
      transparent: true,
      role: "Texture Rice Paper — matière légère",
      theme: "light" as const,
      family: "texture-rice-paper",
    },
    bambooPaper: {
      path: "/backgrounds/textures/texture-bamboo-paper.webp",
      status: "missing" as const,
      format: "webp",
      transparent: true,
      role: "Texture bamboo paper — fibre discrète",
      theme: "light" as const,
      family: "texture-bamboo-paper",
    },
    stonePaper: {
      path: "/backgrounds/textures/texture-stone-paper.webp",
      status: "missing" as const,
      format: "webp",
      transparent: true,
      role: "Texture stone paper — ancrage mat",
      theme: "light" as const,
      family: "texture-stone-paper",
    },
  },
  patterns: {
    mist: {
      path: "/backgrounds/patterns/pattern-mist.svg",
      status: "missing" as const,
      format: "svg",
      transparent: true,
      role: "Pattern mist — zone secondaire",
      theme: "light" as const,
      family: "pattern-mist",
    },
    bamboo: {
      path: "/backgrounds/patterns/pattern-bamboo.svg",
      status: "missing" as const,
      format: "svg",
      transparent: true,
      role: "Pattern bamboo — zone secondaire",
      theme: "light" as const,
      family: "pattern-bamboo",
    },
    wave: {
      path: "/backgrounds/patterns/pattern-wave.svg",
      status: "missing" as const,
      format: "svg",
      transparent: true,
      role: "Pattern wave — fluidité calme",
      theme: "light" as const,
      family: "pattern-wave",
    },
  },
} as const;

/** Mapping écran → famille Hero recommandée (MVP-008B). */
export const SCREEN_HERO_MAP = {
  home: "morning",
  bibliotheque: "bamboo",
  sessions: "bamboo",
  progression: "mist",
  bilan: "mist",
  about: "mountain",
  onboarding: "dojo",
  /** Continuité Accueil → pratique guidée (même famille morning). */
  pratique: "morning",
  profil: "mountain",
} as const;
