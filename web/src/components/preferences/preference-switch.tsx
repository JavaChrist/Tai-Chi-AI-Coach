"use client";

import { useId } from "react";

import { PreferenceCard } from "@/components/preferences/preference-card";
import { Switch } from "@/components/ui/switch";

type PreferenceSwitchProps = {
  title: string;
  description?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
};

export function PreferenceSwitch({
  title,
  description,
  checked,
  onCheckedChange,
  disabled,
}: PreferenceSwitchProps) {
  const id = useId();

  return (
    <PreferenceCard
      title={title}
      description={description}
      action={
        <Switch
          id={id}
          checked={checked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          aria-label={title}
        />
      }
    />
  );
}
