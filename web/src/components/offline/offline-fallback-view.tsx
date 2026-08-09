import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getMessages } from "@/i18n";

/**
 * Surface calme hors ligne — aucun asset nouveau ; Hero via PageEnvironment parent.
 */
export function OfflineFallbackView() {
  const t = getMessages("fr").offline;

  return (
    <div
      className="mx-auto max-w-reading space-y-8"
      data-testid="offline-fallback-page"
    >
      <header className="space-y-4">
        <h1 className="text-h1 text-foreground">{t.title}</h1>
        <p className="text-body text-muted-foreground">{t.description}</p>
      </header>

      <section className="surface-card space-y-4 p-6 sm:p-8" aria-label={t.title}>
        <p className="text-body text-foreground">{t.available}</p>
        <p className="text-body text-muted-foreground">{t.limited}</p>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="default" size="lg">
          <Link href="/">{t.homeLabel}</Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link href="/bibliotheque">{t.libraryLabel}</Link>
        </Button>
      </div>
    </div>
  );
}
