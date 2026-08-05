import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";

import { AppShell } from "@/components/layout/app-shell";
import { ThemeProvider } from "@/components/theme/theme-provider";

import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tai-Chi AI Coach",
    template: "%s · Tai-Chi AI Coach",
  },
  description:
    "Compagnon d’apprentissage du Tai Chi — calme, accessible et progressif.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${sourceSans.variable} ${fraunces.variable} h-full`}
    >
      <body className="min-h-dvh font-sans antialiased">
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
