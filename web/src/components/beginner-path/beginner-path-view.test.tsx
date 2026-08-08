import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import { BeginnerPathView } from "@/components/beginner-path/beginner-path-view";
import { localBeginnerPath } from "@/data/beginner-path/local-beginner-path";
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

describe("BeginnerPathView — F-003", () => {
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
    expect(html).toContain('href="/pratique/st-decouverte-premiere-courte"');
    expect(html).toContain('href="/bibliotheque/st-initiation-rituel-base"');
    expect(html).toContain(
      'href="/bibliotheque/mouvements/posture-de-depart"',
    );
    expect(html).toContain(
      'href="/bibliotheque/mouvements/transfert-poids-lateral"',
    );
    expect(html).toContain(
      'href="/bibliotheque/mouvements/pas-avant-controle"',
    );
    expect(html).toContain("MV-001");
    expect(html).toContain("MV-002");
    expect(html).toContain("MV-003");
  });

  it("n’affiche aucune fausse progression utilisateur", () => {
    const html = renderToStaticMarkup(
      <BeginnerPathView path={localBeginnerPath} steps={resolved.steps} />,
    );

    expect(html.toLowerCase()).not.toContain("progressbar");
    expect(html.toLowerCase()).not.toContain("pourcentage");
    expect(html).not.toContain("%");
    expect(html.toLowerCase()).not.toContain("déjà pratiquée");
    expect(html.toLowerCase()).not.toContain("séance terminée");
    expect(html.toLowerCase()).not.toContain("cadenas");
    expect(html.toLowerCase()).not.toContain("verrouill");
    expect(html.toLowerCase()).not.toContain("débloqu");
    expect(html.toLowerCase()).not.toContain("streak");
    expect(html.toLowerCase()).not.toMatch(/\bxp\b/);
    expect(html).not.toContain("<video");
    expect(html).not.toContain('role="progressbar"');
  });
});
