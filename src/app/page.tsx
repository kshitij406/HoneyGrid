import type { Metadata } from "next";
import Link from "next/link";
import {
  getFaqs,
  getHomeText,
  getProcessSteps,
  getProjects,
  getSeoText,
  getServices,
  getTestimonials,
} from "@/lib/content";
import { withLocale } from "@/lib/i18n";
import { localeFromSearchParams, type SearchParamsInput } from "@/lib/locale";
import { localBusinessJsonLd, pageMetadata } from "@/lib/seo";
import { MacbookFrame } from "@/components/macbook-frame";

type Props = {
  searchParams: SearchParamsInput;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const locale = await localeFromSearchParams(searchParams);
  const seo = getSeoText(locale);

  return pageMetadata(seo.homeTitle, seo.homeDescription, "/", locale);
}

export default async function Home({ searchParams }: Props) {
  const locale = await localeFromSearchParams(searchParams);
  const text = getHomeText(locale);
  const services = getServices(locale);
  const processSteps = getProcessSteps(locale);
  const projects = getProjects(locale);
  const testimonials = getTestimonials(locale);
  const faqs = getFaqs(locale);
  const jsonLd = localBusinessJsonLd();

  return (
    <>
      <section className="honeycomb-bg rise-in relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-gradient-to-br from-[var(--hero-start)] via-white to-[var(--hero-end)] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
        <div className="absolute -right-12 -top-10 h-48 w-48 rounded-full bg-[var(--accent-soft)] blur-3xl" />
        <div className="absolute -bottom-16 left-10 h-52 w-52 rounded-full bg-[#ffc55666] blur-3xl" />
        <div className="absolute right-10 top-28 hidden h-14 w-14 rotate-12 rounded-xl border border-[#f6cd7a] bg-[#fff3c8] lg:block" />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
              <span className="pulse-dot h-2 w-2 rounded-full bg-[var(--primary)]" />
              {text.badge}
            </p>
            <h1 className="mt-5 max-w-xl text-3xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl">
              <span className="typing-wrap hero-title">{text.headline}</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">
              {text.subheadline}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={withLocale("/contact", locale)}
                className="button-drift heartbeat rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-strong)]"
              >
                {text.quoteCta}
              </Link>
              <Link
                href={withLocale("/portfolio", locale)}
                className="rounded-full border border-[var(--line)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                {text.portfolioCta}
              </Link>
            </div>
          </div>
          <div className="float-loop section-shell honey-glow p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
              {text.trustTitle}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
              {text.trustHeadline}
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
              {text.trustBullets.map((bullet) => (
                <li
                  key={bullet}
                  className="hover-lift rounded-xl border border-[var(--line)] bg-white px-4 py-3"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <article key={service.title} className="section-shell hover-lift reveal-on-scroll rise-in p-6">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">
              {service.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              {service.description}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-12 section-shell p-7 sm:p-10">
        <h2 className="text-3xl font-semibold text-[var(--foreground)]">
          {text.processTitle}
        </h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="hover-lift reveal-on-scroll rounded-2xl border border-[var(--line)] bg-white p-5"
            >
              <p className="honey-pill inline-flex rounded-full px-2 py-1 text-xs font-semibold uppercase tracking-wide">
                {text.stepLabel} {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-[var(--foreground)]">
            {text.featuredTitle}
          </h2>
          <Link
            href={withLocale("/portfolio", locale)}
            className="text-sm font-semibold text-[var(--primary)]"
          >
            {text.featuredCta}
          </Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug} className="section-shell hover-lift reveal-on-scroll overflow-hidden">
              {project.url ? (
                <div className="bg-gradient-to-br from-[var(--surface)] to-white pb-2">
                  <MacbookFrame
                    url={project.url}
                    title={project.title}
                    accent={project.accent}
                  />
                </div>
              ) : (
                <div className={`h-3 w-full bg-gradient-to-r ${project.accent}`} />
              )}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
                  {project.industry}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[var(--foreground)]">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {project.summary}
                </p>
                <Link
                  href={withLocale(`/portfolio/${project.slug}`, locale)}
                  className="mt-5 inline-block text-sm font-semibold text-[var(--primary)]"
                >
                  {text.caseStudyCta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="section-shell p-7 sm:p-10">
          <h2 className="text-3xl font-semibold text-[var(--foreground)]">
            {text.testimonialsTitle}
          </h2>
          <div className="mt-6 space-y-4">
            {testimonials.map((item) => (
              <blockquote
                key={item.author}
                className="hover-lift reveal-on-scroll rounded-xl border border-[var(--line)] bg-white p-4"
              >
                <p className="text-sm text-[var(--foreground)]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-2 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
                  {item.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </article>

        <article className="section-shell p-7 sm:p-10">
          <h2 className="text-3xl font-semibold text-[var(--foreground)]">
            {text.faqTitle}
          </h2>
          <div className="mt-6 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="hover-lift reveal-on-scroll rounded-xl border border-[var(--line)] bg-white p-4"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-[var(--foreground)]">
                  {faq.question}
                </summary>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </article>
      </section>

      <section className="brand-cta-strip mt-12 section-shell flex flex-col items-start justify-between gap-6 p-7 sm:p-10 lg:flex-row lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold">{text.finalTitle}</h2>
          <p className="brand-cta-copy mt-2 text-sm">{text.finalText}</p>
        </div>
        <Link
          href={withLocale("/contact", locale)}
          className="brand-cta-button px-6 py-3 text-sm"
        >
          {text.finalCta}
        </Link>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
