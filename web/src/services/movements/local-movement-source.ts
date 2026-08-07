import { localMovements } from "@/data/movements/local-movements";
import type { MovementSource } from "@/services/movements/movement-source";

export const localMovementSource: MovementSource = {
  getCatalog: () => localMovements,
};
