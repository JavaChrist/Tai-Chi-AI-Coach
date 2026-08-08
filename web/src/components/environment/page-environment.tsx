import type { ReactNode } from "react";

import { HeroBackdrop } from "@/components/environment/hero-backdrop";
import { backgroundAssets } from "@/config/background-assets";
import { cn } from "@/lib/utils";

type HeroFamily = keyof typeof backgroundAssets.hero;

type PageEnvironmentProps = {
  family: HeroFamily;
  children: ReactNode;
  className?: string;
  /**
   * Réserve l’espace de la bottom nav dans le fond Hero
   * (évite une bande uni sous le paysage). Défaut : true.
   */
  withBottomNavInset?: boolean;
};

/**
 * Fond de page Hero — le paysage couvre toute la hauteur du contenu
 * (y compris le padding bas), pas seulement le viewport.
 */
export function PageEnvironment({
  family,
  children,
  className,
  withBottomNavInset = true,
}: PageEnvironmentProps) {
  return (
    <div
      className={cn(
        /* flex-1 + min-h-full : remplit <main> ; grandit avec le contenu */
        "relative isolate min-h-full flex-1",
        withBottomNavInset && "pb-24 md:pb-10",
        className,
      )}
    >
      <HeroBackdrop family={family} />
      {/* relative (sans z concurrent au shell) + text-on-hero : lisibilité. */}
      <div className="text-on-hero-scope relative">{children}</div>
    </div>
  );
}
