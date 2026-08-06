import type { Metadata } from "next";

import { PageEnvironment } from "@/components/environment/page-environment";
import { ContentLayout } from "@/components/layout/content-layout";
import { ProfilePreferences } from "@/components/preferences/profile-preferences";
import { getMessages } from "@/i18n";

export const metadata: Metadata = {
  title: "Profil",
};

export default function ProfilPage() {
  const messages = getMessages("fr");

  return (
    <PageEnvironment family="mountain">
      <ContentLayout
        title={messages.profile.title}
        description={messages.profile.description}
      >
        <ProfilePreferences />
      </ContentLayout>
    </PageEnvironment>
  );
}
