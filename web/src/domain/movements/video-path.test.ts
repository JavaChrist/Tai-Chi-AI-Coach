import { describe, expect, it } from "vitest";

import {
  MOVEMENT_VIDEO_DIR,
  movementDemoVideoPath,
} from "@/domain/movements/video-path";

describe("contrat chemins vidéo F-006", () => {
  it("construit le locator futur attendu", () => {
    expect(MOVEMENT_VIDEO_DIR).toBe("/video/movements");
    expect(movementDemoVideoPath("posture-de-depart")).toBe(
      "/video/movements/movement-posture-de-depart-demo.mp4",
    );
    expect(movementDemoVideoPath("transfert-poids-lateral")).toBe(
      "/video/movements/movement-transfert-poids-lateral-demo.mp4",
    );
    expect(movementDemoVideoPath("pas-avant-controle")).toBe(
      "/video/movements/movement-pas-avant-controle-demo.mp4",
    );
  });
});
