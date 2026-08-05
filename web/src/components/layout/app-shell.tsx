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

  return (
    <OnboardingGate>
      {isOnboarding ? (
        <>
          {children}
          <Toaster position="top-center" richColors closeButton />
        </>
      ) : (
        <div className="bg-background text-foreground flex min-h-dvh flex-col">
          <AppHeader />
          <main id="contenu-principal" className="flex-1 pb-24 md:pb-10">
            {children}
          </main>
          <BottomNav />
          <Toaster position="top-center" richColors closeButton />
        </div>
      )}
    </OnboardingGate>
  );
}
