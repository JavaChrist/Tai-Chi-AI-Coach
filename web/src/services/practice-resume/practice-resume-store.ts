import type { PracticeResumeState } from "@/domain/practice/resume-types";

/**
 * Contrat de stockage reprise — localStorage aujourd’hui.
 * Les composants UI ne manipulent pas les clés directement.
 */
export type PracticeResumeStore = {
  load: () => PracticeResumeState | null;
  save: (state: PracticeResumeState) => void;
  clear: () => void;
};
