"use client";

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

/** Dialog de confirmation — une décision, peu de texte. */
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
      footer={
        <>
          <DialogActionButton
            label={cancelLabel}
            variant="ghost"
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
