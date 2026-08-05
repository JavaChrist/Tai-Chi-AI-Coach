"use client";

import { ChoiceCard } from "@/components/onboarding/choice-card";
import { initialLevelOptions } from "@/domain/onboarding/labels";
import type { InitialLevel } from "@/domain/onboarding/types";

type LevelChoiceProps = {
  value: InitialLevel | null;
  onChange: (level: InitialLevel) => void;
};

export function LevelChoice({ value, onChange }: LevelChoiceProps) {
  return (
    <fieldset className="space-y-4">
      <legend className="sr-only">Niveau initial</legend>
      {initialLevelOptions.map((option) => (
        <ChoiceCard
          key={option.value}
          name="initial-level"
          value={option.value}
          title={option.label}
          description={option.description}
          selected={value === option.value}
          onSelect={() => onChange(option.value)}
        />
      ))}
    </fieldset>
  );
}
