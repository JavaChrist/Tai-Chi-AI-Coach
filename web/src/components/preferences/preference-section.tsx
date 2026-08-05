import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PreferenceSectionProps = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function PreferenceSection({
  id,
  title,
  description,
  children,
  className,
}: PreferenceSectionProps) {
  const headingId = `${id}-heading`;
  const descriptionId = description ? `${id}-description` : undefined;

  return (
    <section
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
      className={cn("space-y-4", className)}
    >
      <header className="space-y-1">
        <h2 id={headingId} className="font-heading text-lg font-medium tracking-tight">
          {title}
        </h2>
        {description ? (
          <p id={descriptionId} className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        ) : null}
      </header>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
