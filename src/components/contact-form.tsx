"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { getContactFormText } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export function ContactForm({ locale }: Props) {
  const router = useRouter();
  const text = getContactFormText(locale);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Could not submit form.");
      }

      form.reset();
      router.push(withLocale("/thank-you", locale));
    } catch {
      setError(text.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-[var(--foreground)]">
          {text.fullName}
          <input
            name="fullName"
            required
            className="mt-1 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-2 outline-none ring-[var(--primary)] transition focus:ring-2"
          />
        </label>
        <label className="text-sm text-[var(--foreground)]">
          {text.businessName}
          <input
            name="businessName"
            className="mt-1 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-2 outline-none ring-[var(--primary)] transition focus:ring-2"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-[var(--foreground)]">
          {text.emailAddress}
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-2 outline-none ring-[var(--primary)] transition focus:ring-2"
          />
        </label>
        <label className="text-sm text-[var(--foreground)]">
          {text.phone}
          <input
            name="phone"
            required
            className="mt-1 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-2 outline-none ring-[var(--primary)] transition focus:ring-2"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-[var(--foreground)]">
          {text.needs}
          <select
            name="projectType"
            required
            className="mt-1 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-2 outline-none ring-[var(--primary)] transition focus:ring-2"
          >
            <option>{text.options.business}</option>
            <option>{text.options.ecommerce}</option>
            <option>{text.options.redesign}</option>
            <option>{text.options.maintenance}</option>
          </select>
        </label>
        <label className="text-sm text-[var(--foreground)]">
          {text.budget}
          <select
            name="budget"
            className="mt-1 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-2 outline-none ring-[var(--primary)] transition focus:ring-2"
          >
            <option>{text.budgets.low}</option>
            <option>{text.budgets.mid}</option>
            <option>{text.budgets.high}</option>
            <option>{text.budgets.enterprise}</option>
          </select>
        </label>
      </div>

      <label className="text-sm text-[var(--foreground)]">
        {text.details}
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-2 outline-none ring-[var(--primary)] transition focus:ring-2"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-strong)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? text.sending : text.submit}
      </button>

      {error ? <p className="text-sm text-red-700">{error}</p> : null}
    </form>
  );
}
