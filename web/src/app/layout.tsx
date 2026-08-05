import type { Metadata, Viewport } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";

import { AppShell } from "@/components/layout/app-shell";
import { ThemeProvider } from "@/components/theme/theme-provider";
import {
  BRAND_DESCRIPTION,
  BRAND_NAME,
  BRAND_THEME,
  assets,
} from "@/config/assets";

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
    default: BRAND_NAME,
    template: `%s · ${BRAND_NAME}`,
  },
  description: BRAND_DESCRIPTION,
  applicationName: BRAND_NAME,
  manifest: assets.manifest.path,
  appleWebApp: {
    title: BRAND_NAME,
    capable: true,
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      {
        url: assets.brand.icon192.path,
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: assets.brand.icon512.path,
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: assets.brand.appleTouchIcon.path,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: BRAND_THEME.themeColor,
  colorScheme: "light dark",
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
