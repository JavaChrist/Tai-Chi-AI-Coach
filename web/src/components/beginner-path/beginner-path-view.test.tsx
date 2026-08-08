import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import { BeginnerPathView } from "@/components/beginner-path/beginner-path-view";
import { localBeginnerPath } from "@/data/beginner-path/local-beginner-path";
import type { ProgressSummary } from "@/domain/progression/progress-summary";
import { resolveBeginnerPathSteps } from "@/services/beginner-path/resolve-beginner-path-steps";

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

describe("BeginnerPathView — F-003 / F-010", () => {
  const resolved = resolveBeginnerPathSteps(localBeginnerPath);
  if (!resolved.ok) {
    throw new Error("parcours local invalide");
  }

  it("affiche l’ordre Découverte → Initiation → Progression", () => {
    const html = renderToStaticMarkup(
      <BeginnerPathView path={localBeginnerPath} steps={resolved.steps} />,
    );

    expect(html).toContain('data-testid="beginner-path"');
    expect(html).toContain("Parcours débutant");
    expect(html).toContain("<ol");
    expect(html).toContain("Première séance courte");
    expect(html).toContain("Rituel de séance débutant");
    expect(html).toContain("Séance avec liaison légère");
    expect(html).toContain("Commencer ici");
    expect(html).toContain("Ensuite");
    expect(html).toContain("Puis continuer");
    expect(html).toContain(
      'href="/pratique/st-decouverte-premiere-courte?fresh=1"',
    );
    expect(html).toContain('href="/bibliotheque/st-initiation-rituel-base"');
    expect(html).toContain("MV-001");
    expect(html).toContain("Non abordée");
  });

  it("enrichit avec progression calculée sans verrou", () => {
    const progressSummary: ProgressSummary = {
      pathId: localBeginnerPath.id,
      steps: [
        { sessionId: localBeginnerPath.orderedSessionIds[0]!, status: "completed" },
        { sessionId: localBeginnerPath.orderedSessionIds[1]!, status: "not_started" },
        { sessionId: localBeginnerPath.orderedSessionIds[2]!, status: "not_started" },
      ],
      nextSessionId: localBeginnerPath.orderedSessionIds[1]!,
      allCompleted: false,
    };

    const html = renderToStaticMarkup(
      <BeginnerPathView
        path={localBeginnerPath}
        steps={resolved.steps}
        progressSummary={progressSummary}
      />,
    );

    expect(html).toContain("Déjà pratiquée");
    expect(html).toContain("Prochaine étape");
    expect(html).toContain('data-testid="beginner-path-next-step"');
    expect(html.toLowerCase()).not.toContain("cadenas");
    expect(html.toLowerCase()).not.toContain("streak");
    expect(html.toLowerCase()).not.toMatch(/\bxp\b/);
    expect(html).not.toContain('role="progressbar"');
  });

  it("affiche un état calme si tout est complété", () => {
    const progressSummary: ProgressSummary = {
      pathId: localBeginnerPath.id,
      steps: localBeginnerPath.orderedSessionIds.map((sessionId) => ({
        sessionId,
        status: "completed" as const,
      })),
      nextSessionId: null,
      allCompleted: true,
    };

    const html = renderToStaticMarkup(
      <BeginnerPathView
        path={localBeginnerPath}
        steps={resolved.steps}
        progressSummary={progressSummary}
      />,
    );

    expect(html).toContain('data-testid="beginner-path-all-completed"');
    expect(html).toContain("revisiter");
  });
});
