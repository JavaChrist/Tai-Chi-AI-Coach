/**
 * Listes du cache cœur MVP-017 (PO-A…D).
 * Injectées dans le Service Worker unique — pas de second SW.
 */

export const PRECACHE_MANIFEST_PATH = "/tcac-precache-manifest.json";

export const OFFLINE_FALLBACK_PATH = "/hors-ligne";

/** Routes documentaires OFFLINE REQUIRED (navigation + reload). */
export const CORE_ROUTE_PATHS = [
  "/",
  "/bibliotheque",
  "/bibliotheque/mouvements",
  "/bibliotheque/mouvements/posture-de-depart",
  "/bibliotheque/mouvements/transfert-poids-lateral",
  "/bibliotheque/mouvements/pas-avant-controle",
  "/bibliotheque/st-decouverte-premiere-courte",
  "/bibliotheque/st-initiation-rituel-base",
  "/bibliotheque/st-progression-liaison-legere",
  "/parcours/debutant",
  "/respiration",
  "/progression",
  "/profil",
  "/conseils-de-securite",
  "/decouverte",
  "/onboarding",
  "/pratique/st-decouverte-premiere-courte",
  "/pratique/st-initiation-rituel-base",
  "/pratique/st-progression-liaison-legere",
  OFFLINE_FALLBACK_PATH,
] as const;

/** PO-A : 5 familles × Mobile × Light/Dark = 10 Hero. */
export const CORE_HERO_MOBILE_PATHS = [
  "/backgrounds/hero/light/hero-morning-light-mobile.webp",
  "/backgrounds/hero/dark/hero-morning-dark-mobile.webp",
  "/backgrounds/hero/light/hero-bamboo-light-mobile.webp",
  "/backgrounds/hero/dark/hero-bamboo-dark-mobile.webp",
  "/backgrounds/hero/light/hero-mist-light-mobile.webp",
  "/backgrounds/hero/dark/hero-mist-dark-mobile.webp",
  "/backgrounds/hero/light/hero-dojo-light-mobile.webp",
  "/backgrounds/hero/dark/hero-dojo-dark-mobile.webp",
  "/backgrounds/hero/light/hero-mountain-light-mobile.webp",
  "/backgrounds/hero/dark/hero-mountain-dark-mobile.webp",
] as const;

/** 3 WebP mouvements F-007. */
export const CORE_MOVEMENT_IMAGE_PATHS = [
  "/curriculum/movements/movement-posture-de-depart-key.webp",
  "/curriculum/movements/movement-transfert-poids-lateral-key.webp",
  "/curriculum/movements/movement-pas-avant-controle-key.webp",
] as const;

/** Icônes + manifeste PWA. */
export const CORE_PWA_ASSET_PATHS = [
  "/manifest.webmanifest",
  "/brand/icons/tai-chi-ai-coach-icon-192.png",
  "/brand/icons/tai-chi-ai-coach-icon-512.png",
  "/brand/icons/tai-chi-ai-coach-maskable-192.png",
  "/brand/icons/tai-chi-ai-coach-maskable-512.png",
] as const;

/** Assets optionnels — échec non bloquant à l’install. */
export const OPTIONAL_ASSET_PATHS = [
  "/brand/icons/tai-chi-ai-coach-apple-touch-icon.png",
  "/brand/icons/tai-chi-ai-coach-favicon.ico",
  PRECACHE_MANIFEST_PATH,
] as const;

/** URLs publiques CORE REQUIRED (hors chunks `/_next/static` générés au build). */
export const CORE_PUBLIC_URLS: readonly string[] = [
  ...CORE_ROUTE_PATHS,
  ...CORE_HERO_MOBILE_PATHS,
  ...CORE_MOVEMENT_IMAGE_PATHS,
  ...CORE_PWA_ASSET_PATHS,
];

export const CACHE_BUDGET_TARGET_BYTES = 8 * 1024 * 1024;
export const CACHE_BUDGET_HARD_BYTES = 12 * 1024 * 1024;

export function precacheCacheName(buildId: string): string {
  return `tcac-precache-${buildId}`;
}

export function runtimeCacheName(buildId: string): string {
  return `tcac-runtime-${buildId}`;
}

export function isVideoPath(pathname: string): boolean {
  return /\.(mp4|webm|mov|m4v)(\?|$)/i.test(pathname);
}

export function isNextStaticPath(pathname: string): boolean {
  return pathname.startsWith("/_next/static/");
}

export function isHeroAssetPath(pathname: string): boolean {
  return pathname.startsWith("/backgrounds/hero/");
}

export function isMovementImagePath(pathname: string): boolean {
  return pathname.startsWith("/curriculum/movements/");
}

export function isManifestPath(pathname: string): boolean {
  return pathname === "/manifest.webmanifest";
}
