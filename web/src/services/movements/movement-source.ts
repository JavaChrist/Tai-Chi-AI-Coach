import type { MovementCatalog } from "@/domain/movements/types";

export type MovementSource = {
  getCatalog: () => MovementCatalog;
};
