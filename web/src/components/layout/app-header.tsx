import { Leaf } from "lucide-react";
import Link from "next/link";

import { DesktopNav } from "@/components/layout/desktop-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function AppHeader() {
  return (
    <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="text-foreground focus-visible:ring-ring inline-flex items-center gap-2 rounded-md font-semibold tracking-tight focus-visible:ring-2 focus-visible:outline-none"
        >
          <span className="bg-primary/15 text-primary inline-flex size-8 items-center justify-center rounded-full">
            <Leaf className="size-4" aria-hidden />
          </span>
          <span className="text-sm sm:text-base">Tai-Chi AI Coach</span>
        </Link>

        <DesktopNav />

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
