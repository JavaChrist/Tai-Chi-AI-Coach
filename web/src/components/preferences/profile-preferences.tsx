"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ProfileOnboardingSection } from "@/components/onboarding/profile-onboarding-section";
import { ProfileClearPractice } from "@/components/preferences/profile-clear-practice";
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
import { DISCOVERY_PATH } from "@/domain/discovery/content";
import { SAFETY_ADVICE_PATH } from "@/domain/safety/content";
import { availableLocales, getMessages } from "@/i18n";
import { BRAND_NAME } from "@/config/assets";
import { APP_BUILD_ID, APP_PACKAGE_VERSION } from "@/lib/pwa/build-id";

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
    <div className="mx-auto max-w-reading space-y-14">
      <div className="sr-only" aria-live="polite">
        {isSaving ? t.saving : null}
        {saveError ? saveError : null}
      </div>

      {saveError ? (
        <p role="alert" className="text-destructive text-small">
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

      <ProfileClearPractice />

      <PreferenceSection id="about" title={t.about}>
        <PreferenceCard
          title={t.discovery}
          description={t.discoveryHelp}
          action={
            <Button variant="secondary" size="sm" asChild>
              <Link href={DISCOVERY_PATH} data-testid="profile-discovery-link">
                {t.discoveryAction}
              </Link>
            </Button>
          }
        />
        <PreferenceCard
          title={t.safetyAdvice}
          description={t.safetyAdviceHelp}
          action={
            <Button variant="secondary" size="sm" asChild>
              <Link
                href={SAFETY_ADVICE_PATH}
                data-testid="profile-safety-advice-link"
              >
                {t.safetyAdviceAction}
              </Link>
            </Button>
          }
        />
        <PreferenceCard
          title={t.version}
          description={`${BRAND_NAME} · ${APP_PACKAGE_VERSION}`}
        />
        <PreferenceCard title={t.buildId} description={APP_BUILD_ID} />
        <PreferenceCard title={t.storage} description={t.storageLocal} />
      </PreferenceSection>
    </div>
  );
}
