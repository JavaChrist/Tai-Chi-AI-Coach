import { CircleHelp } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ErrorStateProps = {
  title?: string;
  description: string;
  action?: ReactNode;
  className?: string;
};

/** État d’erreur — rassurer, expliquer, proposer (12A §7.11). Jamais faire peur. */
export function ErrorState({
  title = "Un instant de pause",
  description,
  action,
  className,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className={cn(
        "flex flex-col items-center justify-center gap-5 px-6 py-14 text-center",
        className,
      )}
    >
      <span className="bg-secondary text-muted-foreground inline-flex size-14 items-center justify-center rounded-full">
        <CircleHelp className="size-6" strokeWidth={1.5} aria-hidden />
      </span>
      <div className="space-y-3">
        <p className="text-h3 text-foreground">{title}</p>
        <p className="text-small text-muted-foreground mx-auto max-w-sm leading-relaxed">
          {description}
        </p>
      </div>
      {action ? <div className="pt-2">{action}</div> : null}
    </div>
  );
}
