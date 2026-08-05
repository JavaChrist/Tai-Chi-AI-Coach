import { AppBrand } from "@/components/brand/app-brand";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function AppHeader() {
  return (
    <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <AppBrand variant="compact" size="md" />

        <DesktopNav />

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
