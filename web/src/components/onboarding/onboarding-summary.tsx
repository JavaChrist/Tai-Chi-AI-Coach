import {
  initialLevelLabel,
  learningGoalLabel,
} from "@/domain/onboarding/labels";
import type { InitialLevel, LearningGoal } from "@/domain/onboarding/types";
import { preferredDurationLabel } from "@/domain/preferences/labels";
import type { PreferredDurationMinutes } from "@/domain/preferences/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <Card>
      <CardHeader>
        <CardTitle>Votre point de départ</CardTitle>
        <CardDescription>
          Vous pourrez modifier ces choix plus tard dans Profil.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Niveau</dt>
            <dd className="font-medium text-right">
              {initialLevelLabel(initialLevel)}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Objectif</dt>
            <dd className="font-medium text-right">
              {learningGoalLabel(learningGoal)}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Durée préférée</dt>
            <dd className="font-medium text-right">
              {preferredDurationLabel(preferredDurationMinutes)}
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
