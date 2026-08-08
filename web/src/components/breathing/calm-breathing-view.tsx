"use client";

import Link from "next/link";
import { useId, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  CALM_BREATHING,
  CALM_BREATHING_PATH,
} from "@/domain/breathing/content";
import { SAFETY_ADVICE_PATH } from "@/domain/safety/content";

/**
 * F-014 — Respiration calme.
 * Guidage textuel uniquement ; pas de timer, audio, ni cadence visuelle.
 */
export function CalmBreathingView() {
  const instructionsId = useId();
  const [active, setActive] = useState(false);

  return (
    <div
      className="mx-auto max-w-reading space-y-10"
      data-testid="calm-breathing-page"
      data-path={CALM_BREATHING_PATH}
    >
      <header className="space-y-4">
        <h1 className="text-h1 text-foreground">{CALM_BREATHING.title}</h1>
        <p className="text-body text-muted-foreground">{CALM_BREATHING.intro}</p>
        <p
          className="text-small text-muted-foreground"
          data-testid="calm-breathing-duration"
        >
          Durée indicative : {CALM_BREATHING.durationLabel}
        </p>
      </header>

      <section
        className="surface-card space-y-5 p-6 sm:p-8"
        aria-labelledby={instructionsId}
        data-testid="calm-breathing-instructions"
      >
        <h2 id={instructionsId} className="text-h2 text-foreground">
          Instructions
        </h2>
        <ol className="list-decimal space-y-3 pl-5 text-body text-foreground">
          {CALM_BREATHING.instructions.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <aside
        className="surface-card space-y-3 p-6 sm:p-8"
        aria-labelledby="calm-breathing-caution-heading"
        data-testid="calm-breathing-caution"
      >
        <h2
          id="calm-breathing-caution-heading"
          className="text-h3 text-foreground"
        >
          Prudence
        </h2>
        <p className="text-body text-foreground">{CALM_BREATHING.caution}</p>
      </aside>

      {active ? (
        <p
          role="status"
          className="text-body text-muted-foreground"
          data-testid="calm-breathing-active-status"
        >
          Suivez les instructions à votre rythme. Arrêtez dès que vous le
          souhaitez — aucun compte à rebours n’est imposé.
        </p>
      ) : null}

      {/* Garanties produit : pas de timer / audio / cadence visuelle. */}
      <p className="sr-only" data-testid="calm-breathing-no-timer">
        Aucun minuteur obligatoire n’accompagne cet exercice.
      </p>
      <p className="sr-only" data-testid="calm-breathing-no-audio">
        Aucun guidage audio n’est requis.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {!active ? (
          <Button
            type="button"
            variant="primary"
            onClick={() => setActive(true)}
            data-testid="calm-breathing-start"
          >
            {CALM_BREATHING.startLabel}
          </Button>
        ) : (
          <Button
            type="button"
            variant="surface"
            onClick={() => setActive(false)}
            data-testid="calm-breathing-stop"
          >
            Arrêter
          </Button>
        )}
        <Button variant="ghost" asChild>
          <Link href="/" data-testid="calm-breathing-quit">
            {CALM_BREATHING.quitLabel}
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link
            href={SAFETY_ADVICE_PATH}
            data-testid="calm-breathing-safety-link"
          >
            Conseils de sécurité
          </Link>
        </Button>
      </div>
    </div>
  );
}
