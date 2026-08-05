import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
};

/** En-tête de page — un seul H1 (12A §6.6 / §11.5). */
export function PageHeader({
  title,
  description,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <header
      data-slot="page-header"
      className={cn(
        "flex flex-wrap items-start justify-between gap-4",
        className,
      )}
    >
      <div className="min-w-0 max-w-reading space-y-2">
        <h1 className="text-h1 text-foreground tracking-tight">{title}</h1>
        {description ? (
          <p className="text-body text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {actions ? (
        <div className="flex shrink-0 items-center gap-2">{actions}</div>
      ) : null}
    </header>
  );
}
