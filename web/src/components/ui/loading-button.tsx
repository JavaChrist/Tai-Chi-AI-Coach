"use client";

import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

import { Button, buttonVariants } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

type LoadingButtonProps = ComponentProps<typeof Button> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    loadingLabel?: string;
  };

/**
 * Bouton avec état de chargement accessible (aria-busy).
 */
export function LoadingButton({
  loading = false,
  loadingLabel = "Chargement",
  disabled,
  children,
  className,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      className={cn(className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <Spinner aria-label={loadingLabel} className="size-4" /> : null}
      <span className={cn(loading && "opacity-80")}>{children}</span>
    </Button>
  );
}
