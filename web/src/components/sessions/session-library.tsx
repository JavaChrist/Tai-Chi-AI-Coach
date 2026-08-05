"use client";

import { useMemo } from "react";

import { usePreferences } from "@/components/preferences/preferences-provider";
import { SessionList } from "@/components/sessions/session-list";
import type { SessionTemplateSummary } from "@/domain/curriculum/types";
import { sortSessionsByPreferences } from "@/domain/preferences/sort-sessions";

type SessionLibraryProps = {
  sessions: SessionTemplateSummary[];
};

/** Liste bibliothèque personnalisée selon les préférences locales. */
export function SessionLibrary({ sessions }: SessionLibraryProps) {
  const { preferences, status } = usePreferences();

  const ordered = useMemo(() => {
    if (status !== "ready") return sessions;
    return sortSessionsByPreferences(sessions, preferences.practice);
  }, [preferences.practice, sessions, status]);

  return <SessionList sessions={ordered} />;
}
