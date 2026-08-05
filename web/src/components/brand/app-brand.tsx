import Link from "next/link";

import { SafeImage } from "@/components/media/safe-image";
import {
  BRAND_NAME,
  assets,
  isAssetReady,
} from "@/config/assets";
import { cn } from "@/lib/utils";

type AppBrandVariant = "full" | "compact" | "wordmark";
type AppBrandSize = "sm" | "md" | "lg";

type AppBrandProps = {
  variant?: AppBrandVariant;
  size?: AppBrandSize;
  href?: string | null;
  className?: string;
  /**
   * Force l’affichage d’un logo (tests ou override local).
   * Par défaut : logo catalogue seulement s’il est ready.
   */
  logoSrc?: string;
  /** Force le fallback textuel même si un logo est prêt. */
  preferText?: boolean;
};

const sizeMap = {
  sm: { mark: 28, text: "text-sm", gap: "gap-2" },
  md: { mark: 32, text: "text-sm sm:text-base", gap: "gap-2" },
  lg: { mark: 40, text: "text-base sm:text-lg", gap: "gap-2.5" },
} as const;

function TextMark({ size }: { size: number }) {
  return (
    <span
      aria-hidden
      className="bg-primary/15 text-primary inline-flex items-center justify-center rounded-full font-semibold tracking-tight"
      style={{ width: size, height: size, fontSize: size * 0.32 }}
    >
      TC
    </span>
  );
}

/**
 * Marque réutilisable (Header, futur Dashboard, Auth, installation PWA).
 * Fallback textuel si les logos officiels sont absents.
 */
export function AppBrand({
  variant = "compact",
  size = "md",
  href = "/",
  className,
  logoSrc,
  preferText = false,
}: AppBrandProps) {
  const dims = sizeMap[size];
  const catalogLogo =
    variant === "full" ? assets.brand.logo : assets.brand.logoCompact;
  const resolvedSrc =
    logoSrc ?? (isAssetReady(catalogLogo) ? catalogLogo.path : null);
  const showLogo = Boolean(resolvedSrc) && !preferText;
  const showMark = variant !== "wordmark";
  const showWordmark = true;

  const content = (
    <>
      {showMark ? (
        showLogo && resolvedSrc ? (
          <SafeImage
            src={resolvedSrc}
            alt=""
            width={dims.mark}
            height={dims.mark}
            className="rounded-md"
            fallback={<TextMark size={dims.mark} />}
          />
        ) : (
          <TextMark size={dims.mark} />
        )
      ) : null}
      {showWordmark ? (
        <span className={cn("font-semibold tracking-tight", dims.text)}>
          {BRAND_NAME}
        </span>
      ) : null}
    </>
  );

  const classes = cn(
    "text-foreground inline-flex items-center rounded-md",
    dims.gap,
    "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={`${BRAND_NAME} — Accueil`}>
        {content}
      </Link>
    );
  }

  return (
    <span className={classes} role="img" aria-label={BRAND_NAME}>
      {content}
    </span>
  );
}
