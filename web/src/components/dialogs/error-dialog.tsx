"use client";

import { CircleHelp } from "lucide-react";

import {
  AppDialog,
  DialogActionButton,
} from "@/components/dialogs/app-dialog";

type ErrorDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
};

/** Dialog d’erreur — rassurer, une seule action. */
export function ErrorDialog({
  open,
  onOpenChange,
  title = "Un instant de pause",
  description,
  actionLabel = "Compris",
  onAction,
}: ErrorDialogProps) {
  const handleAction = () => {
    onAction?.();
    onOpenChange(false);
  };

  return (
    <AppDialog
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      description={description}
      icon={CircleHelp}
      iconClassName="bg-secondary text-muted-foreground"
      footer={
        <DialogActionButton
          label={actionLabel}
          variant="primary"
          onClick={handleAction}
          autoFocus
        />
      }
    />
  );
}
