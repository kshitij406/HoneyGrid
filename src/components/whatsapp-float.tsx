"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { company, getContactPageText, getSharedText } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale?: Locale;
};

export function WhatsAppFloat({ locale: explicitLocale }: Props) {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const locale = explicitLocale ?? (lang === "fr" ? "fr" : "en");
  const shared = getSharedText(locale);
  const contactText = getContactPageText(locale);
  const message = contactText.whatsappMessage;
  const chatHref = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={chatHref}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#1fa855] px-3 py-2.5 text-xs font-semibold text-white shadow-xl shadow-green-900/20 transition-transform hover:-translate-y-0.5 sm:bottom-5 sm:right-5 sm:px-4 sm:py-3 sm:text-sm"
    >
      <span className="pulse-dot h-2 w-2 rounded-full bg-white" />
      {shared.whatsappCta}
    </Link>
  );
}
