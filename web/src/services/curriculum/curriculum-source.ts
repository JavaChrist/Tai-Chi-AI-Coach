import type { Curriculum } from "@/domain/curriculum/types";

/**
 * Source de curriculum remplaçable (locale aujourd’hui, distante plus tard).
 * Aucune API réseau dans MVP-003.
 */
export type CurriculumSource = {
  getCurriculum: () => Curriculum;
};
