"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type SafeImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  /** Contenu accessible affiché si l’image est absente ou invalide. */
  fallback: ReactNode;
  priority?: boolean;
};

/**
 * Image légère avec fallback — évite les sauts de layout et les cassures UI.
 */
export function SafeImage({
  src,
  alt,
  width,
  height,
  className,
  imgClassName,
  fallback,
  priority,
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <span
      className={cn("relative inline-flex shrink-0 overflow-hidden", className)}
      style={{ width, height }}
    >
      {failed ? (
        <span className="flex size-full items-center justify-center">{fallback}</span>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={cn("size-full object-contain", imgClassName)}
          onError={() => setFailed(true)}
          unoptimized={src.endsWith(".svg")}
        />
      )}
    </span>
  );
}
