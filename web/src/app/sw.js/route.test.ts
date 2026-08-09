import { describe, expect, it } from "vitest";

import { GET } from "@/app/sw.js/route";
import { APP_BUILD_ID } from "@/lib/pwa/build-id";

describe("GET /sw.js", () => {
  it("sert un Service Worker JS contenant le build id", async () => {
    const response = GET();
    const body = await response.text();

    expect(response.headers.get("Content-Type")).toContain(
      "application/javascript",
    );
    expect(response.headers.get("Service-Worker-Allowed")).toBe("/");
    expect(response.headers.get("Cache-Control")).toContain("no-cache");
    expect(body).toContain(`const APP_BUILD_ID = ${JSON.stringify(APP_BUILD_ID)}`);
    expect(body).toContain("SKIP_WAITING");
    expect(body).toContain("clients.claim()");
    expect(body).toContain("tcac-precache-");
    expect(body).toContain("installPrecache");
    expect(body).toContain("/hors-ligne");
    expect(body).not.toMatch(/\.mp4"/);
  });
});
