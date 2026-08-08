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

describe("HomeWelcomeView — Séance du jour F-008", () => {
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

  it("affiche Séance du jour avec CTA vers la bonne session", () => {
    const html = renderToStaticMarkup(
      <HomeWelcomeView
        dailySession={dailySession}
        resumeSession={null}
        stats={emptyStats}
        progressLabel="Votre carnet est encore vide. Une première séance suffit pour commencer."
      />,
    );

    expect(html).toContain("Séance du jour");
    expect(html).toContain('data-testid="home-daily-section"');
    expect(html).toContain('data-testid="home-daily-cta"');
    expect(html).toContain(`href="/pratique/${dailySession.id}"`);
    expect(html).toContain(dailySession.title);
    expect(html).toContain("libre de l’ignorer");
    expect(html).not.toContain("obligatoire");
    expect(html).not.toContain("retard");
    expect(html).not.toContain("streak");
    expect(html).not.toContain("rattraper");
    expect(html).not.toContain("validé aujourd");
    expect(html).toContain("Parcourir");
    expect(html).toContain('href="/parcours/debutant"');
  });

  it("État A — historique vide : Parcourir, pas de Reprendre", () => {
    const html = renderToStaticMarkup(
      <HomeWelcomeView
        dailySession={dailySession}
        resumeSession={null}
        stats={emptyStats}
        progressLabel="Votre carnet est encore vide. Une première séance suffit pour commencer."
      />,
    );

    expect(html).toContain("Parcourir");
    expect(html).toContain('data-testid="home-browse-action"');
    expect(html).not.toContain("Reprendre cette séance");
    expect(html).not.toContain('data-testid="home-resume-action"');
  });

  it("État B — séance reprenable : Parcourir + Reprendre", () => {
    const html = renderToStaticMarkup(
      <HomeWelcomeView
        dailySession={dailySession}
        resumeSession={dailySession}
        stats={{
          ...emptyStats,
          totalSessions: 1,
          completedSessions: 1,
          lastPracticedAt: "2026-08-06T10:00:00.000Z",
        }}
        progressLabel="1 pratique · 6 août 2026"
      />,
    );

    expect(html).toContain("Parcourir");
    expect(html).toContain("Reprendre cette séance");
    expect(html).toContain('data-testid="home-resume-action"');
  });
});
