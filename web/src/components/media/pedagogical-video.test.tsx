import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import {
  PEDAGOGICAL_VIDEO_ABSENT_LABEL,
  PEDAGOGICAL_VIDEO_ERROR_LABEL,
  PedagogicalVideoView,
} from "@/components/media/pedagogical-video";

describe("PedagogicalVideo — F-006", () => {
  it("n’affiche pas de player lorsque la vidéo est absente (fallback calme)", () => {
    const html = renderToStaticMarkup(
      <PedagogicalVideoView
        src={null}
        poster="/curriculum/movements/movement-posture-de-depart-key.webp"
        title="Posture de départ"
      />,
    );

    expect(html).toContain('data-testid="pedagogical-video-absent"');
    expect(html).toContain(PEDAGOGICAL_VIDEO_ABSENT_LABEL);
    expect(html).not.toContain("<video");
    expect(html).not.toContain("erreur technique");
  });

  it("peut masquer totalement le fallback si demandé", () => {
    const html = renderToStaticMarkup(
      <PedagogicalVideoView
        src={null}
        poster={null}
        title="Posture de départ"
        showAbsentFallback={false}
      />,
    );

    expect(html).toBe("");
  });

  it("rend un player natif lorsque la vidéo est présente", () => {
    const src = "/video/movements/movement-posture-de-depart-demo.mp4";
    const poster =
      "/curriculum/movements/movement-posture-de-depart-key.webp";

    const html = renderToStaticMarkup(
      <PedagogicalVideoView
        src={src}
        poster={poster}
        title="Posture de départ"
      />,
    );

    expect(html).toContain('data-testid="pedagogical-video"');
    expect(html).toContain("<video");
    expect(html).toContain('controls="');
    expect(html.toLowerCase()).toContain("playsinline");
    expect(html).toContain(`poster="${poster}"`);
    expect(html).toContain(src);
    expect(html).toContain('type="video/mp4"');
    expect(html).toContain("Démonstration — Posture de départ");
    expect(html).not.toContain("autoplay");
  });

  it("affiche un message calme en cas d’erreur de chargement", () => {
    const html = renderToStaticMarkup(
      <PedagogicalVideoView
        src="/video/movements/movement-posture-de-depart-demo.mp4"
        poster={null}
        title="Posture de départ"
        loadFailed
      />,
    );

    expect(html).toContain('data-testid="pedagogical-video-error"');
    expect(html).toContain(PEDAGOGICAL_VIDEO_ERROR_LABEL);
    expect(html).not.toContain("<video");
  });
});
