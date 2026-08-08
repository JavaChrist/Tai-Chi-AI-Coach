"use client";

import { useSyncExternalStore } from "react";

import { BeginnerPathView } from "@/components/beginner-path/beginner-path-view";
import type { BeginnerPath } from "@/domain/beginner-path/types";
import { emptyHistory } from "@/domain/progression/statistics";
import { computeProgressSummary } from "@/domain/progression/progress-summary";
import type { PracticeHistory } from "@/domain/progression/types";
import type { ResolvedBeginnerPathStep } from "@/services/beginner-path/resolve-beginner-path-steps";
import {
  getProgressService,
  PROGRESS_UPDATED_EVENT,
} from "@/services/progression/progress-service";

type BeginnerPathProgressProps = {
  path: BeginnerPath;
  steps: ResolvedBeginnerPathStep[];
};

function subscribe(onStoreChange: () => void) {
  const handler = () => {
    cachedKey = "stale";
    onStoreChange();
  };
  window.addEventListener("storage", handler);
  window.addEventListener(PROGRESS_UPDATED_EVENT, handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(PROGRESS_UPDATED_EVENT, handler);
  };
}

const EMPTY_HISTORY: PracticeHistory = emptyHistory();

let cachedHistory: PracticeHistory = EMPTY_HISTORY;
let cachedKey = "empty";

function getHistory(): PracticeHistory {
  try {
    const history = getProgressService().getHistory();
    const key = JSON.stringify(history);
    if (cachedKey === key) return cachedHistory;
    cachedHistory = history;
    cachedKey = key;
    return cachedHistory;
  } catch {
    cachedHistory = EMPTY_HISTORY;
    cachedKey = "error";
    return cachedHistory;
  }
}

function getServerHistory(): PracticeHistory {
  return EMPTY_HISTORY;
}

/** Enrichit le parcours F-003 avec la progression F-010 calculée. */
export function BeginnerPathProgress({
  path,
  steps,
}: BeginnerPathProgressProps) {
  const history = useSyncExternalStore(subscribe, getHistory, getServerHistory);
  const summary = computeProgressSummary(path, history);

  return (
    <BeginnerPathView path={path} steps={steps} progressSummary={summary} />
  );
}
