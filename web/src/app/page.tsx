import type { Metadata } from "next";

import { HomeWelcome } from "@/components/home/home-welcome";

export const metadata: Metadata = {
  title: "Accueil",
};

export default function HomePage() {
  return <HomeWelcome />;
}
