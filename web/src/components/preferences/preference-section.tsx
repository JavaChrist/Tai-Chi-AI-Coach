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
      className={cn("space-y-5", className)}
    >
      <header className="space-y-2">
        <h2 id={headingId} className="text-h2 text-foreground">
          {title}
        </h2>
        {description ? (
          <p
            id={descriptionId}
            className="text-small text-foreground leading-relaxed"
          >
            {description}
          </p>
        ) : null}
      </header>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
