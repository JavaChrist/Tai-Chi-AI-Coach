import type { ReactNode } from "react";

import { HeroBackdrop } from "@/components/environment/hero-backdrop";
import { backgroundAssets } from "@/config/background-assets";
import { cn } from "@/lib/utils";

type HeroFamily = keyof typeof backgroundAssets.hero;

type PageEnvironmentProps = {
  family: HeroFamily;
  children: ReactNode;
  className?: string;
};

/**
 * Fond de page Hero — le paysage remplit la page et accompagne le scroll.
 * Référence visuelle : Accueil (intensité unique).
 */
export function PageEnvironment({
  family,
  children,
  className,
}: PageEnvironmentProps) {
  return (
    <div
      className={cn(
        "relative isolate min-h-[calc(100dvh-5.5rem)] md:min-h-[calc(100dvh-4rem)]",
        className,
      )}
    >
      <HeroBackdrop family={family} />
      <div className="relative">{children}</div>
    </div>
  );
}
