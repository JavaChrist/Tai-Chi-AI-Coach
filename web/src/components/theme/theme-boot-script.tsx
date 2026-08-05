import {
  LEGACY_THEME_STORAGE_KEY,
  PREFERENCES_STORAGE_KEY,
} from "@/services/preferences/local-storage-preference-store";

/** Code JS inline anti-FOUC (thème + animations réduites). */
export const THEME_BOOT_SCRIPT = `
(function () {
  try {
    var prefsKey = ${JSON.stringify(PREFERENCES_STORAGE_KEY)};
    var legacyKey = ${JSON.stringify(LEGACY_THEME_STORAGE_KEY)};
    var theme = "system";
    var reduceMotion = false;
    var raw = localStorage.getItem(prefsKey);
    if (raw) {
      var parsed = JSON.parse(raw);
      if (parsed && (parsed.theme === "light" || parsed.theme === "dark" || parsed.theme === "system")) {
        theme = parsed.theme;
      }
      if (parsed && parsed.accessibility && parsed.accessibility.reduceMotion === true) {
        reduceMotion = true;
      }
    } else {
      var legacy = localStorage.getItem(legacyKey);
      if (legacy === "light" || legacy === "dark") theme = legacy;
    }
    var dark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("reduce-motion", reduceMotion);
  } catch (e) {}
})();
`.trim();
