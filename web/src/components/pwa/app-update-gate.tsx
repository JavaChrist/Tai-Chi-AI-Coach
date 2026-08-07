"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { AppUpdateModal } from "@/components/pwa/app-update-modal";
import { useServiceWorkerUpdate } from "@/hooks/use-service-worker-update";
import { getMessages } from "@/i18n";
import { shouldPromptAppUpdate } from "@/lib/pwa/update-prompt";

const REPROMPT_POLL_MS = 60_000;

/**
 * Branche globale update PWA.
 * Détection continue pendant `/pratique/*` ; modale différée hors séance (D-178).
 * Fermeture Escape/X : update reste disponible et peut être reproposée.
 */
export function AppUpdateGate() {
  const pathname = usePathname();
  const { updateAvailable, applyUpdate } = useServiceWorkerUpdate();
  const [dismissed, setDismissed] = useState(false);
  const [snapshot, setSnapshot] = useState({
    updateAvailable,
    isPractice: pathname.startsWith("/pratique"),
  });
  const messages = getMessages("fr");
  const t = messages.appUpdate;

  const isPractice = pathname.startsWith("/pratique");

  // Ajustement d’état dérivé des props (pattern React — pas d’effect setState).
  if (
    updateAvailable !== snapshot.updateAvailable ||
    isPractice !== snapshot.isPractice
  ) {
    setSnapshot({ updateAvailable, isPractice });

    if (!updateAvailable) {
      setDismissed(false);
    } else if (snapshot.isPractice && !isPractice) {
      // Sortie de séance → reproposer.
      setDismissed(false);
    }
  }

  const open = shouldPromptAppUpdate({
    updateAvailable,
    isPractice,
    dismissed,
  });

  useEffect(() => {
    if (!updateAvailable) return;

    const reprompt = () => {
      if (pathname.startsWith("/pratique")) return;
      setDismissed(false);
    };

    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        reprompt();
      }
    };

    window.addEventListener("focus", reprompt);
    document.addEventListener("visibilitychange", onVisibility);
    const pollId = setInterval(reprompt, REPROMPT_POLL_MS);

    return () => {
      window.removeEventListener("focus", reprompt);
      document.removeEventListener("visibilitychange", onVisibility);
      clearInterval(pollId);
    };
  }, [updateAvailable, pathname]);

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      setDismissed(true);
    }
  };

  return (
    <AppUpdateModal
      open={open}
      onOpenChange={handleOpenChange}
      onUpdate={applyUpdate}
      title={t.title}
      description={t.description}
      updateLabel={t.updateLabel}
    />
  );
}
