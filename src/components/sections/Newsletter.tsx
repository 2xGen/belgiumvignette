"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { getLocalizedPath } from "@/lib/routes";

export default function Newsletter({
  locale,
  dict,
  variant = "section",
}: {
  locale: Locale;
  dict: Dictionary;
  variant?: "section" | "hero";
}) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const inputId = variant === "hero" ? "newsletter-email-hero" : "newsletter-email";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale, consent: true }),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setEmail("");
      setConsent(false);
    } catch {
      setStatus("error");
    }
  }

  const form = status === "success" ? (
    <p className="notice-box text-sm">{dict.newsletter.success}</p>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label htmlFor={inputId} className="sr-only">
          {dict.newsletter.emailPlaceholder}
        </label>
        <input
          id={inputId}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={dict.newsletter.emailPlaceholder}
        />
      </div>
      <label className="flex items-start gap-2 text-xs leading-snug text-text-muted">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5"
        />
        <span>
          {dict.newsletter.consentLabel}{" "}
          <Link href={getLocalizedPath(locale, "privacy")} className="text-link">
            {dict.newsletter.privacyLink}
          </Link>
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:opacity-60"
      >
        {dict.newsletter.submit}
      </button>
      {status === "error" && (
        <p className="text-sm text-signal">{dict.newsletter.error}</p>
      )}
    </form>
  );

  if (variant === "hero") {
    return (
      <aside
        id="newsletter"
        className="animate-rise animate-rise-delay-3 w-full rounded-2xl bg-bg-surface p-5 text-ink shadow-[var(--shadow-lift)] sm:p-6"
      >
        <h2 className="text-lg font-extrabold tracking-tight text-ink sm:text-xl">
          {dict.newsletter.title}
        </h2>
        <ul className="mt-4 space-y-2">
          {dict.newsletter.benefits.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-text">
              <span className="font-bold text-accent-deep" aria-hidden>
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5">{form}</div>
      </aside>
    );
  }

  return (
    <section
      className="rounded-[18px] border border-border-light bg-bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:p-10"
      style={{ borderLeftWidth: 5, borderLeftColor: "var(--accent)" }}
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <h2 className="section-heading mb-3">{dict.newsletter.title}</h2>
          {dict.newsletter.description ? (
            <p className="text-base leading-relaxed text-text-muted">
              {dict.newsletter.description}
            </p>
          ) : null}
          <p className="mt-5 text-sm font-semibold text-ink">
            {dict.newsletter.benefitsIntro}
          </p>
          <ul className="mt-3 space-y-2">
            {dict.newsletter.benefits.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-text">
                <span className="font-bold text-accent-deep" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[14px] border border-border bg-bg-muted/60 p-5 sm:p-6">
          {form}
        </div>
      </div>
    </section>
  );
}
