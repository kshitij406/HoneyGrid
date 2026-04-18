"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { company, getFooterText, getNavLinks } from "@/lib/content";
import { type Locale, withLocale } from "@/lib/i18n";

type Props = {
  locale?: Locale;
};

export function SiteFooter({ locale: explicitLocale }: Props) {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const locale = explicitLocale ?? (lang === "fr" ? "fr" : "en");
  const navLinks = getNavLinks(locale);
  const text = getFooterText(locale);

  return (
    <footer className="mt-24 border-t border-[var(--line)] bg-[#f9fdff]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-[var(--foreground)]">
            {company.name}
          </p>
          <p className="mt-3 max-w-sm text-sm text-[var(--muted)]">{text.tagline}</p>
        </div>
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-[var(--foreground)]">
            {text.navTitle}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={withLocale(item.href, locale)}
                  className="hover:text-[var(--primary)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-[var(--foreground)]">
            {text.contactTitle}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            <li>{company.location}</li>
            <li>{company.email}</li>
            <li>+{company.whatsappNumber}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--line)] px-5 py-4 text-center text-xs text-[var(--muted)]">
        {new Date().getFullYear()} {company.name}. {text.rights}
      </div>
    </footer>
  );
}
