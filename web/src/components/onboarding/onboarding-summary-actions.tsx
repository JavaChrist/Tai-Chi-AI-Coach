import { Button } from "@/components/ui/button";

type OnboardingSummaryActionsProps = {
  onComplete: () => void;
  onBeginnerPath: () => void;
  onBack: () => void;
};

/** Actions de l’étape summary — CTA primaire + accès secondaire BeginnerPath (PO-A). */
export function OnboardingSummaryActions({
  onComplete,
  onBeginnerPath,
  onBack,
}: OnboardingSummaryActionsProps) {
  return (
    <>
      <Button
        type="button"
        variant="primary"
        data-testid="onboarding-complete"
        onClick={onComplete}
      >
        Entrer dans l’application
      </Button>
      <Button
        type="button"
        variant="secondary"
        data-testid="onboarding-beginner-path"
        onClick={onBeginnerPath}
      >
        Voir le parcours débutant
      </Button>
      <Button type="button" variant="ghost" onClick={onBack}>
        Retour
      </Button>
    </>
  );
}
