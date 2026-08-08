/**
 * Date civile locale — F-008.
 *
 * - Timezone = appareil (navigateur)
 * - Clé = `YYYY-MM-DD`
 * - Changement de suggestion à minuit local
 * - Aucun timezone serveur, cron, ni réseau
 */

const DATE_KEY_RE = /^(\d{4})-(\d{2})-(\d{2})$/;

/** Formate une Date en clé civile locale `YYYY-MM-DD`. */
export function toLocalDateKey(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/** Valide une clé `YYYY-MM-DD` (composants numériques plausibles). */
export function isValidLocalDateKey(dateKey: string): boolean {
  const match = DATE_KEY_RE.exec(dateKey.trim());
  if (!match) return false;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (month < 1 || month > 12 || day < 1 || day > 31) return false;
  // Rejette les dates impossibles (ex. 2026-02-31) via UTC round-trip.
  const utc = Date.UTC(year, month - 1, day);
  const check = new Date(utc);
  return (
    check.getUTCFullYear() === year &&
    check.getUTCMonth() === month - 1 &&
    check.getUTCDate() === day
  );
}

/**
 * Ordinal de jour déterministe pour une clé `YYYY-MM-DD`.
 * Basé sur le jour civil UTC des composants (indépendant de la TZ machine
 * une fois la clé fournie — les tests injectent `dateKey`).
 */
export function dayOrdinalFromDateKey(dateKey: string): number {
  const match = DATE_KEY_RE.exec(dateKey.trim());
  if (!match) {
    throw new Error(`Invalid local date key: ${dateKey}`);
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const utcMs = Date.UTC(year, month - 1, day);
  return Math.floor(utcMs / 86_400_000);
}
