import { localBeginnerPath } from "@/data/beginner-path/local-beginner-path";
import type { BeginnerPathSource } from "@/services/beginner-path/beginner-path-source";

export const localBeginnerPathSource: BeginnerPathSource = {
  getPath: () => localBeginnerPath,
};
