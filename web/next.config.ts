import { execSync } from "node:child_process";

import type { NextConfig } from "next";

function resolveGitSha(): string | null {
  try {
    return execSync("git rev-parse --short HEAD", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return null;
  }
}

/**
 * Un seul Build ID par process.
 * Préférer la valeur déjà fixée (scripts/with-app-build-id.mjs / CI).
 * Sinon générer une fois via globalThis + process.env (dev / next direct).
 */
function resolveAppBuildId(): string {
  if (process.env.NEXT_PUBLIC_APP_BUILD_ID) {
    return process.env.NEXT_PUBLIC_APP_BUILD_ID;
  }

  const globalKey = "__TAI_CHI_APP_BUILD_ID__" as const;
  const globalStore = globalThis as typeof globalThis & {
    [globalKey]?: string;
  };

  if (globalStore[globalKey]) {
    process.env.NEXT_PUBLIC_APP_BUILD_ID = globalStore[globalKey];
    return globalStore[globalKey];
  }

  const id = `${resolveGitSha() ?? "local"}-${Date.now()}`;
  globalStore[globalKey] = id;
  process.env.NEXT_PUBLIC_APP_BUILD_ID = id;
  return id;
}

/** Figé une fois — pas d’incrément manuel v1/v2. */
const appBuildId = resolveAppBuildId();

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_APP_BUILD_ID: appBuildId,
  },
  generateBuildId: async () => appBuildId,
};

export default nextConfig;
