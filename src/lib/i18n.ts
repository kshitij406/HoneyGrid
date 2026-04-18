export type Locale = "en" | "fr";

export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "fr"];

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "fr";
}

export function normalizeLocale(value: string | undefined): Locale {
  if (!value) {
    return defaultLocale;
  }

  return isLocale(value) ? value : defaultLocale;
}

export function withLocale(path: string, locale: Locale): string {
  if (locale === "en") {
    return path;
  }

  return `${path}${path.includes("?") ? "&" : "?"}lang=fr`;
}
