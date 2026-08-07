import { describe, expect, it } from "vitest";

import type { MovementCatalog } from "@/domain/movements/types";
import { localMovements } from "@/data/movements/local-movements";
import { createMovementReader } from "@/services/movements/movement-reader";
import { localMovementSource } from "@/services/movements/local-movement-source";

const emptyCatalog: MovementCatalog = {
  id: "movements-empty",
  title: "Vide",
  contentVersion: "0.0.0",
  locale: "fr",
  movements: [],
};

describe("movementReader — source locale", () => {
  const reader = createMovementReader(localMovementSource);

  it("liste exactement les 3 mouvements publiés du corpus MVP", () => {
    const movements = reader.listMovements({
      publicationStatus: "published",
      availableOnly: true,
    });

    expect(movements).toHaveLength(3);
    expect(movements.map((m) => m.id)).toEqual(["MV-001", "MV-002", "MV-003"]);
    expect(movements.map((m) => m.slug)).toEqual([
      "posture-de-depart",
      "transfert-poids-lateral",
      "pas-avant-controle",
    ]);
    expect(movements.every((m) => m.publicationStatus === "published")).toBe(
      true,
    );
  });

  it("respecte sortOrder pédagogique", () => {
    const movements = reader.listMovements();
    expect(movements.map((m) => m.sortOrder)).toEqual([1, 2, 3]);
  });

  it("récupère un mouvement par ID métier", () => {
    const result = reader.getMovementById("MV-001");
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.movement.title).toBe("Posture de départ");
      expect(result.movement.instructions.length).toBe(5);
    }
  });

  it("récupère un mouvement par slug", () => {
    const result = reader.getMovementById("transfert-poids-lateral");
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.movement.id).toBe("MV-002");
    }
  });

  it("retourne not_found pour un identifiant inconnu", () => {
    expect(reader.getMovementById("mouvement-inexistant")).toEqual({
      ok: false,
      reason: "not_found",
    });
  });

  it("expose un média WebP pour chaque mouvement publié du corpus", () => {
    for (const movement of localMovements.movements) {
      expect(movement.mediaKeyImage).toMatch(
        /^\/curriculum\/movements\/movement-.+-key\.webp$/,
      );
      expect(movement.mediaKeyImage).not.toMatch(/\.png$/);
    }
  });

  it("supporte un mouvement sans média dans une source injectée", () => {
    const readerWithoutMedia = createMovementReader({
      getCatalog: () => ({
        ...localMovements,
        movements: [
          {
            ...localMovements.movements[0]!,
            mediaKeyImage: null,
          },
        ],
      }),
    });

    const result = readerWithoutMedia.getMovementById("MV-001");
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.movement.mediaKeyImage).toBeNull();
    }
  });
});

describe("movementReader — source vide", () => {
  it("renvoie une liste vide lorsque la source n’a aucun mouvement", () => {
    const reader = createMovementReader({
      getCatalog: () => emptyCatalog,
    });

    expect(reader.listMovements()).toEqual([]);
  });
});
