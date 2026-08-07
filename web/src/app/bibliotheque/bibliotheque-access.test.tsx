import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import BibliothequePage from "@/app/bibliotheque/page";

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

vi.mock("@/components/environment/page-environment", () => ({
  PageEnvironment: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="page-environment">{children}</div>
  ),
}));

vi.mock("@/components/sessions/session-library", () => ({
  SessionLibrary: ({
    sessions,
  }: {
    sessions: { id: string; title: string }[];
  }) => (
    <div data-testid="session-library">
      {sessions.map((session) => (
        <span key={session.id}>{session.title}</span>
      ))}
    </div>
  ),
}));

describe("Bibliothèque séances — accès mouvements (régression F-013)", () => {
  it("conserve le catalogue séances et expose un lien vers /bibliotheque/mouvements", () => {
    const html = renderToStaticMarkup(<BibliothequePage />);

    expect(html).toContain('data-testid="bibliotheque-movements-access"');
    expect(html).toContain('href="/bibliotheque/mouvements"');
    expect(html).toContain("Voir les mouvements");
    expect(html).toContain('data-testid="session-library"');
    expect(html).toContain("Première séance courte");
  });
});
