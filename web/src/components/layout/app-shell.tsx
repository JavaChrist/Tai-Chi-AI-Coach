"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { AppHeader } from "@/components/layout/app-header";
import { BottomNav } from "@/components/layout/bottom-nav";
import { OnboardingGate } from "@/components/onboarding/onboarding-gate";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isOnboarding = pathname.startsWith("/onboarding");
  const isPractice = pathname.startsWith("/pratique");

  return (
    <OnboardingGate>
      {isOnboarding ? (
        <>
          {children}
          <Toaster position="top-center" richColors closeButton />
        </>
      ) : (
        <div
          className={cn(
            "text-foreground flex min-h-dvh flex-col",
            /* Pratique : fond uni. Autres écrans : Hero = fond de page (fallback Rice Paper body). */
            isPractice ? "bg-background" : "bg-transparent",
          )}
        >
          <AppHeader discreet={isPractice} />
          <main
            id="contenu-principal"
            className={cn(
              "relative flex-1",
              isPractice ? "pb-10" : "pb-24 md:pb-10",
            )}
          >
            {children}
          </main>
          {isPractice ? null : <BottomNav />}
          <Toaster position="top-center" richColors closeButton />
        </div>
      )}
    </OnboardingGate>
  );
}
