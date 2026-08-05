"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { isNavItemActive, mainNavItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/** Même personnalité que la Bottom Nav — Soft Jade actif, Zen Stone sinon. */
export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigation principale"
      className="hidden items-center gap-2 md:flex"
    >
      {mainNavItems.map((item) => {
        const active = isNavItemActive(pathname, item.href);
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "inline-flex h-11 min-h-11 items-center gap-2 rounded-[var(--radius)] px-4 text-small font-medium",
              "ease-calm duration-fast transition-colors",
              "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
              active
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground",
            )}
            aria-current={active ? "page" : undefined}
            data-active={active || undefined}
          >
            <Icon className="size-4" strokeWidth={1.75} aria-hidden />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
