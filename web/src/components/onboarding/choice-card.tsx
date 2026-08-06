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
        "border-border bg-card/88 shadow-medium block cursor-pointer rounded-card border p-6",
        "ease-calm duration-normal transition-colors",
        "hover:border-primary/40 focus-within:border-ring focus-within:ring-ring/40 focus-within:ring-3",
        selected && "border-primary bg-primary/5 ring-primary/15 ring-2",
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
      <span className="text-h3 text-foreground block">{title}</span>
      <span className="text-small text-muted-foreground mt-2 block">
        {description}
      </span>
    </label>
  );
}
