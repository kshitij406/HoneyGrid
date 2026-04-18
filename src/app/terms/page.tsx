import type { Metadata } from "next";
import { getLegalText, getSeoText } from "@/lib/content";
import { localeFromSearchParams, type SearchParamsInput } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

type Props = {
  searchParams: SearchParamsInput;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const locale = await localeFromSearchParams(searchParams);
  const seo = getSeoText(locale);

  return pageMetadata(seo.termsTitle, seo.termsDescription, "/terms", locale);
}

export default async function TermsPage({ searchParams }: Props) {
  const locale = await localeFromSearchParams(searchParams);
  const text = getLegalText(locale);

  return (
    <section className="section-shell mx-auto max-w-3xl p-8 sm:p-10">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
        {text.termsTitle}
      </h1>
      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{text.termsBody}</p>
    </section>
  );
}
