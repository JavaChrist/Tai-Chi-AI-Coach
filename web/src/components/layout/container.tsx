import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = ComponentProps<"div"> & {
  size?: "sm" | "md" | "lg";
};

const sizeClass = {
  sm: "max-w-2xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
} as const;

/** Conteneur horizontal centré, largeur maîtrisée. */
export function Container({
  className,
  size = "md",
  ...props
}: ContainerProps) {
  return (
    <div
      data-slot="container"
      className={cn("mx-auto w-full px-4 sm:px-6", sizeClass[size], className)}
      {...props}
    />
  );
}
