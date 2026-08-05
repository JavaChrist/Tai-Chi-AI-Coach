import { Clock, CalendarDays, Hash, Timer } from "lucide-react";

import { formatActiveDuration } from "@/domain/practice/practice-reducer";
import type { UserStatistics } from "@/domain/progression/types";

type ProgressionStatsProps = {
  statistics: UserStatistics;
};

function formatDate(iso: string | null): string {
  if (!iso) return "Aucune pour le moment";
  try {
    return new Intl.DateTimeFormat("fr-FR", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function ProgressionStats({ statistics }: ProgressionStatsProps) {
  const items = [
    {
      icon: Hash,
      label: "Pratiques enregistrées",
      value: String(statistics.totalSessions),
    },
    {
      icon: Clock,
      label: "Durée totale",
      value: formatActiveDuration(statistics.totalDurationMs),
    },
    {
      icon: Timer,
      label: "Durée moyenne",
      value:
        statistics.totalSessions === 0
          ? "—"
          : formatActiveDuration(statistics.averageDurationMs),
    },
    {
      icon: CalendarDays,
      label: "Dernière pratique",
      value: formatDate(statistics.lastPracticedAt),
    },
  ] as const;

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li
            key={item.label}
            className="border-border bg-card rounded-xl border p-4"
          >
            <div className="text-muted-foreground mb-2 flex items-center gap-2 text-sm">
              <Icon className="size-4" aria-hidden />
              <span>{item.label}</span>
            </div>
            <p className="font-heading text-lg font-medium">{item.value}</p>
          </li>
        );
      })}
    </ul>
  );
}
