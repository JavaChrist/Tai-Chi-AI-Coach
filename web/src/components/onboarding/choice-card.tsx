"use client";

import { cn } from "@/lib/utils";

type ChoiceCardProps = {
  title: string;
  description: string;
  selected: boolean;
  onSelect: () => void;
  name: string;
  value: string;
};

export function ChoiceCard({
  title,
  description,
  selected,
  onSelect,
  name,
  value,
}: ChoiceCardProps) {
  const id = `${name}-${value}`;

  return (
    <label
      htmlFor={id}
      className={cn(
        "border-border bg-card block cursor-pointer rounded-xl border p-4 transition-colors",
        "hover:border-primary/40 focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-3",
        selected && "border-primary bg-primary/5 ring-primary/20 ring-2",
      )}
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={onSelect}
        className="sr-only"
      />
      <span className="font-heading text-base font-medium">{title}</span>
      <span className="text-muted-foreground mt-1 block text-sm leading-relaxed">
        {description}
      </span>
    </label>
  );
}
