import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import { HomeWelcomeView } from "@/components/home/home-welcome-view";
import { beginnerPathReader } from "@/services/beginner-path/beginner-path-reader";
import { curriculumReader } from "@/services/curriculum/curriculum-reader";
import { resolveDailyProgram } from "@/services/daily-program/resolve-daily-program";

vi.mock("@/components/environment/page-environment", () => ({
  PageEnvironment: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="page-environment">{children}</div>
  ),
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

describe("HomeWelcomeView — Accueil MVP-015", () => {
  const pathResult = beginnerPathReader.getPublishedPath();
  if (!pathResult.ok) throw new Error("BeginnerPath requis pour les tests Accueil");

  const resolved = resolveDailyProgram({
    path: pathResult.path,
    dateKey: "2026-08-08",
  });
  if (!resolved.ok) throw new Error("resolveDailyProgram a échoué");

  const dailySession = curriculumReader
    .listSessions({ publicationStatus: "published", availableOnly: true })
    .find((session) => session.id === resolved.suggestion.sessionId)!;

  const emptyStats = {
    totalSessions: 0,
    completedSessions: 0,
    totalDurationMs: 0,
    averageDurationMs: 0,
    lastPracticedAt: null,
  };

  it("affiche Séance du jour avec CTA fresh", () => {
    const html = renderToStaticMarkup(
      <HomeWelcomeView
        dailySession={dailySession}
        activeResume={null}
        redoSession={null}
        stats={emptyStats}
        progressLabel="Votre carnet est encore vide. Une première séance suffit pour commencer."
      />,
    );

    expect(html).toContain("Séance du jour");
    expect(html).toContain(`href="/pratique/${dailySession.id}?fresh=1"`);
    expect(html).toContain("libre de l’ignorer");
    expect(html).not.toContain("streak");
    expect(html).toContain('href="/respiration"');
  });

  it("affiche le badge Déjà pratiquée aujourd’hui sans changer la reco", () => {
    const html = renderToStaticMarkup(
      <HomeWelcomeView
        dailySession={dailySession}
        dailyAlreadyPracticedToday
        activeResume={null}
        redoSession={null}
        stats={emptyStats}
        progressLabel="1 pratique"
      />,
    );
    expect(html).toContain("Déjà pratiquée aujourd’hui");
    expect(html).toContain('data-testid="home-daily-practiced-today"');
    expect(html).toContain(`href="/pratique/${dailySession.id}?fresh=1"`);
  });

  it("État A — pas de Reprendre ni Refaire", () => {
    const html = renderToStaticMarkup(
      <HomeWelcomeView
        dailySession={dailySession}
        activeResume={null}
        redoSession={null}
        stats={emptyStats}
        progressLabel="Votre carnet est encore vide. Une première séance suffit pour commencer."
      />,
    );

    expect(html).not.toContain("Reprendre la séance");
    expect(html).not.toContain('data-testid="home-resume-action"');
    expect(html).not.toContain("Refaire cette séance");
  });

  it("priorité — vraie reprise utilise Reprendre", () => {
    const html = renderToStaticMarkup(
      <HomeWelcomeView
        dailySession={dailySession}
        activeResume={dailySession}
        redoSession={null}
        stats={{
          ...emptyStats,
          totalSessions: 1,
          completedSessions: 0,
        }}
        progressLabel="1 pratique"
      />,
    );

    expect(html).toContain("Reprendre la séance");
    expect(html).toContain('data-testid="home-resume-action"');
    expect(html).toContain(`href="/pratique/${dailySession.id}"`);
    expect(html).not.toContain("?fresh=1\" data-testid=\"home-resume-action\"");
  });

  it("Refaire pour une séance passée sans snapshot", () => {
    const html = renderToStaticMarkup(
      <HomeWelcomeView
        dailySession={dailySession}
        activeResume={null}
        redoSession={dailySession}
        stats={{
          ...emptyStats,
          totalSessions: 1,
          completedSessions: 1,
          lastPracticedAt: "2026-08-06T10:00:00.000Z",
        }}
        progressLabel="1 pratique · 6 août 2026"
      />,
    );

    expect(html).toContain("Refaire cette séance");
    expect(html).toContain('data-testid="home-redo-action"');
    expect(html).not.toContain("Reprendre cette séance");
    expect(html).not.toContain("Reprendre la séance");
  });
});
