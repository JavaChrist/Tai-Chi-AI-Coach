import { AppBrand } from "@/components/brand/app-brand";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";

type AppHeaderProps = {
  /** Pendant la pratique : encore plus discret (12A §47 / §41). */
  discreet?: boolean;
};

export function AppHeader({ discreet = false }: AppHeaderProps) {
  return (
    <header
      className={cn(
        /* z-dropdown : au-dessus du contenu Hero (TD-001) ; fond opaque. */
        "bg-background sticky top-0 z-dropdown",
        discreet ? "border-transparent" : "border-border border-b",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-content items-center justify-between gap-4 px-4 sm:px-6",
          discreet ? "h-12" : "h-14",
        )}
      >
        <AppBrand variant="compact" size={discreet ? "sm" : "md"} />

        {discreet ? null : <DesktopNav />}

        <div className="flex items-center">
          {discreet ? null : <ThemeToggle />}
        </div>
      </div>
    </header>
  );
}
