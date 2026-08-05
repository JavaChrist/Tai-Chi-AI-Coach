"use client";

import { HelpCircle } from "lucide-react";

import {
  AppDialog,
  DialogActionButton,
} from "@/components/dialogs/app-dialog";

type ConfirmationDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  destructive?: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
};

/** Dialog de confirmation — remplace window.confirm(). */
export function ConfirmationDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = "Confirmer",
  cancelLabel = "Annuler",
  destructive = false,
  onConfirm,
  onCancel,
}: ConfirmationDialogProps) {
  const handleCancel = () => {
    onCancel?.();
    onOpenChange(false);
  };

  const handleConfirm = () => {
    onConfirm();
    onOpenChange(false);
  };

  return (
    <AppDialog
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      description={description}
      icon={HelpCircle}
      iconClassName="bg-primary/10 text-primary"
      footer={
        <>
          <DialogActionButton
            label={cancelLabel}
            variant="outline"
            onClick={handleCancel}
          />
          <DialogActionButton
            label={confirmLabel}
            variant={destructive ? "destructive" : "primary"}
            onClick={handleConfirm}
            autoFocus
          />
        </>
      }
    />
  );
}
