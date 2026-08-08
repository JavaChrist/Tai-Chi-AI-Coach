import type { BeginnerPath } from "@/domain/beginner-path/types";
import type { BeginnerPathSource } from "@/services/beginner-path/beginner-path-source";
import { localBeginnerPathSource } from "@/services/beginner-path/local-beginner-path-source";
import type { CurriculumSource } from "@/services/curriculum/curriculum-source";
import { localCurriculumSource } from "@/services/curriculum/local-curriculum-source";

export type GetBeginnerPathResult =
  | { ok: true; path: BeginnerPath }
  | { ok: false; reason: "not_found" | "not_published" };

export type BeginnerPathIntegrity = {
  ok: boolean;
  missingSessionIds: string[];
};

export type BeginnerPathReader = {
  getPublishedPath: () => GetBeginnerPathResult;
  getPathById: (pathId: string) => GetBeginnerPathResult;
  /** Vérifie que les SessionTemplate référencés existent. */
  validateSessionReferences: (
    curriculumSource?: CurriculumSource,
  ) => BeginnerPathIntegrity;
};

export function createBeginnerPathReader(
  source: BeginnerPathSource,
): BeginnerPathReader {
  return {
    getPublishedPath() {
      const path = source.getPath();
      if (path.publicationStatus !== "published") {
        return { ok: false, reason: "not_published" };
      }
      return { ok: true, path };
    },

    getPathById(pathId) {
      const path = source.getPath();
      if (path.id !== pathId.trim()) {
        return { ok: false, reason: "not_found" };
      }
      if (path.publicationStatus !== "published") {
        return { ok: false, reason: "not_published" };
      }
      return { ok: true, path };
    },

    validateSessionReferences(curriculumSource = localCurriculumSource) {
      const known = new Set(
        curriculumSource.getCurriculum().sessions.map((session) => session.id),
      );
      const missingSessionIds = source
        .getPath()
        .orderedSessionIds.filter((id) => !known.has(id));
      return {
        ok: missingSessionIds.length === 0,
        missingSessionIds,
      };
    },
  };
}

/** Lecteur par défaut — données locales embarquées. */
export const beginnerPathReader = createBeginnerPathReader(
  localBeginnerPathSource,
);
