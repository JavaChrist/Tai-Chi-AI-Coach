import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = ComponentProps<"div"> & {
  size?: "sm" | "md" | "lg";
};

/** Conteneur horizontal centré — Content Max / Reading Max (12A §5.8). */
export function Container({
  className,
  size = "md",
  ...props
}: ContainerProps) {
  return (
    <div
      data-slot="container"
      className={cn(
        "mx-auto w-full px-4 sm:px-6",
        size === "sm" && "max-w-reading",
        size === "md" && "max-w-content",
        size === "lg" && "max-w-content",
        className,
      )}
      {...props}
    />
  );
}
