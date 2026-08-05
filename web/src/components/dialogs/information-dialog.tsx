"use client";

import {
  AppDialog,
  DialogActionButton,
} from "@/components/dialogs/app-dialog";

type InformationDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
};

/** Dialog d’information — silencieux, peu de texte. */
export function InformationDialog({
  open,
  onOpenChange,
  title,
  description,
  actionLabel = "Compris",
  onAction,
}: InformationDialogProps) {
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
