import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { MovementMetadata } from "@/components/movements/movement-metadata";
import { MovementReferenceImage } from "@/components/movements/movement-reference-image";
import { MovementVideoSection } from "@/components/movements/movement-video-section";
import { Button } from "@/components/ui/button";
import type { Movement } from "@/domain/movements/types";

type MovementDetailsProps = {
  movement: Movement;
};

/**
 * Fiche mouvement — ordre MVP-012 :
 * 1) image F-007 · 2) vidéo F-006 si dispo / fallback calme · 3) contenu F-005
 */
export function MovementDetails({ movement }: MovementDetailsProps) {
  const instructions = [...movement.instructions].sort(
    (a, b) => a.sortOrder - b.sortOrder,
  );

  return (
    <article
      className="mx-auto max-w-reading space-y-10"
      data-testid="movement-details"
      data-movement-id={movement.id}
    >
      <div className="space-y-6">
        <Button variant="ghost" size="sm" asChild className="-ml-2 w-fit">
          <Link href="/bibliotheque/mouvements">
            <ArrowLeft className="size-4" strokeWidth={1.75} aria-hidden />
            Mouvements
          </Link>
        </Button>

        <header className="space-y-5">
          <div className="space-y-3">
            <h1 className="text-h1 text-foreground tracking-tight">
              {movement.title}
            </h1>
            <MovementMetadata
              level={movement.level}
              category={movement.category}
            />
          </div>

          <MovementReferenceImage
            src={movement.mediaKeyImage}
            alt={`Référence visuelle — ${movement.title}`}
            size="detail"
            priority
          />
        </header>
      </div>

      <MovementVideoSection movement={movement} />

      <section aria-labelledby="movement-summary-heading" className="space-y-3">
        <h2 id="movement-summary-heading" className="sr-only">
          Présentation
        </h2>
        <p className="text-body text-muted-foreground max-w-reading">
          {movement.summary}
        </p>
      </section>

      <section aria-labelledby="movement-placement-heading" className="space-y-3">
        <h2 id="movement-placement-heading" className="text-h2 text-foreground">
          Placement
        </h2>
        <p className="text-body text-muted-foreground">{movement.placement}</p>
      </section>

      <section
        aria-labelledby="movement-instructions-heading"
        className="space-y-4"
      >
        <h2
          id="movement-instructions-heading"
          className="text-h2 text-foreground"
        >
          Déroulement
        </h2>
        <ol className="text-body text-muted-foreground list-decimal space-y-3 pl-5">
          {instructions.map((step) => (
            <li key={step.id}>{step.body}</li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="movement-breathing-heading" className="space-y-3">
        <h2 id="movement-breathing-heading" className="text-h2 text-foreground">
          Respiration
        </h2>
        <p className="text-body text-muted-foreground">{movement.breathing}</p>
      </section>

      <section aria-labelledby="movement-rhythm-heading" className="space-y-3">
        <h2 id="movement-rhythm-heading" className="text-h2 text-foreground">
          Rythme
        </h2>
        <p className="text-body text-muted-foreground">{movement.rhythm}</p>
      </section>

      <section aria-labelledby="movement-attention-heading" className="space-y-3">
        <h2 id="movement-attention-heading" className="text-h2 text-foreground">
          Points d’attention
        </h2>
        <ul className="text-body text-muted-foreground list-disc space-y-2 pl-5">
          {movement.attentionPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="movement-mistakes-heading" className="space-y-3">
        <h2 id="movement-mistakes-heading" className="text-h2 text-foreground">
          Erreurs fréquentes
        </h2>
        <ul className="text-body text-muted-foreground list-disc space-y-2 pl-5">
          {movement.commonMistakes.map((mistake) => (
            <li key={mistake}>{mistake}</li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="movement-safety-heading"
        className="surface-card space-y-3 p-6"
      >
        <h2 id="movement-safety-heading" className="text-h3 text-foreground">
          Prudence
        </h2>
        <p className="text-body text-muted-foreground">{movement.safetyNote}</p>
      </section>

      <div className="min-h-16" aria-hidden />
    </article>
  );
}
