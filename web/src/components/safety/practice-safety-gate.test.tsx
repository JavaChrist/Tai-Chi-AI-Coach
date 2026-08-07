import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import { PracticeSafetyGate } from "@/components/safety/practice-safety-gate";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

describe("PracticeSafetyGate — F-031", () => {
  it("affiche l’avertissement avant pratique (douleur, pas de promesse médicale)", () => {
    const html = renderToStaticMarkup(
      <PracticeSafetyGate onAcknowledge={() => undefined} />,
    );

    expect(html).toContain('data-testid="practice-safety-gate"');
    expect(html).toContain("Avant de pratiquer");
    expect(html).toContain("douleur");
    expect(html).toContain("promesse médicale");
    expect(html).toContain('href="/conseils-de-securite"');
    expect(html).toContain('data-testid="pre-practice-acknowledge"');
  });
});
