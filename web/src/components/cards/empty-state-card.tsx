import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/states/empty-state";
import { cn } from "@/lib/utils";

type EmptyStateCardProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  action?: ReactNode;
  className?: string;
};

/** Carte enveloppant un Empty State. */
export function EmptyStateCard({
  title,
  description,
  icon,
  action,
  className,
}: EmptyStateCardProps) {
  return (
    <Card className={cn("border-dashed", className)}>
      <CardContent className="py-8">
        <EmptyState
          title={title}
          description={description}
          icon={icon}
          action={action}
        />
      </CardContent>
    </Card>
  );
}
