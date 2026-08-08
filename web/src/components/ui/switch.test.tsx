import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { Switch } from "@/components/ui/switch";

describe("Switch — touch target (F-029)", () => {
  it("expose une zone interactive élargie (≥ 44px via before)", () => {
    const html = renderToStaticMarkup(<Switch aria-label="Test" />);
    expect(html).toContain("min-h-11");
    expect(html).toContain("min-w-11");
    expect(html).toContain('data-slot="switch"');
  });
});
