import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import { OnboardingSummaryActions } from "@/components/onboarding/onboarding-summary-actions";

describe("OnboardingSummaryActions — PO-A", () => {
  it("expose CTA primaire et CTA secondaire BeginnerPath", () => {
    const html = renderToStaticMarkup(
      <OnboardingSummaryActions
        onComplete={vi.fn()}
        onBeginnerPath={vi.fn()}
        onBack={vi.fn()}
      />,
    );
    expect(html).toContain("Entrer dans l’application");
    expect(html).toContain("Voir le parcours débutant");
    expect(html).toContain('data-testid="onboarding-complete"');
    expect(html).toContain('data-testid="onboarding-beginner-path"');
  });
});
