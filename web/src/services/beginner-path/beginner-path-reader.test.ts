import { describe, expect, it } from "vitest";

import { localBeginnerPath } from "@/data/beginner-path/local-beginner-path";
import type { BeginnerPath } from "@/domain/beginner-path/types";
import { createBeginnerPathReader } from "@/services/beginner-path/beginner-path-reader";
import { localBeginnerPathSource } from "@/services/beginner-path/local-beginner-path-source";
import { resolveBeginnerPathSteps } from "@/services/beginner-path/resolve-beginner-path-steps";

describe("beginnerPathReader — F-003", () => {
  const reader = createBeginnerPathReader(localBeginnerPathSource);

  it("expose un parcours publié avec exactement 3 session IDs", () => {
    const result = reader.getPublishedPath();
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.path.publicationStatus).toBe("published");
    expect(result.path.orderedSessionIds).toHaveLength(3);
    expect(result.path.orderedSessionIds).toEqual([
      "st-decouverte-premiere-courte",
      "st-initiation-rituel-base",
      "st-progression-liaison-legere",
    ]);
  });

  it("valide les références de séances existantes", () => {
    expect(reader.validateSessionReferences()).toEqual({
      ok: true,
      missingSessionIds: [],
    });
  });

  it("retourne not_found pour un ID inconnu", () => {
    expect(reader.getPathById("path-inexistant")).toEqual({
      ok: false,
      reason: "not_found",
    });
  });

  it("retourne not_published lorsque le statut n’est pas published", () => {
    const draft: BeginnerPath = {
      ...localBeginnerPath,
      publicationStatus: "draft",
    };
    const draftReader = createBeginnerPathReader({
      getPath: () => draft,
    });
    expect(draftReader.getPublishedPath()).toEqual({
      ok: false,
      reason: "not_published",
    });
  });
});

describe("resolveBeginnerPathSteps — mapping MVP-012", () => {
  it("résout l’ordre pédagogique et les mouvements associés", () => {
    const result = resolveBeginnerPathSteps(localBeginnerPath);
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.steps.map((s) => s.session.id)).toEqual([
      "st-decouverte-premiere-courte",
      "st-initiation-rituel-base",
      "st-progression-liaison-legere",
    ]);
    expect(result.steps.map((s) => s.pedagogicalCue)).toEqual([
      "Commencer ici",
      "Ensuite",
      "Puis continuer",
    ]);
    expect(result.steps[0]!.movements.map((m) => m.id)).toEqual(["MV-001"]);
    expect(result.steps[1]!.movements.map((m) => m.id)).toEqual([
      "MV-001",
      "MV-002",
    ]);
    expect(result.steps[2]!.movements.map((m) => m.id)).toEqual([
      "MV-002",
      "MV-003",
    ]);
  });
});
