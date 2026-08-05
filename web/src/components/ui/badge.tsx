import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden",
    "rounded-full border border-transparent px-2.5 py-0.5 text-caption font-medium whitespace-nowrap",
    "ease-calm duration-fast transition-colors",
    "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/40",
    "[&>svg]:pointer-events-none [&>svg]:size-3!",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-primary/15 text-secondary-foreground",
        secondary: "bg-secondary text-muted-foreground",
        destructive: "bg-destructive/10 text-destructive",
        outline: "border-border text-muted-foreground",
        ghost: "text-muted-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  },
);

function Badge({
  className,
  variant = "secondary",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
