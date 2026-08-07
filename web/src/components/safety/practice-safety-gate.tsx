import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  PRE_PRACTICE_WARNING,
  SAFETY_ADVICE_PATH,
} from "@/domain/safety/content";

type PracticeSafetyGateProps = {
  onAcknowledge: () => void;
};

/**
 * F-031 — avertissement de prudence avant le démarrage d’une séance guidée.
 * Gate calme (pas d’alert natif) ; le contenu durable reste F-016.
 */
export function PracticeSafetyGate({ onAcknowledge }: PracticeSafetyGateProps) {
  return (
    <section
      className="mx-auto max-w-reading space-y-10"
      aria-labelledby="practice-safety-heading"
      data-testid="practice-safety-gate"
    >
      <header className="space-y-4">
        <h1 id="practice-safety-heading" className="text-h1 text-foreground">
          {PRE_PRACTICE_WARNING.title}
        </h1>
        <p className="text-body text-muted-foreground">
          {PRE_PRACTICE_WARNING.intro}
        </p>
      </header>

      <div className="surface-card space-y-5 p-6 sm:p-8">
        <ul className="list-disc space-y-4 pl-5 text-body text-foreground">
          {PRE_PRACTICE_WARNING.points.map((point) => (
            <li key={point.id} data-testid={`pre-practice-${point.id}`}>
              {point.text}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-small text-muted-foreground">
        <Link
          href={SAFETY_ADVICE_PATH}
          className="text-foreground underline-offset-4 hover:underline"
          data-testid="pre-practice-advice-link"
        >
          {PRE_PRACTICE_WARNING.adviceLinkLabel}
        </Link>
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button
          type="button"
          variant="primary"
          onClick={onAcknowledge}
          data-testid="pre-practice-acknowledge"
        >
          {PRE_PRACTICE_WARNING.acknowledgeLabel}
        </Button>
        <Button type="button" variant="ghost" asChild>
          <Link href="/bibliotheque">{PRE_PRACTICE_WARNING.backLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
