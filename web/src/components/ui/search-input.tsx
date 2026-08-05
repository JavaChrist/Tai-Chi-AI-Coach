"use client";

import { Search, X } from "lucide-react";
import type { ComponentProps } from "react";

import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type SearchInputProps = Omit<ComponentProps<typeof Input>, "type"> & {
  onClear?: () => void;
};

/**
 * Champ de recherche avec icône et effacement optionnel.
 */
export function SearchInput({
  className,
  onClear,
  value,
  "aria-label": ariaLabel = "Rechercher",
  ...props
}: SearchInputProps) {
  const hasValue = typeof value === "string" && value.length > 0;

  return (
    <div className="relative">
      <Search
        className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2"
        aria-hidden
      />
      <Input
        type="search"
        role="searchbox"
        aria-label={ariaLabel}
        value={value}
        className={cn("pr-10 pl-8", className)}
        {...props}
      />
      {onClear && hasValue ? (
        <IconButton
          type="button"
          size="icon-sm"
          className="text-muted-foreground absolute top-1/2 right-1 -translate-y-1/2"
          aria-label="Effacer la recherche"
          onClick={onClear}
        >
          <X className="size-4" aria-hidden />
        </IconButton>
      ) : null}
    </div>
  );
}
