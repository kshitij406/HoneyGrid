"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { company, getNavLinks, getSharedText } from "@/lib/content";
import { LogoMark } from "@/components/logo-mark";
import { type Locale, withLocale } from "@/lib/i18n";

type Props = {
  locale?: Locale;
};

export function SiteHeader({ locale: explicitLocale }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
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

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href={withLocale("/", locale)}
            className="group flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <span className="grid h-10 w-10 place-items-center transition-transform group-hover:scale-110">
              <LogoMark className="h-8 w-8" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)]">
              {company.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-5 text-sm font-semibold text-[var(--muted)] lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={withLocale(item.href, locale)}
                className={`relative transition-all hover:-translate-y-0.5 ${
                  isActive(item.href)
                    ? "text-[var(--primary)]"
                    : "hover:text-[var(--primary)]"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[var(--primary)]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language toggle */}
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

            {/* Quote CTA — hidden on very small screens, shown on sm+ */}
            <Link
              href={withLocale("/contact", locale)}
              className="hidden rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-strong)] sm:inline-block"
            >
              {shared.getQuote}
            </Link>

            {/* Hamburger — visible below lg */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--line)] bg-white text-[var(--foreground)] lg:hidden"
            >
              {mobileOpen ? (
                /* X icon */
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="3" x2="15" y2="15" />
                  <line x1="15" y1="3" x2="3" y2="15" />
                </svg>
              ) : (
                /* Hamburger icon */
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="2" y1="5" x2="16" y2="5" />
                  <line x1="2" y1="9" x2="16" y2="9" />
                  <line x1="2" y1="13" x2="16" y2="13" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <nav className="fixed inset-x-0 top-[73px] z-40 border-b border-[var(--line)] bg-white/95 backdrop-blur-xl lg:hidden">
            <ul className="mx-auto max-w-6xl divide-y divide-[var(--line)] px-5 sm:px-6">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={withLocale(item.href, locale)}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between py-4 text-base font-semibold transition-colors ${
                      isActive(item.href)
                        ? "text-[var(--primary)]"
                        : "text-[var(--foreground)] hover:text-[var(--primary)]"
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                    )}
                  </Link>
                </li>
              ))}
              <li className="py-4">
                <Link
                  href={withLocale("/contact", locale)}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-full bg-[var(--primary)] px-6 py-3 text-center text-sm font-semibold text-white"
                >
                  {shared.getQuote}
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
}
