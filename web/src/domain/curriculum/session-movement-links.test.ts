import { describe, expect, it } from "vitest";

import {
  collectReferencedMovementIds,
  findBrokenMovementReferences,
  sessionAssociatedMovementIds,
} from "@/domain/curriculum/session-movement-links";
import { localCurriculum } from "@/data/curriculum/local-curriculum";
import { localMovements } from "@/data/movements/local-movements";
import { createCurriculumReader } from "@/services/curriculum/curriculum-reader";
import { localCurriculumSource } from "@/services/curriculum/local-curriculum-source";

describe("SessionStep → Movement — mapping MVP-012", () => {
  it("expose les Movement IDs attendus par séance", () => {
    const discovery = localCurriculum.sessions.find(
      (s) => s.id === "st-decouverte-premiere-courte",
    )!;
    const initiation = localCurriculum.sessions.find(
      (s) => s.id === "st-initiation-rituel-base",
    )!;
    const progression = localCurriculum.sessions.find(
      (s) => s.id === "st-progression-liaison-legere",
    )!;

    expect(sessionAssociatedMovementIds(discovery)).toEqual(["MV-001"]);
    expect(sessionAssociatedMovementIds(initiation)).toEqual([
      "MV-001",
      "MV-002",
    ]);
    expect(sessionAssociatedMovementIds(progression)).toEqual([
      "MV-002",
      "MV-003",
    ]);
  });

  it("place les IDs sur les steps curriculum retenus", () => {
    const discoveryCorps = localCurriculum.sessions
      .find((s) => s.id === "st-decouverte-premiere-courte")!
      .steps.find((s) => s.id === "step-dec-corps");
    const initCorps = localCurriculum.sessions
      .find((s) => s.id === "st-initiation-rituel-base")!
      .steps.find((s) => s.id === "step-init-corps");
    const progLiaison = localCurriculum.sessions
      .find((s) => s.id === "st-progression-liaison-legere")!
      .steps.find((s) => s.id === "step-prog-liaison");

    expect(discoveryCorps?.movementIds).toEqual(["MV-001"]);
    expect(initCorps?.movementIds).toEqual(["MV-001", "MV-002"]);
    expect(progLiaison?.movementIds).toEqual(["MV-002", "MV-003"]);
  });

  it("ne référence que des Movement IDs existants", () => {
    const known = new Set(localMovements.movements.map((m) => m.id));
    const broken = findBrokenMovementReferences(localCurriculum, known);
    expect(broken).toEqual([]);

    const reader = createCurriculumReader(localCurriculumSource);
    expect(reader.validateMovementLinks(known)).toEqual({
      ok: true,
      broken: [],
    });
  });

  it("détecte une référence cassée", () => {
    const known = new Set(["MV-001"]);
    const broken = findBrokenMovementReferences(localCurriculum, known);
    expect(broken.some((b) => b.movementId === "MV-002")).toBe(true);
    expect(broken.some((b) => b.movementId === "MV-003")).toBe(true);
  });

  it("collecte l’ensemble des IDs référencés", () => {
    expect(collectReferencedMovementIds(localCurriculum)).toEqual([
      "MV-001",
      "MV-002",
      "MV-003",
    ]);
  });
});
