/**
 * Fixe NEXT_PUBLIC_APP_BUILD_ID une seule fois pour tout le process Next
 * (évite BUILD_ID ≠ /sw.js ≠ client lorsque next.config est rechargé).
 */
import { execSync, spawnSync } from "node:child_process";

function resolveGitSha() {
  try {
    return execSync("git rev-parse --short HEAD", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return "local";
  }
}

if (!process.env.NEXT_PUBLIC_APP_BUILD_ID) {
  process.env.NEXT_PUBLIC_APP_BUILD_ID = `${resolveGitSha()}-${Date.now()}`;
}

const [command, ...args] = process.argv.slice(2);
if (!command) {
  console.error("Usage: node scripts/with-app-build-id.mjs <command> [...args]");
  process.exit(1);
}

const result = spawnSync(command, args, {
  stdio: "inherit",
  env: process.env,
  shell: true,
});

process.exit(result.status ?? 1);
