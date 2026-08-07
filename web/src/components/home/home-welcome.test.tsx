import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import { HomeWelcomeView } from "@/components/home/home-welcome-view";
import { curriculumReader } from "@/services/curriculum/curriculum-reader";

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

describe("HomeWelcomeView — actions Accueil", () => {
  const published = curriculumReader.listSessions({
    publicationStatus: "published",
    availableOnly: true,
  });
  const firstSession = published[0]!;
  const emptyStats = {
    totalSessions: 0,
    completedSessions: 0,
    totalDurationMs: 0,
    averageDurationMs: 0,
    lastPracticedAt: null,
  };

  it("État A — historique vide : Parcourir dans le DOM, pas de Reprendre", () => {
    const html = renderToStaticMarkup(
      <HomeWelcomeView
        nextSession={firstSession}
        resumeSession={null}
        stats={emptyStats}
        progressLabel="Votre carnet est encore vide. Une première séance suffit pour commencer."
      />,
    );

    expect(html).toContain("Parcourir");
    expect(html).toContain('data-testid="home-browse-action"');
    expect(html).toContain('href="/bibliotheque"');
    expect(html).toContain('data-testid="home-discovery-action"');
    expect(html).toContain('href="/decouverte"');
    expect(html).toContain('data-variant="surface"');
    expect(html).not.toContain("Reprendre cette séance");
    expect(html).not.toContain('data-testid="home-resume-action"');
  });

  it("État B — séance reprenable : Parcourir + Reprendre dans le DOM", () => {
    const html = renderToStaticMarkup(
      <HomeWelcomeView
        nextSession={firstSession}
        resumeSession={firstSession}
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
    expect(html).toContain('href="/bibliotheque"');
    expect(html).toContain("Reprendre cette séance");
    expect(html).toContain(`href="/pratique/${firstSession.id}"`);
    expect(html).toContain('data-testid="home-resume-action"');
    expect(html).toContain('data-testid="home-browse-action"');
  });
});
