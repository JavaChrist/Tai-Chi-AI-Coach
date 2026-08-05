import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = ComponentProps<"section"> & {
  title?: string;
  description?: string;
  action?: ReactNode;
};

/** Section de page — un objectif, un titre, un texte court. */
export function Section({
  title,
  description,
  action,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn("space-y-4", className)}
      {...props}
    >
      {title || description || action ? (
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 space-y-1">
            {title ? (
              <h2 className="font-heading text-lg font-medium tracking-tight">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="text-muted-foreground text-sm">{description}</p>
            ) : null}
          </div>
          {action ? <div className="shrink-0">{action}</div> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
