import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-input bg-surface text-foreground h-11 min-h-11 w-full min-w-0 rounded-[var(--radius)] border px-4 py-2 text-body",
        "ease-calm duration-normal transition-colors outline-none",
        "placeholder:text-muted-foreground",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
        "file:inline-flex file:h-8 file:border-0 file:bg-transparent file:text-small file:font-medium file:text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
