"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { AppHeader } from "@/components/layout/app-header";
import { BottomNav } from "@/components/layout/bottom-nav";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { OnboardingGate } from "@/components/onboarding/onboarding-gate";
import { AppUpdateGate } from "@/components/pwa/app-update-gate";
import { Toaster } from "@/components/ui/sonner";

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
          <AppUpdateGate />
          <Toaster position="top-center" richColors closeButton />
        </>
      ) : (
        <div className="text-foreground flex min-h-dvh flex-col bg-transparent">
          <SkipToContent />
          <AppHeader discreet={isPractice} />
          <main
            id="contenu-principal"
            tabIndex={-1}
            className="relative flex min-h-0 flex-1 flex-col outline-none"
          >
            {children}
          </main>
          {isPractice ? null : <BottomNav />}
          <AppUpdateGate />
          <Toaster position="top-center" richColors closeButton />
        </div>
      )}
    </OnboardingGate>
  );
}
