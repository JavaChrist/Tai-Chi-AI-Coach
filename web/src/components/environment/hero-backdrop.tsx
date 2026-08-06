"use client";

import { useTheme } from "@/components/theme/theme-provider";
import { isAssetReady } from "@/config/assets";
import { backgroundAssets } from "@/config/background-assets";
import { cn } from "@/lib/utils";

type HeroFamily = keyof typeof backgroundAssets.hero;

type HeroBackdropProps = {
  family: HeroFamily;
  className?: string;
};

const objectPositionClass: Record<HeroFamily, string> = {
  morning: "object-left",
  bamboo: "object-center",
  mist: "object-center",
  dojo: "object-[70%_center]",
  mountain: "object-right",
};

/**
 * Fond Hero d’environnement — intensité unique (référence Accueil).
 * Responsive via `<picture>` ; Masters jamais chargés ici.
 * Thème sombre : exports dark si `final`, sinon fallback Design System.
 */
export function HeroBackdrop({ family, className }: HeroBackdropProps) {
  const { theme } = useTheme();
  const set = backgroundAssets.hero[family];
  const variant = theme === "dark" ? set.dark : set.light;

  if (!isAssetReady(variant.desktop)) {
    return null;
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden motion-reduce:transition-none",
        className,
      )}
      aria-hidden
    >
      <picture className="absolute inset-0 block size-full opacity-[0.90]">
        <source
          media="(max-width: 767px)"
          srcSet={variant.mobile.path}
          width={variant.mobile.width}
          height={variant.mobile.height}
        />
        <source
          media="(max-width: 1023px)"
          srcSet={variant.tablet.path}
          width={variant.tablet.width}
          height={variant.tablet.height}
        />
        <img
          src={variant.desktop.path}
          alt=""
          width={variant.desktop.width}
          height={variant.desktop.height}
          className={cn(
            "size-full object-cover",
            objectPositionClass[family],
          )}
          decoding="async"
          fetchPriority="low"
        />
      </picture>
      <div
        className={cn(
          "absolute inset-0 bg-linear-to-b",
          theme === "dark"
            ? "from-background/80 via-background/55 to-background/40"
            : "from-background/45 via-background/18 to-background/8",
        )}
      />
    </div>
  );
}
