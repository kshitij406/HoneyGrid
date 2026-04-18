import type { Metadata } from "next";
import Link from "next/link";
import { getSeoText, getThankYouText } from "@/lib/content";
import { withLocale } from "@/lib/i18n";
import { localeFromSearchParams, type SearchParamsInput } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

type Props = {
  searchParams: SearchParamsInput;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const locale = await localeFromSearchParams(searchParams);
  const seo = getSeoText(locale);

  return pageMetadata(seo.thankYouTitle, seo.thankYouDescription, "/thank-you", locale);
}

export default async function ThankYouPage({ searchParams }: Props) {
  const locale = await localeFromSearchParams(searchParams);
  const text = getThankYouText(locale);

  return (
    <section className="section-shell mx-auto max-w-2xl bg-gradient-to-br from-white to-[#edf8fb] p-8 text-center sm:p-12">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
        {text.label}
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--foreground)]">
        {text.title}
      </h1>
      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{text.body}</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link
          href={withLocale("/", locale)}
          className="rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--foreground)]"
        >
          {text.homeCta}
        </Link>
        <Link
          href={withLocale("/contact", locale)}
          className="rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white"
        >
          {text.contactCta}
        </Link>
      </div>
    </section>
  );
}
