import { formatActiveDuration } from "@/domain/practice/practice-reducer";
import type { UserStatistics } from "@/domain/progression/types";

type ProgressionStatsProps = {
  statistics: UserStatistics;
};

function formatDate(iso: string | null): string {
  if (!iso) return "Pas encore de pratique";
  try {
    return new Intl.DateTimeFormat("fr-FR", {
      dateStyle: "long",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

/** Carnet — habitudes avant chiffres (12A §9.10 / ticket §44). */
export function ProgressionStats({ statistics }: ProgressionStatsProps) {
  const habitLine =
    statistics.totalSessions === 0
      ? "Votre chemin commence par une première séance."
      : statistics.totalSessions === 1
        ? "Une pratique enregistrée. La régularité se construit doucement."
        : `${statistics.totalSessions} pratiques enregistrées. Continuez à votre rythme.`;

  return (
    <div className="bg-card/88 border-border shadow-medium space-y-5 rounded-card border p-6">
      <p className="text-body text-foreground">{habitLine}</p>
      <dl className="text-small text-muted-foreground space-y-3">
        <div className="flex flex-wrap justify-between gap-2">
          <dt>Dernière pratique</dt>
          <dd className="text-foreground">
            {formatDate(statistics.lastPracticedAt)}
          </dd>
        </div>
        {statistics.totalSessions > 0 ? (
          <div className="flex flex-wrap justify-between gap-2">
            <dt>Temps cumulé</dt>
            <dd className="text-foreground">
              {formatActiveDuration(statistics.totalDurationMs)}
            </dd>
          </div>
        ) : null}
      </dl>
    </div>
  );
}
