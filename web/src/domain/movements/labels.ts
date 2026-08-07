import type { MovementCategory, MovementLevel } from "@/domain/movements/types";

export const movementLevelLabels: Record<MovementLevel, string> = {
  initiation: "Initiation",
};

export const movementCategoryLabels: Record<MovementCategory, string> = {
  fondamentaux: "Fondamentaux",
  deplacement: "Déplacement",
};
