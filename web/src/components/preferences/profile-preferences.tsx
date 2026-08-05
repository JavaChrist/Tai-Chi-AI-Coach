"use client";

import { Button } from "@/components/ui/button";
import { ProfileOnboardingSection } from "@/components/onboarding/profile-onboarding-section";
import { PreferenceSection } from "@/components/preferences/preference-section";
import { PreferenceSelect } from "@/components/preferences/preference-select";
import { PreferenceSwitch } from "@/components/preferences/preference-switch";
import { PreferenceCard } from "@/components/preferences/preference-card";
import { usePreferences } from "@/components/preferences/preferences-provider";
import { ErrorState } from "@/components/states/error-state";
import { PREFERRED_DURATION_OPTIONS } from "@/domain/preferences/defaults";
import {
  localePreferenceLabels,
  preferredDurationLabel,
  preferredLevelLabels,
  themePreferenceLabels,
} from "@/domain/preferences/labels";
import type {
  LocalePreference,
  PreferredDurationMinutes,
  ThemePreference,
} from "@/domain/preferences/types";
import type { DifficultyLevel } from "@/domain/curriculum/types";
import { availableLocales, getMessages } from "@/i18n";
import { BRAND_NAME } from "@/config/assets";

const APP_VERSION = "0.1.0";

export function ProfilePreferences() {
  const {
    preferences,
    status,
    loadError,
    isSaving,
    saveError,
    patchPreferences,
    reload,
  } = usePreferences();

  const messages = getMessages(preferences.locale);
  const t = messages.profile;

  if (status === "error") {
    return (
      <ErrorState
        title="Lecture des préférences impossible"
        description={loadError ?? t.loadError}
        action={
          <Button type="button" variant="secondary" onClick={reload}>
            {t.retry}
          </Button>
        }
      />
    );
  }

  return (
    <div className="space-y-10">
      <div className="sr-only" aria-live="polite">
        {isSaving ? t.saving : null}
        {saveError ? saveError : null}
      </div>

      {saveError ? (
        <p role="alert" className="text-destructive text-sm">
          {saveError}
        </p>
      ) : null}

      <ProfileOnboardingSection />

      <PreferenceSection id="appearance" title={t.appearance}>
        <PreferenceSelect<ThemePreference>
          title={t.theme}
          description={t.themeHelp}
          value={preferences.theme}
          options={(
            Object.keys(themePreferenceLabels) as ThemePreference[]
          ).map((value) => ({
            value,
            label: themePreferenceLabels[value],
          }))}
          onValueChange={(theme) =>
            patchPreferences((current) => ({ ...current, theme }))
          }
          disabled={isSaving}
        />
        <PreferenceSelect<LocalePreference>
          title={t.language}
          description={t.languageHelp}
          value={preferences.locale}
          options={availableLocales.map((value) => ({
            value,
            label: localePreferenceLabels[value],
          }))}
          onValueChange={(locale) =>
            patchPreferences((current) => ({ ...current, locale }))
          }
          disabled={isSaving}
        />
      </PreferenceSection>

      <PreferenceSection id="practice" title={t.practice}>
        <PreferenceSelect<`${PreferredDurationMinutes}`>
          title={t.preferredDuration}
          description={t.preferredDurationHelp}
          value={`${preferences.practice.preferredDurationMinutes}`}
          options={PREFERRED_DURATION_OPTIONS.map((minutes) => ({
            value: `${minutes}` as `${PreferredDurationMinutes}`,
            label: preferredDurationLabel(minutes),
          }))}
          onValueChange={(value) => {
            const minutes = Number(value) as PreferredDurationMinutes;
            patchPreferences((current) => ({
              ...current,
              practice: {
                ...current.practice,
                preferredDurationMinutes: minutes,
              },
            }));
          }}
          disabled={isSaving}
        />
        <PreferenceSelect<DifficultyLevel>
          title={t.preferredLevel}
          description={t.preferredLevelHelp}
          value={preferences.practice.preferredLevel}
          options={(
            Object.keys(preferredLevelLabels) as DifficultyLevel[]
          ).map((value) => ({
            value,
            label: preferredLevelLabels[value],
          }))}
          onValueChange={(preferredLevel) =>
            patchPreferences((current) => ({
              ...current,
              practice: { ...current.practice, preferredLevel },
            }))
          }
          disabled={isSaving}
        />
        <PreferenceSwitch
          title={t.showTips}
          description={t.showTipsHelp}
          checked={preferences.practice.showTips}
          onCheckedChange={(showTips) =>
            patchPreferences((current) => ({
              ...current,
              practice: { ...current.practice, showTips },
            }))
          }
          disabled={isSaving}
        />
      </PreferenceSection>

      <PreferenceSection id="accessibility" title={t.accessibility}>
        <PreferenceSwitch
          title={t.reduceMotion}
          description={t.reduceMotionHelp}
          checked={preferences.accessibility.reduceMotion}
          onCheckedChange={(reduceMotion) =>
            patchPreferences((current) => ({
              ...current,
              accessibility: { ...current.accessibility, reduceMotion },
            }))
          }
          disabled={isSaving}
        />
      </PreferenceSection>

      <PreferenceSection id="about" title={t.about}>
        <PreferenceCard title={t.version} description={`${BRAND_NAME} · ${APP_VERSION}`} />
        <PreferenceCard title={t.storage} description={t.storageLocal} />
      </PreferenceSection>
    </div>
  );
}
