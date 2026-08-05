import type { ReactNode } from "react";

import { AppHeader } from "@/components/layout/app-header";
import { BottomNav } from "@/components/layout/bottom-nav";
import { Toaster } from "@/components/ui/sonner";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="bg-background text-foreground flex min-h-dvh flex-col">
      <AppHeader />
      <main id="contenu-principal" className="flex-1 pb-24 md:pb-10">
        {children}
      </main>
      <BottomNav />
      <Toaster position="top-center" richColors closeButton />
    </div>
  );
}
