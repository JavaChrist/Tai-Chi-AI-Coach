"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { AppHeader } from "@/components/layout/app-header";
import { BottomNav } from "@/components/layout/bottom-nav";
import { OnboardingGate } from "@/components/onboarding/onboarding-gate";
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
          <Toaster position="top-center" richColors closeButton />
        </>
      ) : (
        <div className="text-foreground flex min-h-dvh flex-col bg-transparent">
          <AppHeader discreet={isPractice} />
          <main
            id="contenu-principal"
            className="relative flex min-h-0 flex-1 flex-col"
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
