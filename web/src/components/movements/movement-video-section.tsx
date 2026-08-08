import { PedagogicalVideo } from "@/components/media/pedagogical-video";
import type { Movement } from "@/domain/movements/types";

type MovementVideoSectionProps = {
  movement: Movement;
};

/**
 * Bloc vidéo fiche mouvement — après l’image F-007, avant le détail F-005.
 * Poster = mediaKeyImage ; pas de player vide si média absent.
 */
export function MovementVideoSection({ movement }: MovementVideoSectionProps) {
  return (
    <section
      aria-labelledby="movement-video-heading"
      className="space-y-3"
      data-testid="movement-video-section"
    >
      <h2 id="movement-video-heading" className="text-h2 text-foreground">
        Démonstration
      </h2>
      <PedagogicalVideo
        src={movement.mediaKeyVideo}
        poster={movement.mediaKeyImage}
        title={movement.title}
        showAbsentFallback
      />
    </section>
  );
}
