"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useSyncExternalStore, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  getOnboardingGateSnapshot,
  subscribeOnboardingSnapshots,
  type OnboardingGateSnapshot,
} from "@/services/onboarding/onboarding-snapshot";

type OnboardingGateProps = {
  children: ReactNode;
};

const serverSnapshot: OnboardingGateSnapshot = {
  kind: "ready",
  needsOnboarding: false,
};

/**
 * Redirection locale non bloquante :
 * - onboarding non terminé → /onboarding
 * - erreur de stockage → accès app + message calme (pas de boucle)
 */
export function OnboardingGate({ children }: OnboardingGateProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isOnboardingRoute = pathname.startsWith("/onboarding");
  const isOfflineFallbackRoute = pathname.startsWith("/hors-ligne");
  const bypassOnboardingRedirect = isOnboardingRoute || isOfflineFallbackRoute;

  const gate = useSyncExternalStore(
    subscribeOnboardingSnapshots,
    getOnboardingGateSnapshot,
    () => serverSnapshot,
  );

  const needsRedirect =
    !bypassOnboardingRedirect &&
    gate.kind === "ready" &&
    gate.needsOnboarding;

  useEffect(() => {
    if (!needsRedirect) return;
    router.replace("/onboarding");
  }, [needsRedirect, router]);

  if (isOnboardingRoute) {
    return <>{children}</>;
  }

  if (needsRedirect) {
    return (
      <div
        className="text-muted-foreground flex min-h-dvh items-center justify-center px-4 text-sm"
        role="status"
      >
        Préparation de votre espace…
      </div>
    );
  }

  return (
    <>
      {gate.kind === "error" ? (
        <div
          role="status"
          className="border-border bg-muted/60 text-muted-foreground border-b px-4 py-3 text-center text-sm"
        >
          <p>
            {gate.message} L’application reste accessible. Vous pourrez
            reprendre l’accueil plus tard depuis Profil.
          </p>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="mt-1"
            onClick={() => router.push("/bibliotheque")}
          >
            Continuer
          </Button>
        </div>
      ) : null}
      {children}
    </>
  );
}
