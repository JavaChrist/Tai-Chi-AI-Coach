import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = ComponentProps<"section"> & {
  title?: string;
  description?: string;
  action?: ReactNode;
};

/** Section de page — un objectif, respiration 32 px (12A §5.7 / §11.16). */
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
              <h2 className="text-h2 text-foreground tracking-tight">{title}</h2>
            ) : null}
            {description ? (
              <p className="text-small text-foreground">{description}</p>
            ) : null}
          </div>
          {action ? <div className="shrink-0">{action}</div> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
