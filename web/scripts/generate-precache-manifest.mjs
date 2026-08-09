/**
 * Génère public/tcac-precache-manifest.json après `next build`.
 * Liste les URLs `/_next/static/*` à précacher (cœur offline).
 * Exclut toute vidéo. Versionné indirectement via APP_BUILD_ID du SW.
 */
import { mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, "..");
const staticRoot = path.join(webRoot, ".next", "static");
const outDir = path.join(webRoot, "public");
const outFile = path.join(outDir, "tcac-precache-manifest.json");

const VIDEO_RE = /\.(mp4|webm|mov|m4v)$/i;
const TARGET_BYTES = 8 * 1024 * 1024;
const HARD_BYTES = 12 * 1024 * 1024;

function walk(dir, baseUrl, acc) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(absolute, `${baseUrl}/${entry.name}`, acc);
      continue;
    }
    if (!entry.isFile()) continue;
    if (VIDEO_RE.test(entry.name)) continue;

    const url = `${baseUrl}/${entry.name}`.replace(/\\/g, "/");
    const size = statSync(absolute).size;
    acc.push({ url, size });
  }
}

const files = [];
walk(staticRoot, "/_next/static", files);

const urls = files.map((f) => f.url).sort();
const bytesEstimate = files.reduce((sum, f) => sum + f.size, 0);

const payload = {
  generatedAt: new Date().toISOString(),
  buildId: process.env.NEXT_PUBLIC_APP_BUILD_ID ?? null,
  urls,
  count: urls.length,
  bytesEstimate,
  withinTarget8Mo: bytesEstimate <= TARGET_BYTES,
  withinHard12Mo: bytesEstimate <= HARD_BYTES,
  note: "Chunks Next uniquement — assets public/injectés via CORE_PUBLIC_URLS dans le SW.",
};

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

const mo = (bytesEstimate / (1024 * 1024)).toFixed(2);
console.log(
  `[precache-manifest] ${urls.length} URLs /_next/static — ~${mo} Mo (cible chunks+public ≤ 8 Mo global)`,
);

if (bytesEstimate > HARD_BYTES) {
  console.error(
    `[precache-manifest] ERREUR: chunks seuls (${mo} Mo) dépassent le plafond dur 12 Mo.`,
  );
  process.exit(1);
}
