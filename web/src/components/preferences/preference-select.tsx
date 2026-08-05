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
        <Label htmlFor={id} className="sr-only">
          {title}
        </Label>
        <select
          id={id}
          value={value}
          disabled={disabled}
          onChange={(event) => onValueChange(event.target.value as T)}
          className={cn(
            "border-input bg-background text-foreground h-10 w-full rounded-lg border px-3 text-sm outline-none",
            "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
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
