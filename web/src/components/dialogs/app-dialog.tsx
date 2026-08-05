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
 * Base Dialog projet — jamais alert()/confirm() natifs.
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
      <DialogContent className={cn(className)}>
        <DialogHeader>
          {Icon ? (
            <span
              className={cn(
                "mb-2 inline-flex size-10 items-center justify-center rounded-full",
                iconClassName ?? "bg-muted text-muted-foreground",
              )}
            >
              <Icon className="size-5" aria-hidden />
            </span>
          ) : null}
          <DialogTitle>{title}</DialogTitle>
          {description ? (
            <DialogDescription>{description}</DialogDescription>
          ) : null}
        </DialogHeader>
        {children}
        {footer ? <DialogFooter>{footer}</DialogFooter> : null}
      </DialogContent>
    </Dialog>
  );
}

type DialogActionProps = {
  label: string;
  onClick?: () => void;
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost" | "destructive";
  autoFocus?: boolean;
};

export function DialogActionButton({
  label,
  onClick,
  variant = "default",
  autoFocus,
}: DialogActionProps) {
  return (
    <Button type="button" variant={variant} onClick={onClick} autoFocus={autoFocus}>
      {label}
    </Button>
  );
}
