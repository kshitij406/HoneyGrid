import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { company } from "@/lib/content";

const siteUrl = company.domain;

export const defaultKeywords = [
  "web design studio",
  "professional website development",
  "custom website design",
  "business website design",
  "ecommerce website development",
];

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  locale: Locale = "en",
): Metadata {
  const language = locale === "fr" ? "fr" : "en";
  const canonical = locale === "en" ? path : `${path}?lang=fr`;

  return {
    title,
    description,
    keywords: defaultKeywords,
    alternates: {
      canonical,
      languages: {
        en: path,
        fr: `${path}?lang=fr`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: company.name,
      type: "website",
      locale: language,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    image: `${siteUrl}/og-image.jpg`,
    url: siteUrl,
    areaServed: "Worldwide",
    email: company.email,
    telephone: `+${company.whatsappNumber}`,
    description:
      "Custom website design and development for businesses that want real results.",
  };
}
