"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { isNavItemActive, mainNavItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Navigation principale" className="hidden items-center gap-1 md:flex">
      {mainNavItems.map((item) => {
        const active = isNavItemActive(pathname, item.href);
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
              active
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
            aria-current={active ? "page" : undefined}
            data-active={active || undefined}
          >
            <Icon className="size-4" aria-hidden />
            {item.label}
            {active ? (
              <span
                className="bg-primary absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full"
                aria-hidden
              />
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}
