import {
  movementCategoryLabels,
  movementLevelLabels,
} from "@/domain/movements/labels";
import type { MovementCategory, MovementLevel } from "@/domain/movements/types";
import { cn } from "@/lib/utils";

type MovementMetadataProps = {
  level: MovementLevel;
  category: MovementCategory;
  className?: string;
};

export function MovementMetadata({
  level,
  category,
  className,
}: MovementMetadataProps) {
  return (
    <p
      className={cn("text-small text-muted-foreground", className)}
      data-testid="movement-metadata"
    >
      <span>{movementLevelLabels[level]}</span>
      <span aria-hidden> · </span>
      <span>{movementCategoryLabels[category]}</span>
    </p>
  );
}
