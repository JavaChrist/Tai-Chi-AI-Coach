import { BookOpen } from "lucide-react";

import { SessionCard } from "@/components/sessions/session-card";
import { EmptyState } from "@/components/states/empty-state";
import type { SessionTemplateSummary } from "@/domain/curriculum/types";

type SessionListProps = {
  sessions: SessionTemplateSummary[];
};

export function SessionList({ sessions }: SessionListProps) {
  if (sessions.length === 0) {
    return (
      <EmptyState
        icon={BookOpen}
        title="Aucune séance pour le moment"
        description="Le catalogue local ne contient pas encore de séance disponible. Revenez un peu plus tard."
      />
    );
  }

  return (
    <ul className="grid list-none gap-4 p-0 sm:grid-cols-2">
      {sessions.map((session) => (
        <li key={session.id} className="relative">
          <SessionCard session={session} className="h-full" />
        </li>
      ))}
    </ul>
  );
}
