"use client";

import { AlertCircle } from "lucide-react";

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

/** Dialog d’erreur — remplace window.alert() pour les erreurs. */
export function ErrorDialog({
  open,
  onOpenChange,
  title = "Une difficulté est survenue",
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
      icon={AlertCircle}
      iconClassName="bg-destructive/10 text-destructive"
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
