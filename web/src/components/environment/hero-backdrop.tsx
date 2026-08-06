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
 * Fond Hero — couvre entièrement le PageEnvironment parent (`absolute inset-0`).
 * La hauteur suit le contenu (pas une hauteur viewport fixe).
 */
export function HeroBackdrop({ family, className }: HeroBackdropProps) {
  const { theme } = useTheme();
  const set = backgroundAssets.hero[family];
  const variant = theme === "dark" ? set.dark : set.light;

  /* Fallback Design System uniquement si l’export thème n’est pas prêt. */
  if (
    !isAssetReady(variant.desktop) ||
    !isAssetReady(variant.tablet) ||
    !isAssetReady(variant.mobile)
  ) {
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
            ? "from-background/80 via-background/55 to-background/45"
            : "from-background/50 via-background/28 to-background/22",
        )}
      />
    </div>
  );
}
