import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import { MovementDetails } from "@/components/movements/movement-details";
import { localMovements } from "@/data/movements/local-movements";
import type { Movement } from "@/domain/movements/types";
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

describe("MovementDetails — F-005 / F-007", () => {
  it("rend le contenu F-005 de MV-001 avec image", () => {
    const result = movementReader.getMovementById("MV-001");
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    const html = renderToStaticMarkup(
      <MovementDetails movement={result.movement} />,
    );

    expect(html).toContain('data-testid="movement-details"');
    expect(html).toContain('data-movement-id="MV-001"');
    expect(html).toContain("Posture de départ");
    expect(html).toContain(
      "Trouver une position stable et détendue avant de commencer à bouger.",
    );
    expect(html).toContain("Placement");
    expect(html).toContain("Pieds posés confortablement au sol");
    expect(html).toContain("Déroulement");
    expect(html).toContain("S’installer dans une position confortable.");
    expect(html).toContain("Respiration");
    expect(html).toContain("Naturelle, sans imposer de rythme.");
    expect(html).toContain("Rythme");
    expect(html).toContain("Immobile et calme");
    expect(html).toContain("Points d’attention");
    expect(html).toContain("confort et stabilité");
    expect(html).toContain("Erreurs fréquentes");
    expect(html).toContain("Verrouiller les genoux");
    expect(html).toContain("Prudence");
    expect(html).toContain("réduire l’amplitude ou interrompre");
    expect(html).toContain(
      "/curriculum/movements/movement-posture-de-depart-key.webp",
    );
    expect(html).toContain('href="/bibliotheque/mouvements"');
    expect(html).not.toContain("diagnostic");
    expect(html).not.toContain("médical");
  });

  it("reste stable sans image de référence", () => {
    const base = localMovements.movements[0]!;
    const withoutMedia: Movement = {
      ...base,
      mediaKeyImage: null,
    };

    const html = renderToStaticMarkup(
      <MovementDetails movement={withoutMedia} />,
    );

    expect(html).toContain('data-has-media="false"');
    expect(html).toContain("Image de référence non disponible");
    expect(html).toContain("Posture de départ");
    expect(html).toContain("Déroulement");
  });

  it("couvre MV-002 et MV-003 (titres et prudence)", () => {
    for (const id of ["MV-002", "MV-003"] as const) {
      const result = movementReader.getMovementById(id);
      expect(result.ok).toBe(true);
      if (!result.ok) continue;

      const html = renderToStaticMarkup(
        <MovementDetails movement={result.movement} />,
      );
      expect(html).toContain(result.movement.title);
      expect(html).toContain(result.movement.safetyNote);
      expect(html).toContain(result.movement.breathing);
    }
  });
});
