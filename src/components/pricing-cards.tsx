"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/i18n";

type Plan = {
  name: string;
  bestFor: string;
  priceMur: number;
  features: string[];
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

export function PricingCards({ plans, text, locale }: Props) {
  const [currency, setCurrency] = useState<Currency>("MUR");
  const [usdPerMur, setUsdPerMur] = useState<number | null>(null);
  const [rateError, setRateError] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleCurrencySwitch(next: Currency) {
    if (next === currency) return;

    if (next === "USD" && usdPerMur === null && !rateError) {
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

  function displayPrice(priceMur: number) {
    if (currency === "USD") {
      if (isPending) return "…";
      if (rateError || usdPerMur === null) return "—";
      return formatUsd(priceMur * usdPerMur);
    }
    return formatMur(priceMur);
  }

  return (
    <div>
      {/* Currency toggle */}
      <div className="mb-6 flex items-center gap-3">
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
        {currency === "USD" && !isPending && !rateError && usdPerMur && (
          <span className="text-xs text-[var(--muted)]">
            live rate · rounded up
          </span>
        )}
        {isPending && (
          <span className="text-xs text-[var(--muted)]">fetching rate…</span>
        )}
        {rateError && (
          <span className="text-xs text-red-500">rate unavailable</span>
        )}
      </div>

      {/* Pricing cards */}
      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <article
            key={plan.name}
            className={`section-shell hover-lift reveal-on-scroll p-7 ${
              index === 1 ? "relative border-2 border-[var(--primary)]" : ""
            }`}
          >
            {index === 1 && (
              <span className="honey-pill absolute -top-3 right-5 rounded-full px-3 py-1 text-xs font-semibold">
                {text.popularBadge}
              </span>
            )}
            <p className="text-sm font-semibold text-[var(--primary)]">{plan.name}</p>
            <p className="mt-1 text-xs text-[var(--muted)]">
              {text.bestForLabel}: {plan.bestFor}
            </p>
            <p className="mt-4 text-3xl font-bold text-[var(--foreground)]">
              {displayPrice(plan.priceMur)}
              <span className="text-[var(--primary)]">*</span>
            </p>
            <p className="text-xs text-[var(--muted)]">{text.fromLabel}</p>
            <ul className="mt-5 space-y-2 text-sm text-[var(--foreground)]">
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
              className="mt-6 inline-block rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-strong)]"
            >
              {text.customButton}
            </Link>
          </article>
        ))}
      </div>

      {/* Asterisk footnote */}
      <p className="mt-4 text-xs leading-5 text-[var(--muted)]">
        {text.footnote}
      </p>
    </div>
  );
}
