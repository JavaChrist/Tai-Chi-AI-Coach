"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { isNavItemActive, mainNavItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/** Soft Jade actif · Zen Stone sinon (12A §48). */
export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigation mobile"
      className="border-border bg-background fixed inset-x-0 bottom-0 z-sticky border-t md:hidden"
    >
      <ul className="mx-auto flex max-w-lg items-stretch justify-between gap-1 px-2 pb-[env(safe-area-inset-bottom)] pt-1">
        {mainNavItems.map((item) => {
          const active = isNavItemActive(pathname, item.href);
          const Icon = item.icon;

          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                className={cn(
                  "relative flex min-h-14 flex-col items-center justify-center gap-1.5 px-1 py-2.5 text-caption font-medium",
                  "ease-calm duration-fast transition-colors",
                  "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
                  active ? "text-primary" : "text-muted-foreground",
                )}
                aria-current={active ? "page" : undefined}
                data-active={active || undefined}
              >
                <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                <span className="truncate">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
