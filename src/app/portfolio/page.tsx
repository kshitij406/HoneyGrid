import type { Metadata } from "next";
import Link from "next/link";
import { getPortfolioPageText, getProjects, getSeoText } from "@/lib/content";
import { withLocale } from "@/lib/i18n";
import { localeFromSearchParams, type SearchParamsInput } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";
import { MacbookFrame } from "@/components/macbook-frame";

type Props = {
  searchParams: SearchParamsInput;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const locale = await localeFromSearchParams(searchParams);
  const seo = getSeoText(locale);

  return pageMetadata(seo.portfolioTitle, seo.portfolioDescription, "/portfolio", locale);
}

export default async function PortfolioPage({ searchParams }: Props) {
  const locale = await localeFromSearchParams(searchParams);
  const text = getPortfolioPageText(locale);
  const projects = getProjects(locale);

  return (
    <>
      <section className="section-shell bg-gradient-to-br from-white to-[#edf8fb] p-7 sm:p-10">
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

      <section className="mt-10 grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} className="section-shell hover-lift reveal-on-scroll overflow-hidden">
            {/* MacBook mockup — shown for projects with a live URL */}
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
                {text.industryLabel}: {project.industry}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                {project.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {project.summary}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Link
                  href={withLocale(`/portfolio/${project.slug}`, locale)}
                  className="text-sm font-semibold text-[var(--primary)]"
                >
                  {text.caseStudyCta}
                </Link>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[var(--muted)] underline-offset-2 hover:text-[var(--primary)] hover:underline"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-10 section-shell p-7 sm:p-10">
        <h2 className="text-3xl font-semibold text-[var(--foreground)]">How we think about every project</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Built for the user, not the brief",
              body: "Every section earns its place. If it doesn't help a visitor move forward, it doesn't make the cut.",
            },
            {
              title: "Fast everywhere, not just on WiFi",
              body: "Performance is non-negotiable. Clean architecture and lean code means it loads fast on any connection.",
            },
            {
              title: "No off-the-shelf identity",
              body: "Templates are a shortcut to looking like everyone else. Each project gets a visual language that's actually yours.",
            },
          ].map((item) => (
            <article key={item.title} className="hover-lift reveal-on-scroll rounded-xl border border-[var(--line)] bg-white p-5">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="brand-cta-strip mt-10 section-shell flex flex-col items-start justify-between gap-4 p-7 sm:flex-row sm:items-center sm:p-8">
        <div>
          <h2 className="text-2xl font-semibold">Want something built for your business?</h2>
          <p className="brand-cta-copy mt-1 text-sm">Tell us what you need and we will make it happen.</p>
        </div>
        <Link
          href={withLocale("/contact", locale)}
          className="brand-cta-button px-5 py-2.5 text-sm"
        >
          Start a Project
        </Link>
      </section>
    </>
  );
}
