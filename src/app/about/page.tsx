import type { Metadata } from "next";
import Link from "next/link";
import { getAboutPageText, getSeoText } from "@/lib/content";
import { withLocale } from "@/lib/i18n";
import { localeFromSearchParams, type SearchParamsInput } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

type Props = {
  searchParams: SearchParamsInput;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const locale = await localeFromSearchParams(searchParams);
  const seo = getSeoText(locale);

  return pageMetadata(seo.aboutTitle, seo.aboutDescription, "/about", locale);
}

export default async function AboutPage({ searchParams }: Props) {
  const locale = await localeFromSearchParams(searchParams);
  const text = getAboutPageText(locale);

  return (
    <>
      <section className="section-shell bg-gradient-to-br from-white to-[#eef8fb] p-7 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
          {text.label}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--foreground)]">
          {text.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          {text.intro}
        </p>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="section-shell hover-lift reveal-on-scroll p-7">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">
            {text.approachTitle}
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{text.approachP1}</p>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{text.approachP2}</p>
        </article>

        <article className="section-shell hover-lift reveal-on-scroll p-7">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">
            {text.valuesTitle}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)]">
            {text.values.map((value) => (
              <li
                key={value}
                className="rounded-lg border border-[var(--line)] bg-white px-3 py-2"
              >
                {value}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          { label: "Full-stack", text: "Frontend, backend, APIs — built in-house, no hand-offs" },
          { label: "1-3 weeks", text: "Typical delivery window from brief to live" },
          { label: "Remote-ready", text: "Async-friendly process that works across time zones" },
        ].map((metric) => (
          <article key={metric.label} className="section-shell hover-lift reveal-on-scroll p-6 text-center">
            <p className="text-3xl font-bold text-[var(--primary)]">{metric.label}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">{metric.text}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 section-shell p-7 sm:p-10">
        <h2 className="text-3xl font-semibold text-[var(--foreground)]">How we keep projects smooth</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Clear milestones and communication checkpoints",
            "Focused design reviews before final implementation",
            "Performance and responsiveness QA before launch",
            "Support for post-launch refinements",
          ].map((item) => (
            <div key={item} className="hover-lift reveal-on-scroll rounded-xl border border-[var(--line)] bg-white p-4 text-sm text-[var(--foreground)]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="brand-cta-strip mt-10 section-shell flex flex-col items-start justify-between gap-5 p-7 sm:p-10 lg:flex-row lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold">{text.ctaTitle}</h2>
          <p className="brand-cta-copy mt-2 text-sm">{text.ctaText}</p>
        </div>
        <Link
          href={withLocale("/contact", locale)}
          className="brand-cta-button px-6 py-3 text-sm"
        >
          {text.ctaButton}
        </Link>
      </section>
    </>
  );
}
