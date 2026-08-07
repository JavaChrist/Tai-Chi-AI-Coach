"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { registerServiceWorker } from "@/lib/pwa/register-service-worker";
import {
  createSkipWaitingMessage,
  scheduleUniqueReload,
} from "@/lib/pwa/update-prompt";

const UPDATE_POLL_MS = 60_000;

/** Empêche les reloads multiples (module-level, survit aux re-renders). */
const reloadState = { scheduled: false };

function hasWaitingWorker(
  registration: ServiceWorkerRegistration | null | undefined,
): boolean {
  return Boolean(registration?.waiting);
}

function trackInstalling(
  registration: ServiceWorkerRegistration,
  onWaiting: () => void,
): void {
  const installing = registration.installing;
  if (!installing) return;

  installing.addEventListener("statechange", () => {
    if (installing.state === "installed" && registration.waiting) {
      onWaiting();
    }
  });
}

export type UseServiceWorkerUpdateResult = {
  /** Une nouvelle version SW est en état waiting. */
  updateAvailable: boolean;
  /** Déclenche SKIP_WAITING puis reload unique après controllerchange. */
  applyUpdate: () => void;
  /** Vérification manuelle (tests / diagnostic). */
  checkForUpdate: () => Promise<void>;
};

/**
 * Détection et application contrôlée des mises à jour Service Worker.
 * Aucun reload automatique sans action utilisateur.
 */
export function useServiceWorkerUpdate(): UseServiceWorkerUpdateResult {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const registrationRef = useRef<ServiceWorkerRegistration | null>(null);

  const markUpdateAvailable = useCallback(() => {
    setUpdateAvailable(true);
  }, []);

  const syncWaitingState = useCallback(
    (registration: ServiceWorkerRegistration | null) => {
      if (hasWaitingWorker(registration)) {
        markUpdateAvailable();
      }
    },
    [markUpdateAvailable],
  );

  const checkForUpdate = useCallback(async () => {
    const registration = registrationRef.current;
    if (!registration) return;

    try {
      await registration.update();
    } catch {
      // Réseau indisponible / SW inaccessible — silence calme.
    }

    syncWaitingState(registrationRef.current);
  }, [syncWaitingState]);

  const applyUpdate = useCallback(() => {
    const waiting = registrationRef.current?.waiting;
    if (!waiting) return;

    waiting.postMessage(createSkipWaitingMessage());
  }, []);

  useEffect(() => {
    let cancelled = false;
    let pollId: ReturnType<typeof setInterval> | undefined;

    const onControllerChange = () => {
      scheduleUniqueReload(() => {
        window.location.reload();
      }, reloadState);
    };

    const onFocus = () => {
      void checkForUpdate();
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        void checkForUpdate();
      }
    };

    async function setup() {
      const registration = await registerServiceWorker();
      if (cancelled || !registration) return;

      registrationRef.current = registration;
      syncWaitingState(registration);

      registration.addEventListener("updatefound", () => {
        trackInstalling(registration, markUpdateAvailable);
      });

      if (registration.installing) {
        trackInstalling(registration, markUpdateAvailable);
      }

      navigator.serviceWorker.addEventListener(
        "controllerchange",
        onControllerChange,
      );

      pollId = setInterval(() => {
        void checkForUpdate();
      }, UPDATE_POLL_MS);

      window.addEventListener("focus", onFocus);
      document.addEventListener("visibilitychange", onVisibilityChange);
    }

    void setup();

    return () => {
      cancelled = true;
      if (pollId !== undefined) clearInterval(pollId);
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      navigator.serviceWorker?.removeEventListener(
        "controllerchange",
        onControllerChange,
      );
    };
  }, [checkForUpdate, markUpdateAvailable, syncWaitingState]);

  return {
    updateAvailable,
    applyUpdate,
    checkForUpdate,
  };
}
