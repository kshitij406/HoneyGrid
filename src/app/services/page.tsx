import type { Metadata } from "next";
import Link from "next/link";
import {
  getProcessSteps,
  getSeoText,
  getServices,
  getServicesPageText,
} from "@/lib/content";
import { withLocale } from "@/lib/i18n";
import { localeFromSearchParams, type SearchParamsInput } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

type Props = {
  searchParams: SearchParamsInput;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const locale = await localeFromSearchParams(searchParams);
  const seo = getSeoText(locale);

  return pageMetadata(seo.servicesTitle, seo.servicesDescription, "/services", locale);
}

export default async function ServicesPage({ searchParams }: Props) {
  const locale = await localeFromSearchParams(searchParams);
  const text = getServicesPageText(locale);
  const services = getServices(locale);
  const steps = getProcessSteps(locale);

  return (
    <>
      <section className="section-shell bg-gradient-to-br from-white to-[#f4fbfc] p-7 sm:p-10">
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

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        <article className="section-shell hover-lift reveal-on-scroll p-6">
          <p className="honey-pill inline-flex rounded-full px-2 py-1 text-xs font-semibold uppercase tracking-wide">
            Fast Track
          </p>
          <h2 className="mt-3 text-xl font-semibold text-[var(--foreground)]">Speed-first delivery</h2>
          <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
            Clean project setup, clear milestones, and weekly progress updates so
            you always know what is shipping next.
          </p>
        </article>
        <article className="section-shell hover-lift reveal-on-scroll p-6">
          <p className="honey-pill inline-flex rounded-full px-2 py-1 text-xs font-semibold uppercase tracking-wide">
            Growth Stack
          </p>
          <h2 className="mt-3 text-xl font-semibold text-[var(--foreground)]">Built to convert</h2>
          <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
            Every page is structured for clarity, trust, and action with
            conversion-focused CTAs and messaging hierarchy.
          </p>
        </article>
        <article className="section-shell hover-lift reveal-on-scroll p-6">
          <p className="honey-pill inline-flex rounded-full px-2 py-1 text-xs font-semibold uppercase tracking-wide">
            Launch Care
          </p>
          <h2 className="mt-3 text-xl font-semibold text-[var(--foreground)]">Post-launch support</h2>
          <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
            After go-live we monitor, refine, and support your first growth phase
            to keep performance and inquiries strong.
          </p>
        </article>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="section-shell hover-lift reveal-on-scroll p-7">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              {service.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {service.description}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-[var(--foreground)]">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-[var(--line)] bg-white px-3 py-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-10 section-shell p-7 sm:p-10">
        <h2 className="text-3xl font-semibold text-[var(--foreground)]">
          {text.processTitle}
        </h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="hover-lift reveal-on-scroll rounded-xl border border-[var(--line)] bg-white p-4"
            >
              <p className="honey-pill inline-flex rounded-full px-2 py-1 text-xs font-semibold uppercase tracking-wide">
                {text.stepLabel} {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="section-shell hover-lift reveal-on-scroll p-7">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">What you get in every project</h2>
          <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)]">
            {[
              "Modern responsive design for all devices",
              "On-page SEO setup and metadata structure",
              "Lead capture flow with forms and WhatsApp",
              "Performance optimization and quality checks",
              "Clear handover and support guidance",
            ].map((item) => (
              <li key={item} className="rounded-lg border border-[var(--line)] bg-white px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="section-shell hover-lift reveal-on-scroll p-7">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">Typical delivery timeline</h2>
          <div className="mt-4 space-y-3 text-sm text-[var(--foreground)]">
            <div className="rounded-lg border border-[var(--line)] bg-white p-3">
              <p className="font-semibold">Week 1</p>
              <p className="mt-1 text-[var(--muted)]">Discovery, structure, and visual direction.</p>
            </div>
            <div className="rounded-lg border border-[var(--line)] bg-white p-3">
              <p className="font-semibold">Week 2</p>
              <p className="mt-1 text-[var(--muted)]">Build core pages and connect lead capture flow.</p>
            </div>
            <div className="rounded-lg border border-[var(--line)] bg-white p-3">
              <p className="font-semibold">Week 3</p>
              <p className="mt-1 text-[var(--muted)]">QA, launch, and optimization round.</p>
            </div>
          </div>
        </article>
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
