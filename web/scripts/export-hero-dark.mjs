/**
 * MVP-008B — Sprint Dark Exports
 * PNG Dark → Masters WebP (masters-dark/) → 15 exports responsive (dark/)
 * Uniquement crop / resize / WebP — aucune retouche artistique.
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../public/backgrounds/hero");
const PNG_DIR = path.join(ROOT, "dark");
const MASTER_DIR = path.join(ROOT, "masters-dark");
const OUT_DIR = path.join(ROOT, "dark");
const PREVIEW_DIR = path.join(
  process.env.TEMP || "/tmp",
  "taichi-hero-dark-previews",
);

fs.mkdirSync(MASTER_DIR, { recursive: true });
fs.mkdirSync(PREVIEW_DIR, { recursive: true });

const FAMILIES = ["morning", "bamboo", "mist", "dojo", "mountain"];

/** Fractions Light (réf. 1536×1024) — mêmes intentions de cadrage. */
const FOCUS = {
  morning: {
    tabletLeft: 64 / 1536,
    mobileLeft: 220 / 1536,
    desktopTopBias: 0.35,
  },
  bamboo: {
    tabletLeft: 96 / 1536,
    mobileLeft: 680 / 1536,
    desktopTopBias: 0.45,
  },
  mist: {
    tabletLeft: 128 / 1536,
    mobileLeft: 400 / 1536,
    desktopTopBias: 0.55,
  },
  dojo: {
    tabletLeft: 200 / 1536,
    mobileLeft: 600 / 1536,
    desktopTopBias: 0.4,
  },
  mountain: {
    tabletLeft: 180 / 1536,
    mobileLeft: 760 / 1536,
    desktopTopBias: 0.5,
  },
};

const SIZES = {
  desktop: { width: 1920, height: 1080, aspect: 16 / 9 },
  tablet: { width: 1280, height: 1024, aspect: 1280 / 1024 },
  mobile: { width: 1080, height: 1920, aspect: 1080 / 1920 },
};

const TARGET_KB = { desktop: 500, tablet: 400, mobile: 350 };

function familyKey(family) {
  return family.toUpperCase();
}

function clampCrop(c, mw, mh) {
  let { left, top, width, height } = c;
  left = Math.max(0, Math.min(left, mw - 1));
  top = Math.max(0, Math.min(top, mh - 1));
  width = Math.min(width, mw - left);
  height = Math.min(height, mh - top);
  return { left, top, width, height };
}

function cropFor(mw, mh, viewport, focus) {
  const aspect = SIZES[viewport].aspect;
  if (viewport === "desktop") {
    let width = mw;
    let height = Math.round(width / aspect);
    if (height > mh) {
      height = mh;
      width = Math.round(height * aspect);
    }
    const left = Math.round((mw - width) / 2);
    const slack = mh - height;
    const top = Math.round(slack * focus.desktopTopBias);
    return clampCrop({ left, top, width, height }, mw, mh);
  }

  let height = mh;
  let width = Math.round(height * aspect);
  if (width > mw) {
    width = mw;
    height = Math.round(width / aspect);
  }
  const slack = mw - width;
  const frac = viewport === "tablet" ? focus.tabletLeft : focus.mobileLeft;
  let left = Math.round(frac * mw);
  left = Math.max(0, Math.min(left, slack));
  const top = Math.round((mh - height) / 2);
  return clampCrop({ left, top, width, height }, mw, mh);
}

async function encodeWebp(pipeline, outPath, maxKb) {
  let quality = 88;
  let info;
  for (let i = 0; i < 8; i++) {
    info = await pipeline
      .clone()
      .webp({ quality, effort: 5, smartSubsample: true })
      .toFile(outPath);
    const kb = info.size / 1024;
    if (kb <= maxKb || quality <= 72) break;
    quality -= 3;
  }
  return { ...info, quality };
}

async function convertMasters() {
  const report = [];
  for (const family of FAMILIES) {
    const key = familyKey(family);
    const src = path.join(PNG_DIR, `MASTER_HERO_${key}_DARK.png`);
    const dest = path.join(MASTER_DIR, `MASTER_HERO_${key}_DARK.webp`);
    if (!fs.existsSync(src)) throw new Error(`Missing ${src}`);
    const meta = await sharp(src).metadata();
    const info = await sharp(src)
      .webp({ quality: 92, effort: 5, smartSubsample: true })
      .toFile(dest);
    report.push({
      family,
      src: path.basename(src),
      dest: path.basename(dest),
      dims: `${meta.width}x${meta.height}`,
      bytes: info.size,
      kb: Math.round(info.size / 1024),
    });
  }
  return report;
}

async function exportFamily(family) {
  const key = familyKey(family);
  const masterPath = path.join(MASTER_DIR, `MASTER_HERO_${key}_DARK.webp`);
  const meta = await sharp(masterPath).metadata();
  const mw = meta.width;
  const mh = meta.height;
  const focus = FOCUS[family];
  const rows = [];

  for (const viewport of ["desktop", "tablet", "mobile"]) {
    const crop = cropFor(mw, mh, viewport, focus);
    const size = SIZES[viewport];
    const outName = `hero-${family}-dark-${viewport}.webp`;
    const outPath = path.join(OUT_DIR, outName);
    const pipeline = sharp(masterPath)
      .extract(crop)
      .resize(size.width, size.height, { fit: "fill", kernel: "lanczos3" });
    const info = await encodeWebp(pipeline, outPath, TARGET_KB[viewport]);

    await sharp(outPath)
      .png()
      .toFile(path.join(PREVIEW_DIR, `${family}-${viewport}.png`));

    rows.push({
      outName,
      crop,
      size: `${size.width}x${size.height}`,
      kb: Math.round(info.size / 1024),
      quality: info.quality,
    });
  }

  return { family, master: `${mw}x${mh}`, rows };
}

const masters = await convertMasters();
console.log("=== MASTERS ===");
console.log(JSON.stringify(masters, null, 2));

const exports = [];
for (const family of FAMILIES) {
  exports.push(await exportFamily(family));
}
console.log("=== EXPORTS ===");
console.log(JSON.stringify(exports, null, 2));

for (const family of FAMILIES) {
  const png = path.join(PNG_DIR, `MASTER_HERO_${familyKey(family)}_DARK.png`);
  if (fs.existsSync(png)) fs.unlinkSync(png);
}
console.log("PNG sources removed from dark/");
console.log("previews:", PREVIEW_DIR);
