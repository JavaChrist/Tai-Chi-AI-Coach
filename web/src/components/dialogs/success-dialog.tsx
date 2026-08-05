"use client";

import { CircleCheck } from "lucide-react";

import {
  AppDialog,
  DialogActionButton,
} from "@/components/dialogs/app-dialog";

type SuccessDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
};

/** Dialog de succès — confirmation discrète. */
export function SuccessDialog({
  open,
  onOpenChange,
  title = "C’est fait",
  description,
  actionLabel = "Continuer",
  onAction,
}: SuccessDialogProps) {
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
      icon={CircleCheck}
      iconClassName="bg-primary/10 text-primary"
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
