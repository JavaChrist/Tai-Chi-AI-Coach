import type { ReactNode } from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PreferenceCardProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export function PreferenceCard({
  title,
  description,
  action,
  children,
  className,
}: PreferenceCardProps) {
  return (
    <Card size="sm" className={cn(className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
        {action ? <CardAction>{action}</CardAction> : null}
      </CardHeader>
      {children ? <CardContent>{children}</CardContent> : null}
    </Card>
  );
}
