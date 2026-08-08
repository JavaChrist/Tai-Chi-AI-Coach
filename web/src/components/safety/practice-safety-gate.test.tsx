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
  it("affiche un rappel court actionnable et le lien vers F-016", () => {
    const html = renderToStaticMarkup(
      <PracticeSafetyGate onAcknowledge={() => undefined} />,
    );

    expect(html).toContain('data-testid="practice-safety-gate"');
    expect(html).toContain("Avant de pratiquer");
    expect(html).toContain("Arrêtez en cas de douleur.");
    expect(html).toContain(
      "Réduisez l’amplitude ou l’effort si nécessaire.",
    );
    expect(html).toContain("Prenez votre temps.");
    expect(html).not.toContain("promesse médicale");
    expect(html).toContain("Voir tous les conseils de sécurité");
    expect(html).toContain('href="/conseils-de-securite"');
    expect(html).toContain('data-testid="pre-practice-acknowledge"');
  });
});
