import { describe, expect, it } from "vitest";

import type { Curriculum } from "@/domain/curriculum/types";
import { createCurriculumReader } from "@/services/curriculum/curriculum-reader";
import { localCurriculumSource } from "@/services/curriculum/local-curriculum-source";

const emptyCurriculum: Curriculum = {
  id: "curriculum-empty",
  title: "Vide",
  contentVersion: "0.0.0",
  locale: "fr",
  phases: [],
  sessions: [],
};

describe("curriculumReader — source locale", () => {
  const reader = createCurriculumReader(localCurriculumSource);

  it("liste les séances publiées disponibles", () => {
    const sessions = reader.listSessions({
      publicationStatus: "published",
      availableOnly: true,
    });

    expect(sessions.length).toBeGreaterThan(0);
    expect(sessions.every((session) => session.isAvailable)).toBe(true);
    expect(sessions.every((session) => session.publicationStatus === "published")).toBe(
      true,
    );
  });

  it("récupère une séance par identifiant stable", () => {
    const result = reader.getSessionById("st-decouverte-premiere-courte");

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.session.title).toBe("Première séance courte");
      expect(result.session.steps.length).toBeGreaterThan(0);
    }
  });

  it("retourne not_found pour un identifiant inconnu", () => {
    const result = reader.getSessionById("seance-inexistante");

    expect(result).toEqual({ ok: false, reason: "not_found" });
  });

  it("filtre par difficulté", () => {
    const sessions = reader.listSessions({
      publicationStatus: "published",
      difficulty: "debutant",
    });

    expect(sessions.length).toBeGreaterThan(0);
    expect(sessions.every((session) => session.difficulty === "debutant")).toBe(true);
  });
});

describe("curriculumReader — source vide", () => {
  it("renvoie une liste vide lorsque la source n’a aucune séance", () => {
    const reader = createCurriculumReader({
      getCurriculum: () => emptyCurriculum,
    });

    expect(reader.listSessions()).toEqual([]);
  });
});

describe("SessionList — contrat d’affichage vide", () => {
  it("traite une liste vide comme absence de séances (état bibliothèque vide)", () => {
    const reader = createCurriculumReader({
      getCurriculum: () => emptyCurriculum,
    });
    const sessions = reader.listSessions();

    // Contrat UI : SessionList bascule sur EmptyState si length === 0
    expect(sessions).toHaveLength(0);
  });
});
