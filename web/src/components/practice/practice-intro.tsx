import { Pause, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { InformationCard } from "@/components/cards/information-card";
import type { PracticeTemplateSnapshot } from "@/domain/practice/types";

type PracticeIntroProps = {
  template: PracticeTemplateSnapshot;
  onContinue: () => void;
  onQuit: () => void;
  onPause: () => void;
  onResume: () => void;
  paused?: boolean;
};

export function PracticeIntro({
  template,
  onContinue,
  onQuit,
  onPause,
  onResume,
  paused = false,
}: PracticeIntroProps) {
  return (
    <section className="space-y-6" aria-labelledby="practice-intro-heading">
      <header className="space-y-2">
        <p className="text-primary text-sm font-medium tracking-wide uppercase">
          Introduction
        </p>
        <h1
          id="practice-intro-heading"
          className="font-heading text-2xl font-medium tracking-tight sm:text-3xl"
        >
          {template.title}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
          Prenez un instant pour vous installer. Cette séance se déroule
          localement, à votre rythme. Vous pourrez mettre en pause, reprendre ou
          quitter sans jugement.
        </p>
      </header>

      <section aria-labelledby="practice-objectives-heading" className="space-y-2">
        <h2 id="practice-objectives-heading" className="font-heading text-lg font-medium">
          Intention
        </h2>
        <ul className="text-muted-foreground list-disc space-y-1.5 pl-5 text-sm">
          {template.objectives.map((objective) => (
            <li key={objective.id}>{objective.label}</li>
          ))}
        </ul>
      </section>

      <InformationCard
        title="Prudence avant de pratiquer"
        description="Interrompez en cas de douleur. Adaptez l’effort à votre forme du jour. Cette application n’est pas un dispositif médical et ne remplace pas un avis de santé."
      />

      {paused ? (
        <p
          role="status"
          className="bg-muted text-muted-foreground rounded-xl px-4 py-3 text-sm"
        >
          Pause en cours. Reprenez quand vous le souhaitez — sans pression.
        </p>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <Button type="button" variant="primary" onClick={onContinue} disabled={paused}>
          Continuer vers la préparation
        </Button>
        {paused ? (
          <Button type="button" variant="secondary" onClick={onResume}>
            <Play className="size-4" aria-hidden />
            Reprendre
          </Button>
        ) : (
          <Button type="button" variant="secondary" onClick={onPause}>
            <Pause className="size-4" aria-hidden />
            Mettre en pause
          </Button>
        )}
        <Button type="button" variant="outline" onClick={onQuit}>
          Quitter
        </Button>
      </div>
    </section>
  );
}
