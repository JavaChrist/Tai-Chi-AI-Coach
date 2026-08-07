import { APP_BUILD_ID } from "@/lib/pwa/build-id";
import { buildServiceWorkerSource } from "@/lib/pwa/sw-source";

/** Bake l’identifiant de build dans l’artefact SW à la génération. */
export const dynamic = "force-static";

export function GET(): Response {
  const body = buildServiceWorkerSource(APP_BUILD_ID);

  return new Response(body, {
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Service-Worker-Allowed": "/",
    },
  });
}
