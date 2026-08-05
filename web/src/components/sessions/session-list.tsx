import { BookOpen } from "lucide-react";
import Link from "next/link";

import { SessionCard } from "@/components/sessions/session-card";
import { EmptyState } from "@/components/states/empty-state";
import { Button } from "@/components/ui/button";
import type { SessionTemplateSummary } from "@/domain/curriculum/types";

type SessionListProps = {
  sessions: SessionTemplateSummary[];
};

export function SessionList({ sessions }: SessionListProps) {
  if (sessions.length === 0) {
    return (
      <EmptyState
        icon={BookOpen}
        title="Commençons quand vous êtes prêt"
        description="Aucune séance n’est disponible pour le moment. Revenez un peu plus tard, sans pression."
        action={
          <Button variant="primary" asChild>
            <Link href="/">Retour à l’accueil</Link>
          </Button>
        }
      />
    );
  }

  return (
    <ul className="grid list-none gap-6 p-0 sm:grid-cols-2">
      {sessions.map((session) => (
        <li key={session.id} className="relative">
          <SessionCard session={session} className="h-full" />
        </li>
      ))}
    </ul>
  );
}
