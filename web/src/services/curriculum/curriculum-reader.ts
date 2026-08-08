import type {
  Curriculum,
  CurriculumPhase,
  SessionListFilters,
  SessionTemplate,
  SessionTemplateSummary,
} from "@/domain/curriculum/types";
import { findBrokenMovementReferences } from "@/domain/curriculum/session-movement-links";
import type { CurriculumSource } from "@/services/curriculum/curriculum-source";
import { localCurriculumSource } from "@/services/curriculum/local-curriculum-source";

export type GetSessionResult =
  | { ok: true; session: SessionTemplate }
  | { ok: false; reason: "not_found" };

export type MovementLinkValidation = {
  ok: boolean;
  broken: Array<{ sessionId: string; stepId: string; movementId: string }>;
};

export type CurriculumReader = {
  getCurriculum: () => Curriculum;
  listPhases: () => CurriculumPhase[];
  listSessions: (filters?: SessionListFilters) => SessionTemplateSummary[];
  getSessionById: (id: string) => GetSessionResult;
  /**
   * Vérifie que les Movement IDs référencés par les steps existent.
   * Pas de base de données — catalogue injecté (tests / boot).
   */
  validateMovementLinks: (
    knownMovementIds: ReadonlySet<string>,
  ) => MovementLinkValidation;
};

function isAvailable(session: SessionTemplate): boolean {
  return session.publicationStatus === "published";
}

function toSummary(session: SessionTemplate): SessionTemplateSummary {
  return {
    id: session.id,
    title: session.title,
    shortDescription: session.shortDescription,
    difficulty: session.difficulty,
    curriculumPhaseKey: session.curriculumPhaseKey,
    plannedDurationMinutes: session.plannedDurationMinutes,
    primaryObjectiveLabel: session.objectives[0]?.label ?? null,
    publicationStatus: session.publicationStatus,
    isAvailable: isAvailable(session),
    isStructuralPlaceholder: session.isStructuralPlaceholder,
    sortOrder: session.sortOrder,
  };
}

function matchesFilters(
  session: SessionTemplate,
  filters: SessionListFilters = {},
): boolean {
  const statusFilter = filters.publicationStatus ?? "published";
  if (statusFilter !== "any" && session.publicationStatus !== statusFilter) {
    return false;
  }

  if (filters.availableOnly && !isAvailable(session)) {
    return false;
  }

  if (filters.difficulty && session.difficulty !== filters.difficulty) {
    return false;
  }

  if (
    filters.curriculumPhaseKey &&
    session.curriculumPhaseKey !== filters.curriculumPhaseKey
  ) {
    return false;
  }

  return true;
}

export function createCurriculumReader(source: CurriculumSource): CurriculumReader {
  return {
    getCurriculum() {
      return source.getCurriculum();
    },

    listPhases() {
      return [...source.getCurriculum().phases].sort(
        (a, b) => a.sortOrder - b.sortOrder,
      );
    },

    listSessions(filters = {}) {
      return source
        .getCurriculum()
        .sessions.filter((session) => matchesFilters(session, filters))
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map(toSummary);
    },

    getSessionById(id) {
      const session = source
        .getCurriculum()
        .sessions.find((item) => item.id === id);

      if (!session) {
        return { ok: false, reason: "not_found" };
      }

      return { ok: true, session };
    },

    validateMovementLinks(knownMovementIds) {
      const broken = findBrokenMovementReferences(
        source.getCurriculum(),
        knownMovementIds,
      );
      return { ok: broken.length === 0, broken };
    },
  };
}

/** Lecteur par défaut — données locales embarquées. */
export const curriculumReader = createCurriculumReader(localCurriculumSource);
