import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import { PracticePlayer } from "@/components/practice/practice-player";
import type { PracticeTemplateSnapshot } from "@/domain/practice/types";

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

vi.mock("@/components/preferences/preferences-provider", () => ({
  usePreferences: () => ({
    preferences: {
      practice: { showTips: true },
    },
  }),
}));

vi.mock("@/services/progression/progress-service", () => ({
  getProgressService: () => ({
    recordPractice: () => undefined,
  }),
}));

const template: PracticeTemplateSnapshot = {
  id: "st-safety-test",
  title: "Séance prudence",
  contentVersion: "0.1.0",
  plannedDurationMinutes: 10,
  isStructuralPlaceholder: true,
  objectives: [{ id: "o1", label: "Rester calme" }],
  steps: [
    {
      id: "s1",
      kind: "preparation",
      title: "Préparation",
      summary: "S’installer",
      sortOrder: 1,
    },
  ],
};

describe("PracticePlayer — gate F-031", () => {
  it("montre l’avertissement avant l’intro de séance", () => {
    const html = renderToStaticMarkup(<PracticePlayer template={template} />);

    expect(html).toContain('data-testid="practice-safety-gate"');
    expect(html).toContain("Arrêtez en cas de douleur.");
    expect(html).toContain("Prenez votre temps.");
    expect(html).not.toContain("promesse médicale");
    expect(html).toContain("Voir tous les conseils de sécurité");
    expect(html).not.toContain("practice-intro-heading");
    expect(html).not.toContain("Séance prudence");
  });
});
