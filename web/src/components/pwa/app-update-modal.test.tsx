import { describe, expect, it } from "vitest";

import { fr } from "@/i18n/messages/fr";

describe("AppUpdateModal — messages", () => {
  it("expose le libellé Mettre à jour et un message utilisateur clair", () => {
    expect(fr.appUpdate.updateLabel).toBe("Mettre à jour");
    expect(fr.appUpdate.title.length).toBeGreaterThan(0);
    expect(fr.appUpdate.description.length).toBeGreaterThan(0);
  });
});
