/**
 * next build puis génération du manifeste precache `/_next/static`.
 * Destiné à être lancé via with-app-build-id.mjs (Build ID partagé).
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    env: process.env,
    shell: true,
    cwd: path.resolve(__dirname, ".."),
  });
  if ((result.status ?? 1) !== 0) {
    process.exit(result.status ?? 1);
  }
}

run("npx", ["next", "build"]);
run("node", ["./scripts/generate-precache-manifest.mjs"]);
