"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { isNavItemActive, mainNavItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigation mobile"
      className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/80 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur md:hidden"
    >
      <ul className="mx-auto flex max-w-lg items-stretch justify-between px-1 pb-[env(safe-area-inset-bottom)]">
        {mainNavItems.map((item) => {
          const active = isNavItemActive(pathname, item.href);
          const Icon = item.icon;

          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                className={cn(
                  "relative flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[0.65rem] font-medium transition-colors",
                  "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
                  active ? "text-primary" : "text-muted-foreground",
                )}
                aria-current={active ? "page" : undefined}
                data-active={active || undefined}
              >
                {active ? (
                  <span
                    className="bg-primary absolute top-0 h-0.5 w-8 rounded-full"
                    aria-hidden
                  />
                ) : null}
                <Icon
                  className={cn("size-5", active && "stroke-[2.25]")}
                  aria-hidden
                />
                <span className="truncate">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
