import { SAFETY_ADVICE } from "@/domain/safety/content";

/**
 * Affichage F-016 — conseils de sécurité consultables.
 * Contenu stable, non médical, Design System existant (`.surface-card`).
 */
export function SafetyAdvice() {
  return (
    <section
      className="mx-auto max-w-reading space-y-8"
      aria-labelledby="safety-advice-heading"
      data-testid="safety-advice"
    >
      <header className="space-y-3">
        <h1 id="safety-advice-heading" className="text-h1 text-foreground">
          {SAFETY_ADVICE.title}
        </h1>
        <p className="text-body text-muted-foreground">{SAFETY_ADVICE.intro}</p>
      </header>

      <div className="surface-card space-y-5 p-6 sm:p-8">
        <ul className="list-disc space-y-4 pl-5 text-body text-foreground">
          {SAFETY_ADVICE.points.map((point) => (
            <li key={point.id} data-testid={`safety-advice-${point.id}`}>
              {point.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
