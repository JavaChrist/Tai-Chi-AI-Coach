import type { BeginnerPath } from "@/domain/beginner-path/types";

export type BeginnerPathSource = {
  getPath: () => BeginnerPath;
};
