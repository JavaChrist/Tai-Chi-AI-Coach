"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type MovementReferenceImageProps = {
  src: string | null;
  alt: string;
  /** Variante visuelle — catalogue compact ou fiche. */
  size?: "card" | "detail";
  priority?: boolean;
  className?: string;
};

/**
 * Image F-007 ratio 3:5, object-contain, sans déformation.
 * Absence / erreur → état calme (pas de placeholder inventé).
 */
export function MovementReferenceImage({
  src,
  alt,
  size = "card",
  priority,
  className,
}: MovementReferenceImageProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <figure
      className={cn(
        "bg-muted/40 relative mx-auto overflow-hidden rounded-[var(--radius)]",
        "aspect-[3/5] w-full",
        size === "card" && "max-w-[11rem]",
        size === "detail" && "max-w-[18rem] sm:max-w-[20rem]",
        className,
      )}
      data-testid="movement-reference-image"
      data-has-media={showImage ? "true" : "false"}
    >
      {showImage && src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={
            size === "detail"
              ? "(max-width: 640px) 72vw, 320px"
              : "(max-width: 640px) 40vw, 176px"
          }
          priority={priority}
          className="object-contain object-center"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="text-muted-foreground flex size-full items-center justify-center px-4 text-center"
          data-testid="movement-reference-image-empty"
        >
          <p className="text-caption">Image de référence non disponible</p>
        </div>
      )}
    </figure>
  );
}
