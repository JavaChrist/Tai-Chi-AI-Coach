"use client";

import { useState } from "react";

export const PEDAGOGICAL_VIDEO_ABSENT_LABEL =
  "Démonstration vidéo à venir";

export const PEDAGOGICAL_VIDEO_ERROR_LABEL =
  "Démonstration vidéo temporairement indisponible";

export type PedagogicalVideoViewProps = {
  /** Locator MP4 validé, ou null si absente. */
  src: string | null;
  /** Poster F-007 (image de référence), ou null. */
  poster: string | null;
  /** Titre du mouvement — légende / aria-label accessibles. */
  title: string;
  /**
   * Si true et `src` null : message calme « à venir ».
   * Si false et `src` null : ne rend rien (pas de player vide).
   */
  showAbsentFallback?: boolean;
  loadFailed?: boolean;
  onMediaError?: () => void;
};

/**
 * Vue pure du lecteur — testable sans DOM interactif.
 * Reçoit uniquement un média validé — aucune connaissance d’un provider externe.
 */
export function PedagogicalVideoView({
  src,
  poster,
  title,
  showAbsentFallback = true,
  loadFailed = false,
  onMediaError,
}: PedagogicalVideoViewProps) {
  if (!src) {
    if (!showAbsentFallback) return null;

    return (
      <p
        className="text-small text-muted-foreground"
        data-testid="pedagogical-video-absent"
        role="status"
      >
        {PEDAGOGICAL_VIDEO_ABSENT_LABEL}
      </p>
    );
  }

  if (loadFailed) {
    return (
      <p
        className="text-small text-muted-foreground"
        data-testid="pedagogical-video-error"
        role="status"
      >
        {PEDAGOGICAL_VIDEO_ERROR_LABEL}
      </p>
    );
  }

  return (
    <figure
      className="space-y-3"
      data-testid="pedagogical-video"
      data-has-src="true"
    >
      <video
        className="bg-muted w-full rounded-card"
        controls
        playsInline
        preload="metadata"
        poster={poster ?? undefined}
        aria-label={`Démonstration — ${title}`}
        onError={onMediaError}
      >
        <source src={src} type="video/mp4" />
      </video>
      <figcaption className="text-caption text-muted-foreground">
        {title}
      </figcaption>
    </figure>
  );
}

export type PedagogicalVideoProps = Omit<
  PedagogicalVideoViewProps,
  "loadFailed" | "onMediaError"
>;

/**
 * Lecteur vidéo pédagogique F-006.
 * Pas d’autoplay, pas de son automatique ; lecture contrôlée par l’utilisateur.
 */
export function PedagogicalVideo(props: PedagogicalVideoProps) {
  const [loadFailed, setLoadFailed] = useState(false);

  return (
    <PedagogicalVideoView
      {...props}
      loadFailed={loadFailed}
      onMediaError={() => setLoadFailed(true)}
    />
  );
}
