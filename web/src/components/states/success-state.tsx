import { Leaf } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SuccessStateProps = {
  title?: string;
  description: string;
  action?: ReactNode;
  className?: string;
};

/** Succès discret — reconnaissance, pas récompense (12A §9.9). */
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
        "flex flex-col items-center justify-center gap-5 px-6 py-10 text-center",
        className,
      )}
    >
      <span className="bg-primary/10 text-primary inline-flex size-14 items-center justify-center rounded-full">
        <Leaf className="size-6" strokeWidth={1.5} aria-hidden />
      </span>
      <div className="space-y-3">
        <p className="text-h2 text-foreground">{title}</p>
        <p className="text-small text-muted-foreground mx-auto max-w-sm leading-relaxed">
          {description}
        </p>
      </div>
      {action ? <div className="pt-2">{action}</div> : null}
    </div>
  );
}
