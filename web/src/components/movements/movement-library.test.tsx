import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import { MovementLibrary } from "@/components/movements/movement-library";
import { movementReader } from "@/services/movements/movement-reader";

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

vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
  }: {
    src: string;
    alt: string;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

describe("MovementLibrary — F-004 / F-007", () => {
  const movements = movementReader.listMovements({
    publicationStatus: "published",
    availableOnly: true,
  });

  it("affiche MV-001, MV-002 et MV-003 avec liens et images WebP", () => {
    const html = renderToStaticMarkup(
      <MovementLibrary movements={movements} />,
    );

    expect(html).toContain('data-testid="movement-library"');
    expect(html).toContain('data-testid="movement-card-MV-001"');
    expect(html).toContain('data-testid="movement-card-MV-002"');
    expect(html).toContain('data-testid="movement-card-MV-003"');
    expect(html).toContain("Posture de départ");
    expect(html).toContain("Transfert de poids latéral");
    expect(html).toContain("Pas avant contrôlé");
    expect(html).toContain('href="/bibliotheque/mouvements/posture-de-depart"');
    expect(html).toContain(
      'href="/bibliotheque/mouvements/transfert-poids-lateral"',
    );
    expect(html).toContain(
      'href="/bibliotheque/mouvements/pas-avant-controle"',
    );
    expect(html).toContain(
      "/curriculum/movements/movement-posture-de-depart-key.webp",
    );
    expect(html).toContain(
      "/curriculum/movements/movement-transfert-poids-lateral-key.webp",
    );
    expect(html).toContain(
      "/curriculum/movements/movement-pas-avant-controle-key.webp",
    );
    expect(html).not.toContain(".png");
    expect(html).not.toContain("Rechercher");
    expect(html).not.toContain("Favoris");
    expect(html).not.toContain("<select");
  });

  it("affiche un empty state si aucun mouvement", () => {
    const html = renderToStaticMarkup(<MovementLibrary movements={[]} />);
    expect(html).toContain("Aucun mouvement pour le moment");
    expect(html).toContain('href="/bibliotheque"');
  });
});
