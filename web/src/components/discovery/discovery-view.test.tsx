import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import { DiscoveryView } from "@/components/discovery/discovery-view";

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

describe("DiscoveryView — F-001 / F-002", () => {
  it("rend la présentation, les styles et les CTA sans sélecteur de style", () => {
    const html = renderToStaticMarkup(<DiscoveryView />);

    expect(html).toContain('data-testid="discovery-page"');
    expect(html).toContain('data-testid="discovery-presentation"');
    expect(html).toContain('data-testid="discovery-styles"');
    expect(html).toContain("dispositif médical");
    expect(html).toContain("Yang");
    expect(html).toContain("Chen");
    expect(html).toContain('data-testid="discovery-no-style-choice"');
    expect(html).not.toContain("<select");
    expect(html).not.toContain('type="radio"');
    expect(html).toContain('href="/bibliotheque"');
    expect(html).toContain('href="/conseils-de-securite"');
    expect(html).toContain('data-testid="discovery-cta-practice"');
  });
});
