import type { Metadata } from "next";
import { Sora, Source_Sans_3 } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { InteractiveEffects } from "@/components/interactive-effects";
import { RouteTransitionLoader } from "@/components/route-transition-loader";
import { company, getSeoText } from "@/lib/content";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.domain),
  title: {
    default: `${getSeoText("en").rootTitle} | ${company.name}`,
    template: getSeoText("en").siteTitleTemplate,
  },
  description: getSeoText("en").rootDescription,
  keywords: [
    "web design studio",
    "professional website development",
    "custom website design",
    "business website design",
    "ecommerce website development",
  ],
  openGraph: {
    title: `${getSeoText("en").rootTitle} | ${company.name}`,
    description: getSeoText("en").rootDescription,
    type: "website",
    locale: "en",
    url: "/",
    siteName: company.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${getSeoText("en").rootTitle} | ${company.name}`,
    description: getSeoText("en").twitterDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <InteractiveEffects />
        <Suspense fallback={null}>
          <RouteTransitionLoader />
        </Suspense>
        <Suspense fallback={null}>
          <SiteHeader />
        </Suspense>
        <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
        <Suspense fallback={null}>
          <SiteFooter />
        </Suspense>
        <Suspense fallback={null}>
          <WhatsAppFloat />
        </Suspense>
      </body>
    </html>
  );
}
