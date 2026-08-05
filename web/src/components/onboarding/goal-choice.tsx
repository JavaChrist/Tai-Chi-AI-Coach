"use client";

import { ChoiceCard } from "@/components/onboarding/choice-card";
import { learningGoalOptions } from "@/domain/onboarding/labels";
import type { LearningGoal } from "@/domain/onboarding/types";

type GoalChoiceProps = {
  value: LearningGoal | null;
  onChange: (goal: LearningGoal) => void;
};

export function GoalChoice({ value, onChange }: GoalChoiceProps) {
  return (
    <fieldset className="space-y-4">
      <legend className="sr-only">Objectif principal</legend>
      {learningGoalOptions.map((option) => (
        <ChoiceCard
          key={option.value}
          name="learning-goal"
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
