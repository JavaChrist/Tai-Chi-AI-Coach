import { getPracticeResumeService } from "@/services/practice-resume/practice-resume-service";
import { getProgressService } from "@/services/progression/progress-service";

/**
 * PO-E — efface historique + reprise.
 * Ne touche pas aux préférences ni à l’onboarding.
 */
export function clearPracticeData(): void {
  getProgressService().clearHistory();
  getPracticeResumeService().clearResume();
}
