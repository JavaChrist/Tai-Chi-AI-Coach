import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { SessionMetadata } from "@/components/sessions/session-metadata";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SessionTemplateSummary } from "@/domain/curriculum/types";
import { cn } from "@/lib/utils";

type SessionCardProps = {
  session: SessionTemplateSummary;
  className?: string;
};

export function SessionCard({ session, className }: SessionCardProps) {
  return (
    <Card
      className={cn(
        "relative h-full transition-colors hover:bg-muted/30",
        className,
      )}
    >
      <CardHeader className="gap-2">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg">
            <Link
              href={`/bibliotheque/${session.id}`}
              className="focus-visible:ring-ring rounded-sm after:absolute after:inset-0 focus-visible:ring-2 focus-visible:outline-none"
            >
              {session.title}
            </Link>
          </CardTitle>
          <ChevronRight
            className="text-muted-foreground mt-1 size-5 shrink-0"
            aria-hidden
          />
        </div>
        <CardDescription>{session.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="relative z-0">
        <SessionMetadata session={session} />
        <p className="text-primary mt-4 text-sm font-medium" aria-hidden>
          Voir la fiche
        </p>
      </CardContent>
    </Card>
  );
}
