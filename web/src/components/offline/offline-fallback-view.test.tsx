import { describe, expect, it } from "vitest";

import { fr } from "@/i18n/messages/fr";

describe("offline fallback copy", () => {
  it("expose un message calme non technique", () => {
    expect(fr.offline.title).toMatch(/hors ligne/i);
    expect(fr.offline.description.length).toBeGreaterThan(20);
    expect(fr.offline.available.length).toBeGreaterThan(10);
    expect(fr.offline.limited.toLowerCase()).toContain("vidéo");
    expect(fr.offline.homeLabel.length).toBeGreaterThan(0);
    expect(fr.offline.libraryLabel.length).toBeGreaterThan(0);
  });
});
