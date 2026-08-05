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
        <div className="bg-background text-foreground flex min-h-dvh flex-col">
          <AppHeader discreet={isPractice} />
          <main
            id="contenu-principal"
            className={cn(
              "flex-1",
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
