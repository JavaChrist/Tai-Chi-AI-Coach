"use client";

import { useId } from "react";

import { PreferenceCard } from "@/components/preferences/preference-card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export type PreferenceSelectOption<T extends string> = {
  value: T;
  label: string;
};

type PreferenceSelectProps<T extends string> = {
  title: string;
  description?: string;
  value: T;
  options: PreferenceSelectOption<T>[];
  onValueChange: (value: T) => void;
  disabled?: boolean;
};

export function PreferenceSelect<T extends string>({
  title,
  description,
  value,
  options,
  onValueChange,
  disabled,
}: PreferenceSelectProps<T>) {
  const id = useId();

  return (
    <PreferenceCard title={title} description={description}>
      <div className="space-y-2">
        <Label htmlFor={id} className="text-small text-muted-foreground">
          {title}
        </Label>
        <select
          id={id}
          value={value}
          disabled={disabled}
          onChange={(event) => onValueChange(event.target.value as T)}
          className={cn(
            "border-input bg-surface text-foreground h-11 min-h-11 w-full rounded-[var(--radius)] border px-3 text-body outline-none",
            "ease-calm duration-normal transition-colors",
            "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40",
            "disabled:cursor-not-allowed disabled:opacity-50",
          )}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </PreferenceCard>
  );
}
