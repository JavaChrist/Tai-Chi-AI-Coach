"use client";

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export type AppDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  icon?: LucideIcon;
  iconClassName?: string;
  children?: ReactNode;
  footer?: ReactNode;
  className?: string;
};

/**
 * Base Dialog projet — silencieux, une décision (12A §9.12).
 * Jamais alert()/confirm() natifs.
 */
export function AppDialog({
  open,
  onOpenChange,
  title,
  description,
  icon: Icon,
  iconClassName,
  children,
  footer,
  className,
}: AppDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn("gap-6 p-8 sm:p-10", className)}>
        <DialogHeader className="gap-3">
          {Icon ? (
            <span
              className={cn(
                "mb-1 inline-flex size-10 items-center justify-center rounded-full",
                iconClassName ?? "bg-secondary text-muted-foreground",
              )}
            >
              <Icon className="size-5" strokeWidth={1.5} aria-hidden />
            </span>
          ) : null}
          <DialogTitle>{title}</DialogTitle>
          {description ? (
            <DialogDescription>{description}</DialogDescription>
          ) : null}
        </DialogHeader>
        {children}
        {footer ? (
          <DialogFooter className="border-0 pt-2">{footer}</DialogFooter>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

type DialogActionProps = {
  label: string;
  onClick?: () => void;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "destructive";
  autoFocus?: boolean;
};

export function DialogActionButton({
  label,
  onClick,
  variant = "default",
  autoFocus,
}: DialogActionProps) {
  return (
    <Button
      type="button"
      variant={variant}
      onClick={onClick}
      autoFocus={autoFocus}
    >
      {label}
    </Button>
  );
}
