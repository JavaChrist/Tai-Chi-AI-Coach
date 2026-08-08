import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("@/components/theme/theme-toggle", () => ({
  ThemeToggle: () => <button type="button">Thème</button>,
}));

vi.mock("@/components/layout/desktop-nav", () => ({
  DesktopNav: () => <nav>Nav</nav>,
}));

import { AppHeader } from "@/components/layout/app-header";

describe("AppHeader — TD-001", () => {
  it("place le chrome sticky au-dessus du contenu Hero (z-dropdown)", () => {
    const html = renderToStaticMarkup(<AppHeader />);
    expect(html).toContain("z-dropdown");
    expect(html).toContain("sticky");
    expect(html).toContain("bg-background");
    expect(html).toContain("Thème");
  });
});
