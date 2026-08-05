import Link from "next/link";

import { SafeImage } from "@/components/media/safe-image";
import { BRAND_NAME, assets, isAssetReady } from "@/config/assets";
import { cn } from "@/lib/utils";

type AppBrandVariant = "full" | "compact" | "wordmark";
type AppBrandSize = "sm" | "md" | "lg";

type AppBrandProps = {
  variant?: AppBrandVariant;
  size?: AppBrandSize;
  href?: string | null;
  className?: string;
  logoSrc?: string;
  preferText?: boolean;
};

const sizeMap = {
  sm: { mark: 28, text: "text-small", gap: "gap-2" },
  md: { mark: 32, text: "text-body", gap: "gap-2" },
  lg: { mark: 40, text: "text-h3", gap: "gap-2.5" },
} as const;

function TextMark({ size }: { size: number }) {
  return (
    <span
      aria-hidden
      className="bg-primary/15 text-primary font-heading inline-flex items-center justify-center rounded-[var(--radius)] font-semibold tracking-tight"
      style={{ width: size, height: size, fontSize: size * 0.32 }}
    >
      TC
    </span>
  );
}

/**
 * Marque officielle — logos via assets.ts, fallback textuel si absents.
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
            className="rounded-[var(--radius)]"
            fallback={<TextMark size={dims.mark} />}
          />
        ) : (
          <TextMark size={dims.mark} />
        )
      ) : null}
      {showWordmark ? (
        <span
          className={cn(
            "font-heading text-foreground font-semibold tracking-tight",
            dims.text,
          )}
        >
          {BRAND_NAME}
        </span>
      ) : null}
    </>
  );

  const classes = cn(
    "inline-flex min-h-11 items-center rounded-[var(--radius)]",
    dims.gap,
    "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={`${BRAND_NAME} — Accueil`}
      >
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
