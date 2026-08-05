"use client";

import { Monitor, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/theme-provider";
import { themePreferenceLabels } from "@/domain/preferences/labels";

export function ThemeToggle() {
  const { themePreference, toggleTheme } = useTheme();

  const Icon =
    themePreference === "dark"
      ? Moon
      : themePreference === "light"
        ? Sun
        : Monitor;

  const label = `Thème : ${themePreferenceLabels[themePreference]}. Changer le thème.`;

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={label}
      title={`Thème : ${themePreferenceLabels[themePreference]}`}
    >
      <Icon className="size-5" aria-hidden />
    </Button>
  );
}
