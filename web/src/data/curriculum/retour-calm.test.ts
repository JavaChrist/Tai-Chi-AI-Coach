import { describe, expect, it } from "vitest";

import { localCurriculum } from "@/data/curriculum/local-curriculum";
import { localBeginnerPath } from "@/data/beginner-path/local-beginner-path";

const FORBIDDEN_RESPIRATION_PROTOCOL = [
  "4-4",
  "4-7-8",
  "box breathing",
  "apnée",
  "inspiration",
  "expiration",
  "comptez",
  "compter",
  "timer",
  "rythme imposé",
  "guérison",
  "thérapeutique",
  "traitement",
  "médical",
];

describe("F-015 — Retour au calme (steps retour)", () => {
  const pathSessions = localBeginnerPath.orderedSessionIds.map((id) => {
    const session = localCurriculum.sessions.find((item) => item.id === id);
    if (!session) throw new Error(`Session manquante: ${id}`);
    return session;
  });

  it("présence d’un step retour dans les 3 séances du BeginnerPath", () => {
    for (const session of pathSessions) {
      const retour = session.steps.filter((step) => step.kind === "retour");
      expect(retour.length).toBe(1);
      expect(retour[0]!.title.toLowerCase()).toContain("retour");
      expect(retour[0]!.summary.trim().length).toBeGreaterThan(20);
    }
  });

  it("le retour précède la clôture (ordre avant fin de séance)", () => {
    for (const session of pathSessions) {
      const retourIndex = session.steps.findIndex((s) => s.kind === "retour");
      const clotureIndex = session.steps.findIndex((s) => s.kind === "cloture");
      expect(retourIndex).toBeGreaterThanOrEqual(0);
      expect(clotureIndex).toBeGreaterThan(retourIndex);
      expect(session.steps[retourIndex]!.sortOrder).toBeLessThan(
        session.steps[clotureIndex]!.sortOrder,
      );
    }
  });

  it("contenu non médical — aucun protocole respiratoire inventé", () => {
    for (const session of pathSessions) {
      const retour = session.steps.find((s) => s.kind === "retour")!;
      const blob = `${retour.title} ${retour.summary}`.toLowerCase();
      for (const forbidden of FORBIDDEN_RESPIRATION_PROTOCOL) {
        expect(blob).not.toContain(forbidden.toLowerCase());
      }
    }
  });
});
