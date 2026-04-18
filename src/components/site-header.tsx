"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { company, getNavLinks, getSharedText } from "@/lib/content";
import { LogoMark } from "@/components/logo-mark";
import { type Locale, withLocale } from "@/lib/i18n";

type Props = {
  locale?: Locale;
};

export function SiteHeader({ locale: explicitLocale }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const locale = explicitLocale ?? (lang === "fr" ? "fr" : "en");
  const navLinks = getNavLinks(locale);
  const shared = getSharedText(locale);

  const nextEnglish = new URLSearchParams(searchParams.toString());
  nextEnglish.delete("lang");

  const nextFrench = new URLSearchParams(searchParams.toString());
  nextFrench.set("lang", "fr");

  const englishHref = nextEnglish.size
    ? `${pathname}?${nextEnglish.toString()}`
    : pathname;
  const frenchHref = `${pathname}?${nextFrench.toString()}`;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href={withLocale("/", locale)} className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center transition-transform group-hover:scale-110">
            <LogoMark className="h-8 w-8" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)]">
            {company.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-[var(--muted)] lg:flex">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={withLocale(item.href, locale)}
                className={`relative transition-all hover:-translate-y-0.5 ${
                  isActive
                    ? "text-[var(--primary)]"
                    : "hover:text-[var(--primary)]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[var(--primary)]" />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="rounded-full border border-[var(--line)] bg-white p-1 text-xs font-semibold shadow-sm"
            role="group"
            aria-label="Language switcher"
          >
            <Link
              href={englishHref}
              aria-pressed={locale === "en"}
              className={`inline-flex min-h-8 items-center rounded-full px-2 py-1 transition-all duration-200 ${
                locale === "en"
                  ? "bg-[var(--primary)] text-white shadow-sm"
                  : "text-[var(--muted)] hover:bg-[#f6dfad]"
              }`}
            >
              EN
            </Link>
            <Link
              href={frenchHref}
              aria-pressed={locale === "fr"}
              className={`inline-flex min-h-8 items-center rounded-full px-2 py-1 transition-all duration-200 ${
                locale === "fr"
                  ? "bg-[var(--primary)] text-white shadow-sm"
                  : "text-[var(--muted)] hover:bg-[#f6dfad]"
              }`}
            >
              FR
            </Link>
          </div>
          <Link
            href={withLocale("/contact", locale)}
            className="rounded-full bg-[var(--primary)] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--primary-strong)] sm:px-4 sm:text-sm"
          >
            {shared.getQuote}
          </Link>
        </div>
      </div>
    </header>
  );
}
