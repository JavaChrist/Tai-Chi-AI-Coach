import { describe, expect, it } from "vitest";

import { localCurriculum } from "@/data/curriculum/local-curriculum";

const FORBIDDEN_USER_VISIBLE = [
  /placeholder/i,
  /ticket ultérieur/i,
  /hors périmètre/i,
  /bases à venir/i,
  /\bTODO\b/,
  /lorem ipsum/i,
  /Design Freeze/i,
  /\bF-0\d{2}\b/,
];

describe("localCurriculum — BUG-001 (contenus utilisateur)", () => {
  it("n’expose aucun jargon technique / placeholder dans les textes publiés", () => {
    const blobs: string[] = [];
    for (const session of localCurriculum.sessions) {
      blobs.push(
        session.title,
        session.shortDescription,
        session.description,
        ...session.objectives.map((o) => o.label),
        ...session.steps.flatMap((s) => [s.title, s.summary]),
      );
    }
    const joined = blobs.join("\n");
    for (const re of FORBIDDEN_USER_VISIBLE) {
      expect(joined, `interdit: ${re}`).not.toMatch(re);
    }
  });
});
