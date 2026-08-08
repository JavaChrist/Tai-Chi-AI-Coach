import { PageEnvironment } from "@/components/environment/page-environment";
import { BeginnerPathProgress } from "@/components/beginner-path/beginner-path-progress";
import { ContentLayout } from "@/components/layout/content-layout";
import { ErrorState } from "@/components/states/error-state";
import { beginnerPathReader } from "@/services/beginner-path/beginner-path-reader";
import { resolveBeginnerPathSteps } from "@/services/beginner-path/resolve-beginner-path-steps";

/**
 * F-003 — Parcours débutant structuré.
 * Route officielle : `/parcours/debutant` · Hero `morning`.
 */
export default function ParcoursDebutantPage() {
  const pathResult = beginnerPathReader.getPublishedPath();

  if (!pathResult.ok) {
    return (
      <PageEnvironment family="morning">
        <ContentLayout>
          <ErrorState
            title="Parcours momentanément indisponible"
            description="Le parcours débutant n’a pas pu être chargé. Vous pouvez réessayer dans un instant."
          />
        </ContentLayout>
      </PageEnvironment>
    );
  }

  const stepsResult = resolveBeginnerPathSteps(pathResult.path);

  if (!stepsResult.ok) {
    return (
      <PageEnvironment family="morning">
        <ContentLayout>
          <ErrorState
            title="Parcours incomplet"
            description="Une séance du parcours est introuvable. Les contenus seront rétablis sans que vous ayez à intervenir."
          />
        </ContentLayout>
      </PageEnvironment>
    );
  }

  return (
    <PageEnvironment family="morning">
      <ContentLayout>
        <BeginnerPathProgress
          path={pathResult.path}
          steps={stepsResult.steps}
        />
      </ContentLayout>
    </PageEnvironment>
  );
}
