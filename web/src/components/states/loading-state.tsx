import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

type LoadingStateProps = {
  label?: string;
  className?: string;
};

/** État de chargement calme, non anxiogène. */
export function LoadingState({
  label = "Chargement en cours…",
  className,
}: LoadingStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex flex-col items-center justify-center gap-3 px-4 py-10 text-center",
        className,
      )}
    >
      <Spinner className="text-primary size-6" aria-label={label} />
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
}
