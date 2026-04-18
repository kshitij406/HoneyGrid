"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/i18n";

type Plan = {
  name: string;
  bestFor: string;
  priceMur: number;
  priceUsd?: number;
  features: string[];
  note?: string;
};

type Props = {
  plans: Plan[];
  text: {
    popularBadge: string;
    bestForLabel: string;
    fromLabel: string;
    footnote: string;
    customButton: string;
  };
  locale: Locale;
};

type Currency = "MUR" | "USD";

function formatMur(amount: number) {
  return `Rs ${amount.toLocaleString("en-MU")}`;
}

function formatUsd(amount: number) {
  return `$${Math.ceil(amount).toLocaleString("en-US")}`;
}

// "Most Popular" is the Business plan (index 2 with 4 tiers)
const POPULAR_INDEX = 2;

export function PricingCards({ plans, text, locale }: Props) {
  const [currency, setCurrency] = useState<Currency>("MUR");
  const [usdPerMur, setUsdPerMur] = useState<number | null>(null);
  const [rateError, setRateError] = useState(false);
  const [isPending, startTransition] = useTransition();

  // Only need live rate for plans without a fixed priceUsd
  const needsLiveRate = plans.some((p) => !p.priceUsd);

  function handleCurrencySwitch(next: Currency) {
    if (next === currency) return;

    if (next === "USD" && needsLiveRate && usdPerMur === null && !rateError) {
      startTransition(async () => {
        try {
          const res = await fetch("/api/exchange-rate");
          if (!res.ok) throw new Error("rate fetch failed");
          const data = await res.json();
          if (!data.usdPerMur) throw new Error("no rate");
          setUsdPerMur(data.usdPerMur);
          setCurrency("USD");
        } catch {
          setRateError(true);
          setCurrency("USD");
        }
      });
    } else {
      setCurrency(next);
    }
  }

  function displayPrice(plan: Plan): string {
    if (currency === "MUR") return formatMur(plan.priceMur);

    // Fixed USD price takes priority
    if (plan.priceUsd !== undefined) return formatUsd(plan.priceUsd);

    // Live-converted USD (for plans without a fixed rate, e.g. ecommerce)
    if (isPending) return "…";
    if (rateError || usdPerMur === null) return "N/A";
    return formatUsd(plan.priceMur * usdPerMur);
  }

  return (
    <div>
      {/* Currency toggle */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium text-[var(--muted)]">Show prices in:</span>
        <div className="inline-flex rounded-full border border-[var(--line)] bg-white p-0.5 text-sm font-semibold">
          {(["MUR", "USD"] as Currency[]).map((c) => (
            <button
              key={c}
              onClick={() => handleCurrencySwitch(c)}
              className={`rounded-full px-4 py-1.5 transition-colors ${
                currency === c
                  ? "bg-[var(--primary)] text-white"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        {currency === "USD" && !isPending && (
          <span className="text-xs text-[var(--muted)]">
            {needsLiveRate
              ? "fixed rates · ecommerce uses live conversion"
              : "fixed rates"}
          </span>
        )}
        {isPending && (
          <span className="text-xs text-[var(--muted)]">fetching rate…</span>
        )}
        {rateError && currency === "USD" && (
          <span className="text-xs text-red-500">live rate unavailable</span>
        )}
      </div>

      {/* Pricing cards — 4 columns on xl */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan, index) => {
          const isPopular = index === POPULAR_INDEX;
          return (
            <article
              key={plan.name}
              className={`section-shell hover-lift reveal-on-scroll p-6 ${
                isPopular ? "relative border-2 border-[var(--primary)]" : ""
              }`}
            >
              {isPopular && (
                <span className="honey-pill absolute -top-3 right-4 rounded-full px-3 py-1 text-xs font-semibold">
                  {text.popularBadge}
                </span>
              )}
              <p className="text-sm font-semibold text-[var(--primary)]">{plan.name}</p>
              <p className="mt-0.5 text-xs text-[var(--muted)]">
                {text.bestForLabel}: {plan.bestFor}
              </p>
              <p className="mt-4 text-2xl font-bold text-[var(--foreground)]">
                {displayPrice(plan)}
                <span className="text-[var(--primary)]">*</span>
              </p>
              <p className="text-xs text-[var(--muted)]">{text.fromLabel}</p>
              {plan.note && (
                <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-800">
                  {plan.note}
                </p>
              )}
              <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)]">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-lg border border-[var(--line)] bg-white px-3 py-2"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={withLocale("/contact", locale)}
                className="mt-5 inline-block rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-strong)]"
              >
                {text.customButton}
              </Link>
            </article>
          );
        })}
      </div>

      {/* Footnote */}
      <p className="mt-4 text-xs leading-5 text-[var(--muted)]">
        {text.footnote}
      </p>
    </div>
  );
}
