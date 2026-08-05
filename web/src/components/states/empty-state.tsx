import { Inbox } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type EmptyStateProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  action?: ReactNode;
  className?: string;
};

/** État vide — invitation calme à la première action. */
export function EmptyState({
  title,
  description,
  icon: Icon = Inbox,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      role="status"
      className={cn(
        "flex flex-col items-center justify-center gap-3 px-4 py-6 text-center",
        className,
      )}
    >
      <span className="bg-muted text-muted-foreground inline-flex size-12 items-center justify-center rounded-full">
        <Icon className="size-6" aria-hidden />
      </span>
      <div className="space-y-1">
        <p className="font-heading text-base font-medium">{title}</p>
        <p className="text-muted-foreground max-w-sm text-sm">{description}</p>
      </div>
      {action ? <div className="mt-1">{action}</div> : null}
    </div>
  );
}
