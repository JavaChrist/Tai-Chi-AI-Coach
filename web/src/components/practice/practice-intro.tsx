import { Pause, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { PracticeTemplateSnapshot } from "@/domain/practice/types";

type PracticeIntroProps = {
  template: PracticeTemplateSnapshot;
  onContinue: () => void;
  onQuit: () => void;
  onPause: () => void;
  onResume: () => void;
  paused?: boolean;
  showTips?: boolean;
};

export function PracticeIntro({
  template,
  onContinue,
  onQuit,
  onPause,
  onResume,
  paused = false,
  showTips = true,
}: PracticeIntroProps) {
  return (
    <section
      className="mx-auto max-w-reading space-y-10"
      aria-labelledby="practice-intro-heading"
    >
      <header className="space-y-4">
        <h1 id="practice-intro-heading" className="text-h1 text-foreground">
          {template.title}
        </h1>
        <p className="text-body text-muted-foreground">
          Installez-vous. Cette séance se déroule à votre rythme.
        </p>
      </header>

      {showTips ? (
        <p className="text-small text-muted-foreground">
          Interrompez en cas de douleur. Adaptez l’effort à votre forme du jour.
        </p>
      ) : null}

      {paused ? (
        <p
          role="status"
          className="bg-secondary text-muted-foreground rounded-card px-6 py-8 text-center text-body"
        >
          Pause. Reprenez quand vous le souhaitez.
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {paused ? (
          <Button type="button" variant="primary" onClick={onResume}>
            <Play className="size-4" strokeWidth={1.75} aria-hidden />
            Reprendre
          </Button>
        ) : (
          <Button type="button" variant="primary" onClick={onContinue}>
            Continuer
          </Button>
        )}
        {!paused ? (
          <Button type="button" variant="ghost" onClick={onPause}>
            <Pause className="size-4" strokeWidth={1.75} aria-hidden />
            Pause
          </Button>
        ) : null}
        <Button type="button" variant="ghost" onClick={onQuit}>
          Quitter
        </Button>
      </div>
    </section>
  );
}
