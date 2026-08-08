/**
 * Progression parcours (F-010) — calculée, jamais persistée.
 */

import type { BeginnerPath } from "@/domain/beginner-path/types";
import type { PracticeHistory } from "@/domain/progression/types";

export type PathStepProgressStatus = "not_started" | "started" | "completed";

export type PathStepProgress = {
  sessionId: string;
  status: PathStepProgressStatus;
};

export type ProgressSummary = {
  pathId: string;
  steps: PathStepProgress[];
  /** Première séance du path jamais `completed` ; null si tout est complété. */
  nextSessionId: string | null;
  allCompleted: boolean;
};

export function computePathStepStatus(
  history: PracticeHistory,
  sessionId: string,
): PathStepProgressStatus {
  const records = history.records.filter(
    (record) => record.sessionTemplateId === sessionId,
  );
  if (records.length === 0) return "not_started";
  if (records.some((record) => record.status === "completed")) {
    return "completed";
  }
  return "started";
}

export function computeProgressSummary(
  path: BeginnerPath,
  history: PracticeHistory,
): ProgressSummary {
  const steps = path.orderedSessionIds.map((sessionId) => ({
    sessionId,
    status: computePathStepStatus(history, sessionId),
  }));

  const nextSessionId =
    steps.find((step) => step.status !== "completed")?.sessionId ?? null;

  return {
    pathId: path.id,
    steps,
    nextSessionId,
    allCompleted: nextSessionId === null && steps.length > 0,
  };
}

/** Libellés sobres — compréhensibles sans couleur. */
export function pathStepStatusLabel(status: PathStepProgressStatus): string {
  switch (status) {
    case "not_started":
      return "Non abordée";
    case "started":
      return "Commencée";
    case "completed":
      return "Déjà pratiquée";
  }
}
