import { CircleCheck } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SuccessStateProps = {
  title?: string;
  description: string;
  action?: ReactNode;
  className?: string;
};

/** État de succès — confirmation discrète. */
export function SuccessState({
  title = "C’est fait",
  description,
  action,
  className,
}: SuccessStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex flex-col items-center justify-center gap-3 px-4 py-6 text-center",
        className,
      )}
    >
      <span className="bg-primary/10 text-primary inline-flex size-12 items-center justify-center rounded-full">
        <CircleCheck className="size-6" aria-hidden />
      </span>
      <div className="space-y-1">
        <p className="font-heading text-base font-medium">{title}</p>
        <p className="text-muted-foreground max-w-sm text-sm">{description}</p>
      </div>
      {action ? <div className="mt-1">{action}</div> : null}
    </div>
  );
}
