import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-secondary/80 motion-safe:animate-pulse rounded-[var(--radius)]",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
