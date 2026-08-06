/**
 * Catalogue central des chemins d’assets publics.
 * Les fichiers peuvent être absents : l’UI ne doit jamais casser.
 *
 * Environnements visuels (Hero, Splash, sections…) :
 * `web/src/config/background-assets.ts` + `web/public/backgrounds/`.
 */

import { backgroundAssets } from "@/config/background-assets";

export type AssetStatus = "missing" | "placeholder" | "final";

export type AssetRef = {
  path: string;
  status: AssetStatus;
  format: string;
  width?: number;
  height?: number;
  transparent?: boolean;
  role: string;
};

export {
  backgroundAssets,
  SCREEN_HERO_MAP,
  type BackgroundAssetRef,
  type BackgroundTheme,
  type BackgroundViewport,
} from "@/config/background-assets";

/** Un asset est affichable seulement s’il n’est pas manquant. */
export function isAssetReady(asset: AssetRef): boolean {
  return asset.status === "placeholder" || asset.status === "final";
}

export const assets = {
  brand: {
    favicon: {
      path: "/brand/icons/tai-chi-ai-coach-favicon.ico",
      status: "final",
      format: "ico",
      width: 32,
      height: 32,
      role: "Favicon navigateur",
    },
    faviconSvg: {
      path: "/brand/icons/tai-chi-ai-coach-favicon.svg",
      status: "final",
      format: "svg",
      transparent: true,
      role: "Favicon SVG",
    },
    icon192: {
      path: "/brand/icons/tai-chi-ai-coach-icon-192.png",
      status: "final",
      format: "png",
      width: 192,
      height: 192,
      transparent: false,
      role: "Icône PWA 192",
    },
    icon512: {
      path: "/brand/icons/tai-chi-ai-coach-icon-512.png",
      status: "final",
      format: "png",
      width: 512,
      height: 512,
      transparent: false,
      role: "Icône PWA 512",
    },
    iconMaskable192: {
      path: "/brand/icons/tai-chi-ai-coach-maskable-192.png",
      status: "final",
      format: "png",
      width: 192,
      height: 192,
      transparent: false,
      role: "Icône maskable 192",
    },
    iconMaskable512: {
      path: "/brand/icons/tai-chi-ai-coach-maskable-512.png",
      status: "final",
      format: "png",
      width: 512,
      height: 512,
      transparent: false,
      role: "Icône maskable 512",
    },
    appleTouchIcon: {
      path: "/brand/icons/tai-chi-ai-coach-apple-touch-icon.png",
      status: "final",
      format: "png",
      width: 180,
      height: 180,
      transparent: false,
      role: "Apple Touch Icon",
    },
    logo: {
      path: "/brand/logos/tai-chi-ai-coach-logo.svg",
      status: "missing",
      format: "svg",
      transparent: true,
      role: "Logo principal",
    },
    logoCompact: {
      path: "/brand/logos/tai-chi-ai-coach-logo-compact.svg",
      status: "missing",
      format: "svg",
      transparent: true,
      role: "Logo compact",
    },
    logoLight: {
      path: "/brand/logos/tai-chi-ai-coach-logo-light.svg",
      status: "missing",
      format: "svg",
      transparent: true,
      role: "Logo clair (fond sombre)",
    },
    logoDark: {
      path: "/brand/logos/tai-chi-ai-coach-logo-dark.svg",
      status: "missing",
      format: "svg",
      transparent: true,
      role: "Logo sombre (fond clair)",
    },
  },
  characters: {
    mei: {
      avatar: {
        path: "/characters/mei/mei-avatar-neutral.webp",
        status: "missing",
        format: "webp",
        width: 256,
        height: 256,
        transparent: true,
        role: "Avatar Mei (V2, non requis MVP)",
      },
      portrait: {
        path: "/characters/mei/mei-portrait-guide.webp",
        status: "missing",
        format: "webp",
        width: 512,
        height: 768,
        transparent: true,
        role: "Portrait Mei",
      },
      fullBody: {
        path: "/characters/mei/mei-full-body-guide.webp",
        status: "missing",
        format: "webp",
        width: 768,
        height: 1280,
        transparent: true,
        role: "Mei plein pied",
      },
      thumbnail: {
        path: "/characters/mei/mei-thumbnail.webp",
        status: "missing",
        format: "webp",
        width: 128,
        height: 128,
        transparent: true,
        role: "Miniature Mei",
      },
      presentation: {
        path: "/characters/mei/mei-presentation.webp",
        status: "missing",
        format: "webp",
        width: 1024,
        height: 576,
        role: "Présentation Mei",
      },
      placeholder: {
        path: "/characters/mei/mei-placeholder.svg",
        status: "missing",
        format: "svg",
        transparent: true,
        role: "Placeholder Mei",
      },
    },
  },
  placeholders: {
    brandMarkTemp: {
      path: "/placeholders/brand-mark-temp.svg",
      status: "placeholder",
      format: "svg",
      width: 128,
      height: 128,
      transparent: true,
      role: "Marque temporaire (tests / secours documentaire)",
    },
  },
  manifest: {
    path: "/manifest.webmanifest",
    status: "final" as AssetStatus,
    format: "webmanifest",
    role: "Manifeste PWA (fondation — sans Service Worker)",
  },
  /** Environnements MVP-008B — tous `missing` jusqu’à validation des fichiers. */
  backgrounds: backgroundAssets,
} as const satisfies {
  brand: Record<string, AssetRef>;
  characters: { mei: Record<string, AssetRef> };
  placeholders: Record<string, AssetRef>;
  manifest: AssetRef;
  backgrounds: typeof backgroundAssets;
};

export type AssetsCatalog = typeof assets;

export const BRAND_NAME = "Tai-Chi AI Coach";
export const BRAND_SHORT_NAME = "Tai-Chi";
export const BRAND_DESCRIPTION =
  "Compagnon d’apprentissage du Tai Chi — calme, accessible et progressif.";

/** Couleurs officielles 12A — Soft Jade / Rice Paper. */
export const BRAND_THEME = {
  themeColor: "#7A998D",
  backgroundColor: "#F7F6F1",
} as const;
