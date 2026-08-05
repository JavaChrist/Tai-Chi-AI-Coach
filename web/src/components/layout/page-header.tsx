import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
};

/** En-tête de page (hors App Header). */
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
        "flex flex-wrap items-start justify-between gap-3",
        className,
      )}
    >
      <div className="min-w-0 space-y-1">
        <h1 className="font-heading text-2xl font-medium tracking-tight sm:text-3xl">
          {title}
        </h1>
        {description ? (
          <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
    </header>
  );
}
