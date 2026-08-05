import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type LoadingStateProps = {
  label?: string;
  className?: string;
};

/** Chargement — Skeleton prioritaire, spinner secondaire (12A §7.9 / ticket §53). */
export function LoadingState({
  label = "Un instant…",
  className,
}: LoadingStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={cn("space-y-5 px-4 py-12", className)}
    >
      <span className="sr-only">{label}</span>
      <Skeleton className="h-9 w-2/3 max-w-xs" />
      <div className="space-y-3">
        <Skeleton className="h-4 w-full max-w-md" />
        <Skeleton className="h-4 w-5/6 max-w-sm" />
        <Skeleton className="h-4 w-4/6 max-w-xs" />
      </div>
      <Skeleton className="h-28 w-full max-w-md rounded-card" />
    </div>
  );
}
