import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type PracticeProgressProps = {
  label: string;
  current: number;
  total: number;
  className?: string;
};

export function PracticeProgress({
  label,
  current,
  total,
  className,
}: PracticeProgressProps) {
  const safeTotal = Math.max(total, 1);
  const value = Math.min(100, Math.round((current / safeTotal) * 100));

  return (
    <div className={cn("space-y-2", className)}>
      <div className="text-muted-foreground flex items-center justify-between text-caption">
        <span>{label}</span>
        <span>
          {Math.min(current, total)} / {total}
        </span>
      </div>
      <Progress value={value} aria-label={label} />
    </div>
  );
}
