import { Loader2Icon } from "lucide-react";

import { cn } from "@/lib/utils";

function Spinner({
  className,
  "aria-label": ariaLabel = "Chargement",
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      data-slot="spinner"
      role="status"
      aria-label={ariaLabel}
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

export { Spinner };
