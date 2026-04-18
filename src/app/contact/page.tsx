import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { company, getContactPageText, getSeoText } from "@/lib/content";
import { localeFromSearchParams, type SearchParamsInput } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

type Props = {
  searchParams: SearchParamsInput;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const locale = await localeFromSearchParams(searchParams);
  const seo = getSeoText(locale);

  return pageMetadata(seo.contactTitle, seo.contactDescription, "/contact", locale);
}

export default async function ContactPage({ searchParams }: Props) {
  const locale = await localeFromSearchParams(searchParams);
  const text = getContactPageText(locale);
  const whatsappHref = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(text.whatsappMessage)}`;

  return (
    <>
      <section className="section-shell bg-gradient-to-br from-white to-[#ecf7f9] p-7 sm:p-10">
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

      <section className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="section-shell hover-lift reveal-on-scroll p-7 sm:p-8">
          <ContactForm locale={locale} />
        </article>

        <article className="section-shell hover-lift reveal-on-scroll p-7 sm:p-8">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">{text.instantTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{text.instantText}</p>
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-[#1fa855] px-5 py-2.5 text-sm font-semibold text-white"
          >
            {text.whatsappCta}
          </Link>

          <div className="mt-8 space-y-2 text-sm text-[var(--foreground)]">
            <p className="font-semibold">{text.emailLabel}</p>
            <p className="text-[var(--muted)]">{company.email}</p>
            <p className="pt-2 font-semibold">{text.locationLabel}</p>
            <p className="text-[var(--muted)]">{company.location}</p>
          </div>
        </article>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          {
            title: "Fast response",
            body: "You get a first response and direction within 24 hours.",
          },
          {
            title: "Clear scope",
            body: "We map your goals into pages, sections, and a realistic timeline.",
          },
          {
            title: "No fluff",
            body: "Everything is focused on trust, clarity, and customer actions.",
          },
        ].map((item) => (
          <article key={item.title} className="section-shell hover-lift reveal-on-scroll p-6">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">{item.title}</h2>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
          </article>
        ))}
      </section>
    </>
  );
}
