import { describe, expect, it } from "vitest";

import {
  POST_ONBOARDING_BEGINNER_PATH_HREF,
  POST_ONBOARDING_COMPLETE_HREF,
  POST_ONBOARDING_SKIP_HREF,
} from "@/domain/onboarding/post-onboarding-routes";

describe("Post-onboarding routes (contrat MVP-016)", () => {
  it("conserve complete → /decouverte et skip → /bibliotheque", () => {
    expect(POST_ONBOARDING_COMPLETE_HREF).toBe("/decouverte");
    expect(POST_ONBOARDING_SKIP_HREF).toBe("/bibliotheque");
  });

  it("expose un accès secondaire BeginnerPath distinct du redirect primaire", () => {
    expect(POST_ONBOARDING_BEGINNER_PATH_HREF).toBe("/parcours/debutant");
    expect(POST_ONBOARDING_BEGINNER_PATH_HREF).not.toBe(
      POST_ONBOARDING_COMPLETE_HREF,
    );
  });
});
