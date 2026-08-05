import { AlertCircle } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ErrorStateProps = {
  title?: string;
  description: string;
  action?: ReactNode;
  className?: string;
};

/** État d’erreur rassurant avec suite possible. */
export function ErrorState({
  title = "Une difficulté est survenue",
  description,
  action,
  className,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className={cn(
        "flex flex-col items-center justify-center gap-3 px-4 py-6 text-center",
        className,
      )}
    >
      <span className="bg-destructive/10 text-destructive inline-flex size-12 items-center justify-center rounded-full">
        <AlertCircle className="size-6" aria-hidden />
      </span>
      <div className="space-y-1">
        <p className="font-heading text-base font-medium">{title}</p>
        <p className="text-muted-foreground max-w-sm text-sm">{description}</p>
      </div>
      {action ? <div className="mt-1">{action}</div> : null}
    </div>
  );
}
