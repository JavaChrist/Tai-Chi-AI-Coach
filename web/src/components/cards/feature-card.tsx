import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  action?: ReactNode;
  className?: string;
};

/** Carte mettant en avant une capacité ou un bénéfice. */
export function FeatureCard({
  title,
  description,
  icon: Icon,
  action,
  className,
}: FeatureCardProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <div className="bg-primary/10 text-primary mb-2 inline-flex size-10 items-center justify-center rounded-[var(--radius)]">
          <Icon className="size-5" strokeWidth={1.75} aria-hidden />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {action ? <CardContent>{action}</CardContent> : null}
    </Card>
  );
}
