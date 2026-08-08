import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DISCOVERY_CTA,
  STYLES_DISCOVERY,
  TAI_CHI_PRESENTATION,
} from "@/domain/discovery/content";

/**
 * Page Découverte — F-001 (présentation) + F-002 (styles, optionnel / non bloquant).
 */
export function DiscoveryView() {
  return (
    <div
      className="mx-auto max-w-reading space-y-12"
      data-testid="discovery-page"
    >
      <header className="space-y-4">
        <h1 className="text-h1 text-foreground">{TAI_CHI_PRESENTATION.title}</h1>
        <p className="text-body text-muted-foreground">
          {TAI_CHI_PRESENTATION.intro}
        </p>
      </header>

      <section
        className="space-y-6"
        aria-labelledby="discovery-f001-heading"
        data-testid="discovery-presentation"
      >
        <h2 id="discovery-f001-heading" className="sr-only">
          Présentation du Tai Chi
        </h2>
        {TAI_CHI_PRESENTATION.sections.map((section) => (
          <article
            key={section.id}
            className="surface-card space-y-3 p-6 sm:p-8"
            data-testid={`discovery-section-${section.id}`}
          >
            <h3 className="text-h3 text-foreground">{section.title}</h3>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body text-foreground">
                {paragraph}
              </p>
            ))}
          </article>
        ))}
      </section>

      <section
        className="space-y-5"
        aria-labelledby="discovery-f002-heading"
        data-testid="discovery-styles"
      >
        <div className="space-y-3">
          <h2 id="discovery-f002-heading" className="text-h2 text-foreground">
            {STYLES_DISCOVERY.title}
          </h2>
          <p className="text-body text-muted-foreground">
            {STYLES_DISCOVERY.intro}
          </p>
        </div>

        <div className="surface-card space-y-4 p-6 sm:p-8">
          <p className="text-body text-foreground">
            {STYLES_DISCOVERY.examplesLead}
          </p>
          <ul className="list-disc space-y-2 pl-5 text-body text-foreground">
            {STYLES_DISCOVERY.exampleNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <p className="text-body text-foreground">{STYLES_DISCOVERY.closing}</p>
          {/* Garantie produit : aucun sélecteur, aucun choix obligatoire. */}
          <p className="sr-only" data-testid="discovery-no-style-choice">
            Aucun choix de style n’est requis pour continuer.
          </p>
        </div>
      </section>

      <section
        className="space-y-4"
        aria-labelledby="discovery-next-heading"
        data-testid="discovery-cta"
      >
        <h2 id="discovery-next-heading" className="text-h2 text-foreground">
          Et ensuite ?
        </h2>
        <p className="text-body text-muted-foreground">
          Poursuivez quand vous le souhaitez — rien n’est imposé.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            variant="primary"
            asChild
            data-testid="discovery-cta-path"
          >
            <Link href={DISCOVERY_CTA.pathHref}>
              {DISCOVERY_CTA.pathLabel}
            </Link>
          </Button>
          <Button
            variant="secondary"
            asChild
            data-testid="discovery-cta-practice"
          >
            <Link href={DISCOVERY_CTA.practiceHref}>
              {DISCOVERY_CTA.practiceLabel}
            </Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            data-testid="discovery-cta-safety"
          >
            <Link href={DISCOVERY_CTA.safetyHref}>
              {DISCOVERY_CTA.safetyLabel}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
