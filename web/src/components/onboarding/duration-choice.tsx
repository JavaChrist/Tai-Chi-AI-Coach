"use client";

import { ChoiceCard } from "@/components/onboarding/choice-card";
import { PREFERRED_DURATION_OPTIONS } from "@/domain/preferences/defaults";
import { preferredDurationLabel } from "@/domain/preferences/labels";
import type { PreferredDurationMinutes } from "@/domain/preferences/types";

type DurationChoiceProps = {
  value: PreferredDurationMinutes;
  onChange: (minutes: PreferredDurationMinutes) => void;
};

export function DurationChoice({ value, onChange }: DurationChoiceProps) {
  return (
    <fieldset className="space-y-3">
      <legend className="sr-only">Durée préférée des séances</legend>
      {PREFERRED_DURATION_OPTIONS.map((minutes) => (
        <ChoiceCard
          key={minutes}
          name="preferred-duration"
          value={`${minutes}`}
          title={preferredDurationLabel(minutes)}
          description="Durée indicative pour mettre en avant des séances adaptées."
          selected={value === minutes}
          onSelect={() => onChange(minutes)}
        />
      ))}
    </fieldset>
  );
}
