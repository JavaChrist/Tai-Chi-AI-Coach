import { Leaf } from "lucide-react";
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

/** État vide — invitation (« Commençons »), jamais un vide froid (12A §7.10). */
export function EmptyState({
  title,
  description,
  icon: Icon = Leaf,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      role="status"
      className={cn(
        "surface-card flex flex-col items-center justify-center gap-5 px-6 py-14 text-center",
        className,
      )}
    >
      <span className="bg-secondary text-primary inline-flex size-14 items-center justify-center rounded-full">
        <Icon className="size-6" strokeWidth={1.5} aria-hidden />
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
