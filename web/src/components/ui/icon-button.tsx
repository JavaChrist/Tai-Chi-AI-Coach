import type { ComponentProps, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type IconButtonProps = Omit<ComponentProps<typeof Button>, "size" | "children"> &
  VariantProps<typeof buttonVariants> & {
    /** Nom accessible obligatoire (pas uniquement une icône visuelle). */
    "aria-label": string;
    children: ReactNode;
    size?: "icon" | "icon-xs" | "icon-sm" | "icon-lg";
  };

/**
 * Bouton icône — exige un aria-label pour l’accessibilité.
 */
export function IconButton({
  className,
  size = "icon",
  variant = "ghost",
  children,
  ...props
}: IconButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(className)}
      {...props}
    >
      {children}
    </Button>
  );
}
