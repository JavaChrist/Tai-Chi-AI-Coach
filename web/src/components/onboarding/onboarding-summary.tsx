import {
  initialLevelLabel,
  learningGoalLabel,
} from "@/domain/onboarding/labels";
import type { InitialLevel, LearningGoal } from "@/domain/onboarding/types";
import { preferredDurationLabel } from "@/domain/preferences/labels";
import type { PreferredDurationMinutes } from "@/domain/preferences/types";

type OnboardingSummaryProps = {
  initialLevel: InitialLevel;
  learningGoal: LearningGoal;
  preferredDurationMinutes: PreferredDurationMinutes;
};

export function OnboardingSummary({
  initialLevel,
  learningGoal,
  preferredDurationMinutes,
}: OnboardingSummaryProps) {
  return (
    <div className="space-y-6">
      <p className="text-small text-muted-foreground">
        Vous pourrez modifier ces choix plus tard dans Profil.
      </p>
      <dl className="space-y-4 text-body">
        <div className="flex justify-between gap-4">
          <dt className="text-muted-foreground">Niveau</dt>
          <dd className="text-foreground text-right">
            {initialLevelLabel(initialLevel)}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted-foreground">Objectif</dt>
          <dd className="text-foreground text-right">
            {learningGoalLabel(learningGoal)}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted-foreground">Durée préférée</dt>
          <dd className="text-foreground text-right">
            {preferredDurationLabel(preferredDurationMinutes)}
          </dd>
        </div>
      </dl>
    </div>
  );
}
