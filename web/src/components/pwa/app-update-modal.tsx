"use client";

import {
  AppDialog,
  DialogActionButton,
} from "@/components/dialogs/app-dialog";

export type AppUpdateModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdate: () => void;
  title: string;
  description: string;
  updateLabel: string;
};

/**
 * Modale de mise à jour PWA — UI pure, aucune logique Service Worker.
 * Accessibilité via AppDialog / Radix (dialog, aria-modal, focus trap, Escape).
 */
export function AppUpdateModal({
  open,
  onOpenChange,
  onUpdate,
  title,
  description,
  updateLabel,
}: AppUpdateModalProps) {
  return (
    <AppDialog
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      description={description}
      footer={
        <DialogActionButton
          label={updateLabel}
          variant="primary"
          onClick={onUpdate}
          autoFocus
        />
      }
    />
  );
}
