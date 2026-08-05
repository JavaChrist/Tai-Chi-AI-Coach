import { fr } from "@/i18n/messages/fr";
import type { AppLocale, LocaleCatalog, MessageDictionary } from "@/i18n/types";

/** Locales disponibles au runtime. Étendre ici lors de l’ajout d’une langue. */
export const availableLocales: AppLocale[] = ["fr"];

const catalog: LocaleCatalog = {
  fr,
};

export function getMessages(locale: AppLocale): MessageDictionary {
  return catalog[locale] ?? catalog.fr;
}

export function isSupportedLocale(value: string): value is AppLocale {
  return availableLocales.includes(value as AppLocale);
}
