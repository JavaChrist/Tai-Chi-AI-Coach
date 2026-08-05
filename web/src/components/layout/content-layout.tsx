import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { cn } from "@/lib/utils";

type ContentLayoutProps = {
  title?: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  containerSize?: "sm" | "md" | "lg";
};

/** Mise en page de contenu standard (header de page + conteneur). */
export function ContentLayout({
  title,
  description,
  actions,
  children,
  className,
  containerSize = "md",
}: ContentLayoutProps) {
  return (
    <Container size={containerSize} className={cn("space-y-8 py-6", className)}>
      {title ? (
        <PageHeader title={title} description={description} actions={actions} />
      ) : null}
      {children}
    </Container>
  );
}
