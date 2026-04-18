import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCasePageText,
  getProjectBySlug,
  getProjects,
  getSeoText,
} from "@/lib/content";
import { withLocale } from "@/lib/i18n";
import { localeFromSearchParams, type SearchParamsInput } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: SearchParamsInput;
};

export async function generateStaticParams() {
  return getProjects("en").map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const locale = await localeFromSearchParams(searchParams);
  const { slug } = await params;
  const project = getProjectBySlug(locale, slug);
  const text = getCasePageText(locale);
  const seo = getSeoText(locale);

  if (!project) {
    return pageMetadata(text.notFoundTitle, seo.portfolioDescription, "/portfolio", locale);
  }

  return pageMetadata(
    `${project.title} ${text.projectSuffix}`,
    project.summary,
    `/portfolio/${project.slug}`,
    locale,
  );
}

export default async function PortfolioCasePage({ params, searchParams }: Props) {
  const locale = await localeFromSearchParams(searchParams);
  const { slug } = await params;
  const project = getProjectBySlug(locale, slug);
  const text = getCasePageText(locale);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="section-shell overflow-hidden">
        <div className={`h-3 w-full bg-gradient-to-r ${project.accent}`} />
        <div className="p-7 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
            {project.industry}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--foreground)]">
            {project.title}
            <span className="ml-2 font-normal text-[var(--muted)]">{text.projectSuffix}</span>
          </h1>
          <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{project.summary}</p>
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-3">
        <article className="section-shell hover-lift reveal-on-scroll p-7 lg:col-span-2">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">{text.challengeTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.challenge}</p>

          <h2 className="mt-8 text-2xl font-semibold text-[var(--foreground)]">{text.solutionTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.solution}</p>

          <h2 className="mt-8 text-2xl font-semibold text-[var(--foreground)]">{text.outcomeTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.result}</p>
        </article>

        <aside className="section-shell hover-lift reveal-on-scroll p-7">
          <h3 className="text-lg font-semibold text-[var(--foreground)]">{text.stackTitle}</h3>
          <ul className="mt-3 space-y-2 text-sm text-[var(--foreground)]">
            {project.stack.map((item) => (
              <li key={item} className="rounded-lg border border-[var(--line)] bg-white px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              {text.liveCta}
            </a>
          )}
          <Link
            href={withLocale("/contact", locale)}
            className="mt-3 inline-block rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white"
          >
            {text.cta}
          </Link>
        </aside>
      </section>
    </>
  );
}
