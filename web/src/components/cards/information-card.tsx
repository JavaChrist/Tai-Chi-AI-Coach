import { Info } from "lucide-react";
import type { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type InformationCardProps = {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

/** Carte d’information neutre et rassurante. */
export function InformationCard({
  title,
  description,
  children,
  className,
}: InformationCardProps) {
  return (
    <Card className={cn("bg-muted/40", className)}>
      <CardHeader>
        <div className="flex items-start gap-3">
          <span className="bg-surface text-muted-foreground mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-[var(--radius)] border border-border">
            <Info className="size-4" strokeWidth={1.75} aria-hidden />
          </span>
          <div className="min-w-0 space-y-1">
            <CardTitle>{title}</CardTitle>
            {description ? (
              <CardDescription>{description}</CardDescription>
            ) : null}
          </div>
        </div>
      </CardHeader>
      {children ? <CardContent>{children}</CardContent> : null}
    </Card>
  );
}
