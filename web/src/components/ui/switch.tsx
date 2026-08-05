"use client";

import type { ComponentProps } from "react";
import { Switch as SwitchPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border border-transparent",
        "bg-input ease-calm duration-normal transition-colors outline-none",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40",
        "disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-surface pointer-events-none block size-6 translate-x-0.5 rounded-full shadow-small ring-0",
          "ease-calm duration-normal transition-transform data-[state=checked]:translate-x-[1.35rem]",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
