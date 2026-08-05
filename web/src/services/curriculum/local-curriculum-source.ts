import { localCurriculum } from "@/data/curriculum/local-curriculum";
import type { CurriculumSource } from "@/services/curriculum/curriculum-source";

export const localCurriculumSource: CurriculumSource = {
  getCurriculum: () => localCurriculum,
};
