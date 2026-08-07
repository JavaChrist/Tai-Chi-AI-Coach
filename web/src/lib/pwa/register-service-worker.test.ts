import { afterEach, describe, expect, it, vi } from "vitest";

import {
  canUseServiceWorker,
  registerServiceWorker,
  SERVICE_WORKER_URL,
} from "@/lib/pwa/register-service-worker";

describe("canUseServiceWorker / registerServiceWorker", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("refuse hors Secure Context", () => {
    vi.stubGlobal("window", {
      isSecureContext: false,
    });
    vi.stubGlobal("navigator", {
      serviceWorker: { register: vi.fn() },
    });

    expect(canUseServiceWorker()).toBe(false);
  });

  it("enregistre /sw.js en Secure Context", async () => {
    const registration = { scope: "/" };
    const register = vi.fn().mockResolvedValue(registration);

    vi.stubGlobal("window", {
      isSecureContext: true,
    });
    vi.stubGlobal("navigator", {
      serviceWorker: { register },
    });

    await expect(registerServiceWorker()).resolves.toBe(registration);
    expect(register).toHaveBeenCalledWith(SERVICE_WORKER_URL, { scope: "/" });
  });

  it("retourne null si register échoue", async () => {
    vi.stubGlobal("window", {
      isSecureContext: true,
    });
    vi.stubGlobal("navigator", {
      serviceWorker: {
        register: vi.fn().mockRejectedValue(new Error("fail")),
      },
    });

    await expect(registerServiceWorker()).resolves.toBeNull();
  });
});
