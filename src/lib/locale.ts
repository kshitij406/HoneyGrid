import type { Locale } from "@/lib/i18n";
import { normalizeLocale } from "@/lib/i18n";

export type SearchParamsInput = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export async function localeFromSearchParams(
  searchParams?: SearchParamsInput,
): Promise<Locale> {
  if (!searchParams) {
    return normalizeLocale(undefined);
  }

  const params = await searchParams;
  const langParam = params.lang;
  const lang = Array.isArray(langParam) ? langParam[0] : langParam;

  return normalizeLocale(lang);
}
