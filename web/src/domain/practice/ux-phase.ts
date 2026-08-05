import type { SessionStepKind } from "@/domain/curriculum/types";

/** Phases UX séance (`docs/12_UX_UI.md` §13) mappées depuis le cursus. */
export type SessionUxPhase =
  | "introduction"
  | "preparation"
  | "pratique"
  | "retour"
  | "bilan";

export const sessionUxPhaseLabels: Record<SessionUxPhase, string> = {
  introduction: "Introduction",
  preparation: "Préparation",
  pratique: "Pratique",
  retour: "Retour au calme",
  bilan: "Bilan",
};

export function mapStepKindToUxPhase(kind: SessionStepKind): SessionUxPhase {
  switch (kind) {
    case "preparation":
    case "entree":
      return "preparation";
    case "corps":
    case "liaison":
      return "pratique";
    case "retour":
      return "retour";
    case "cloture":
      return "bilan";
    default:
      return "pratique";
  }
}
