import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import { CalmBreathingView } from "@/components/breathing/calm-breathing-view";
import { CALM_BREATHING } from "@/domain/breathing/content";

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

describe("CalmBreathingView — F-014 UI", () => {
  it("rend titre, durée, instructions, prudence et navigation", () => {
    const html = renderToStaticMarkup(<CalmBreathingView />);

    expect(html).toContain('data-testid="calm-breathing-page"');
    expect(html).toContain(CALM_BREATHING.title);
    expect(html).toContain(CALM_BREATHING.durationLabel);
    expect(html).toContain('data-testid="calm-breathing-instructions"');
    expect(html).toContain('data-testid="calm-breathing-caution"');
    expect(html).toContain(CALM_BREATHING.caution);
    for (const step of CALM_BREATHING.instructions) {
      expect(html).toContain(step);
    }
    expect(html).toContain('data-testid="calm-breathing-start"');
    expect(html).toContain('data-testid="calm-breathing-quit"');
    expect(html).toContain('href="/"');
    expect(html).toContain('data-testid="calm-breathing-no-timer"');
    expect(html).toContain('data-testid="calm-breathing-no-audio"');
    expect(html).not.toContain("<audio");
    expect(html).not.toContain("countdown");
  });
});
