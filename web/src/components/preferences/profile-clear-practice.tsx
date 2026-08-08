"use client";

import { useState } from "react";

import { ConfirmationDialog } from "@/components/dialogs/confirmation-dialog";
import { PreferenceCard } from "@/components/preferences/preference-card";
import { PreferenceSection } from "@/components/preferences/preference-section";
import { usePreferences } from "@/components/preferences/preferences-provider";
import { Button } from "@/components/ui/button";
import { getMessages } from "@/i18n";
import { clearPracticeData } from "@/services/practice-data/clear-practice-data";

/** PO-E — wipe historique + reprise ; prefs / onboarding intacts. */
export function ProfileClearPractice() {
  const { preferences } = usePreferences();
  const t = getMessages(preferences.locale).profile;
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onConfirm = () => {
    try {
      clearPracticeData();
      setDone(true);
      setError(null);
    } catch {
      setError("Impossible d’effacer les données de pratique.");
      setDone(false);
    }
  };

  return (
    <>
      <PreferenceSection
        id="practice-data"
        title={t.clearPractice}
        description="Action définitive — efface uniquement l’historique et la reprise sur cet appareil."
      >
        <PreferenceCard
          title={t.clearPracticeAction}
          description={t.clearPracticeHelp}
          action={
            <Button
              type="button"
              variant="secondary"
              size="sm"
              data-testid="profile-clear-practice"
              onClick={() => setOpen(true)}
            >
              {t.clearPracticeAction}
            </Button>
          }
        />
        {done ? (
          <p
            className="text-small text-foreground"
            role="status"
            data-testid="profile-clear-practice-done"
          >
            {t.clearPracticeDone}
          </p>
        ) : null}
        {error ? (
          <p role="alert" className="text-destructive text-small">
            {error}
          </p>
        ) : null}
      </PreferenceSection>

      <ConfirmationDialog
        open={open}
        onOpenChange={setOpen}
        title={t.clearPracticeConfirmTitle}
        description={t.clearPracticeConfirmDescription}
        confirmLabel={t.clearPracticeConfirmLabel}
        cancelLabel={t.clearPracticeCancelLabel}
        destructive
        onConfirm={onConfirm}
      />
    </>
  );
}
