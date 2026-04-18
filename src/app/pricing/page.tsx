import type { Metadata } from "next";
import Link from "next/link";
import { getPricing, getPricingPageText, getSeoText } from "@/lib/content";
import { withLocale } from "@/lib/i18n";
import { localeFromSearchParams, type SearchParamsInput } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";
import { PricingCards } from "@/components/pricing-cards";

type Props = {
  searchParams: SearchParamsInput;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const locale = await localeFromSearchParams(searchParams);
  const seo = getSeoText(locale);

  return pageMetadata(seo.pricingTitle, seo.pricingDescription, "/pricing", locale);
}

export default async function PricingPage({ searchParams }: Props) {
  const locale = await localeFromSearchParams(searchParams);
  const text = getPricingPageText(locale);
  const pricing = getPricing(locale);

  return (
    <>
      <section className="section-shell bg-gradient-to-br from-white to-[#eff8fb] p-7 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
          {text.label}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--foreground)]">
          {text.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          {text.subtitle}
        </p>
      </section>

      <section className="mt-10">
        <PricingCards
          plans={pricing}
          text={{
            popularBadge: text.popularBadge,
            bestForLabel: text.bestForLabel,
            fromLabel: text.fromLabel,
            footnote: text.footnote,
            customButton: text.customButton,
          }}
          locale={locale}
        />
      </section>

      <section className="mt-10 section-shell flex flex-col items-start justify-between gap-4 p-7 sm:flex-row sm:items-center sm:p-8">
        <div>
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">{text.customTitle}</h2>
          <p className="mt-1 text-sm text-[var(--muted)]">{text.customText}</p>
        </div>
        <Link
          href={withLocale("/contact", locale)}
          className="rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white"
        >
          {text.customButton}
        </Link>
      </section>
    </>
  );
}
