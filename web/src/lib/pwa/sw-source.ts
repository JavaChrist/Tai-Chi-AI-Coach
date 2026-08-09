import {
  CORE_PUBLIC_URLS,
  OFFLINE_FALLBACK_PATH,
  OPTIONAL_ASSET_PATHS,
  PRECACHE_MANIFEST_PATH,
  precacheCacheName,
  runtimeCacheName,
} from "@/lib/pwa/precache-core";

/**
 * Corps du Service Worker unique (App Update + cache cœur MVP-017).
 * Étension du socle `docs/26` — pas de second SW, pas de skipWaiting auto.
 */
export function buildServiceWorkerSource(buildId: string): string {
  const safeId = JSON.stringify(buildId);
  const coreUrls = JSON.stringify([...CORE_PUBLIC_URLS]);
  const optionalUrls = JSON.stringify([...OPTIONAL_ASSET_PATHS]);
  const offlinePath = JSON.stringify(OFFLINE_FALLBACK_PATH);
  const manifestPath = JSON.stringify(PRECACHE_MANIFEST_PATH);
  const precacheName = JSON.stringify(precacheCacheName(buildId));
  const runtimeName = JSON.stringify(runtimeCacheName(buildId));

  return `/* Tai-Chi AI Coach — Service Worker (App Update + Offline cœur)
 * APP_BUILD_ID: ${buildId}
 * Caches: tcac-precache-\${APP_BUILD_ID} / tcac-runtime-\${APP_BUILD_ID}
 */
const APP_BUILD_ID = ${safeId};
const PRECACHE = ${precacheName};
const RUNTIME = ${runtimeName};
const OFFLINE_URL = ${offlinePath};
const MANIFEST_URL = ${manifestPath};
const CORE_URLS = ${coreUrls};
const OPTIONAL_URLS = ${optionalUrls};

function isVideoPath(pathname) {
  return /\\.(mp4|webm|mov|m4v)(\\?|$)/i.test(pathname);
}

function isNextStaticPath(pathname) {
  return pathname.startsWith("/_next/static/");
}

function isSameOrigin(url) {
  return url.origin === self.location.origin;
}

async function putRequest(cache, request, response) {
  if (!response || !response.ok) return;
  try {
    await cache.put(request, response.clone());
  } catch (error) {
    // Quota / Cache Storage indisponible — online doit rester utilisable.
  }
}

async function fetchAndCache(cacheName, request, requestInit) {
  const cache = await caches.open(cacheName);
  const response = await fetch(request, requestInit);
  if (response && response.ok) {
    await putRequest(cache, request, response);
  }
  return response;
}

async function cacheFirst(cacheName, request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    return await fetchAndCache(cacheName, request);
  } catch (error) {
    return caches.match(request);
  }
}

async function staleWhileRevalidate(cacheName, request) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const networkPromise = fetch(request)
    .then(async (response) => {
      if (response && response.ok) {
        await putRequest(cache, request, response);
      }
      return response;
    })
    .catch(() => undefined);
  return cached || (await networkPromise) || Response.error();
}

async function networkFirstNavigate(request) {
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      const cache = await caches.open(PRECACHE);
      await putRequest(cache, request, response);
      return response;
    }
  } catch (error) {
    // offline
  }

  const cached = await caches.match(request);
  if (cached) return cached;

  const byUrl = await caches.match(new URL(request.url).pathname);
  if (byUrl) return byUrl;

  const offline = await caches.match(OFFLINE_URL);
  if (offline) return offline;

  return new Response("Hors ligne", {
    status: 503,
    statusText: "Offline",
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

async function networkFirstWithCache(request) {
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      const cache = await caches.open(RUNTIME);
      await putRequest(cache, request, response);
      return response;
    }
  } catch (error) {
    // offline
  }
  const cached = await caches.match(request);
  if (cached) return cached;
  return Response.error();
}

async function precacheUrl(cache, url) {
  const response = await fetch(url, { cache: "reload" });
  if (!response.ok) {
    throw new Error("HTTP " + response.status + " for " + url);
  }
  await cache.put(url, response.clone());
}

async function loadDynamicCoreUrls() {
  const urls = [];
  try {
    const response = await fetch(MANIFEST_URL, { cache: "no-store" });
    if (!response.ok) return urls;
    const data = await response.json();
    if (!data || !Array.isArray(data.urls)) return urls;
    for (const entry of data.urls) {
      if (typeof entry !== "string") continue;
      if (isVideoPath(entry)) continue;
      urls.push(entry);
    }
  } catch (error) {
    // Manifeste absent (dev) — cœur public seul.
  }
  return urls;
}

async function installPrecache() {
  const cache = await caches.open(PRECACHE);
  const dynamicUrls = await loadDynamicCoreUrls();
  const required = Array.from(new Set(CORE_URLS.concat(dynamicUrls)));
  const failed = [];

  for (const url of required) {
    if (isVideoPath(url)) continue;
    try {
      await precacheUrl(cache, url);
    } catch (error) {
      failed.push(url);
    }
  }

  if (failed.length > 0) {
    throw new Error(
      "Core precache failed (" +
        failed.length +
        "): " +
        failed.slice(0, 8).join(", "),
    );
  }

  for (const url of OPTIONAL_URLS) {
    try {
      await precacheUrl(cache, url);
    } catch (error) {
      // optionnel
    }
  }
}

async function activateAndPurge() {
  const keys = await caches.keys();
  await Promise.all(
    keys.map((key) => {
      if (!key.startsWith("tcac-")) return Promise.resolve(false);
      if (key === PRECACHE || key === RUNTIME) return Promise.resolve(false);
      return caches.delete(key);
    }),
  );
  await self.clients.claim();
}

self.addEventListener("install", (event) => {
  // Pas de skipWaiting ici — activation contrôlée (App Update).
  event.waitUntil(installPrecache());
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("activate", (event) => {
  event.waitUntil(activateAndPurge());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (!isSameOrigin(url)) return;

  const pathname = url.pathname;

  // /sw.js — Network Only (byte-diff update).
  if (pathname === "/sw.js") {
    event.respondWith(fetch(request));
    return;
  }

  // Vidéos — Network Only (PO-D).
  if (isVideoPath(pathname) || pathname.startsWith("/video/")) {
    event.respondWith(fetch(request));
    return;
  }

  // Chunks hashés — Cache First.
  if (isNextStaticPath(pathname)) {
    event.respondWith(cacheFirst(RUNTIME, request));
    return;
  }

  // Manifest — Stale While Revalidate.
  if (pathname === "/manifest.webmanifest") {
    event.respondWith(staleWhileRevalidate(RUNTIME, request));
    return;
  }

  // Images — Cache First (lecture multi-caches ; miss → runtime).
  // Hero Mobile / mouvements / icônes sont déjà en precache à l’install.
  if (
    pathname.startsWith("/backgrounds/hero/") ||
    pathname.startsWith("/curriculum/movements/") ||
    pathname.startsWith("/brand/icons/")
  ) {
    event.respondWith(cacheFirst(RUNTIME, request));
    return;
  }

  // Navigations document — Network First → cache → /hors-ligne.
  if (request.mode === "navigate") {
    event.respondWith(networkFirstNavigate(request));
    return;
  }

  // RSC / same-origin data — Network First + cache runtime.
  if (request.headers.get("RSC") === "1" || request.headers.get("Next-Router-Prefetch")) {
    event.respondWith(networkFirstWithCache(request));
    return;
  }

  // Autres GET same-origin — Network First soft.
  if (pathname.startsWith("/_next/")) {
    event.respondWith(networkFirstWithCache(request));
  }
});
`;
}
