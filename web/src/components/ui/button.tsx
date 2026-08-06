import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group/button inline-flex shrink-0 items-center justify-center border border-transparent",
    "bg-clip-padding text-body font-medium whitespace-nowrap outline-none select-none",
    "rounded-[var(--radius)] ease-calm duration-normal transition-[color,background-color,border-color,opacity]",
    "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "border-border bg-surface text-foreground hover:bg-secondary",
        /* Bordure + fond opaque : lisible sur les Hero (évite de se fondre dans la brume). */
        secondary:
          "border-border bg-secondary text-secondary-foreground hover:bg-secondary/90",
        /* Même famille que `.surface-card` — transparent au repos, plus opaque au hover. */
        surface: "surface-card text-foreground",
        ghost: "hover:bg-secondary hover:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/15 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 min-h-11 gap-2 px-5",
        xs: "h-11 min-h-11 gap-1.5 px-3 text-small",
        sm: "h-11 min-h-11 gap-2 px-4 text-small",
        lg: "h-12 min-h-12 gap-2 px-6",
        icon: "size-11",
        "icon-xs": "size-11",
        "icon-sm": "size-11",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
