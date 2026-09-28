"use client";

import { useId, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary, NewsletterIntentKey } from "@/lib/i18n/types";
import { getLocalizedPath } from "@/lib/routes";

export default function Newsletter({
  locale,
  dict,
  intent = "default",
  variant = "section",
  id,
}: {
  locale: Locale;
  dict: Dictionary;
  intent?: NewsletterIntentKey;
  variant?: "section" | "hero" | "inline";
  id?: string;
}) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const reactId = useId();
  const inputId = id ? `${id}-email` : `newsletter-email-${reactId}`;
  const copy = dict.newsletter.intents[intent];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          locale,
          consent: true,
          intent,
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setEmail("");
      setConsent(false);
      try {
        localStorage.setItem("bv-newsletter-subscribed", "1");
      } catch {
        /* ignore */
      }
    } catch {
      setStatus("error");
    }
  }

  const independenceNote = (
    <p className="mt-3 text-xs leading-relaxed text-text-muted">
      {dict.newsletter.independenceNote}
    </p>
  );

  const form =
    status === "success" ? (
      <>
        <p className="notice-box text-sm">{dict.newsletter.success}</p>
        {independenceNote}
      </>
    ) : (
      <>
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
              autoComplete="email"
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
            {copy.submit}
          </button>
          {status === "error" && (
            <p className="text-sm text-signal">{dict.newsletter.error}</p>
          )}
        </form>
        {independenceNote}
      </>
    );

  if (variant === "hero") {
    return (
      <aside
        id={id ?? "newsletter"}
        className="animate-rise animate-rise-delay-3 w-full rounded-2xl bg-bg-surface p-5 text-ink shadow-[var(--shadow-lift)] sm:p-6"
      >
        <h2 className="text-lg font-extrabold tracking-tight text-ink sm:text-xl">
          {copy.title}
        </h2>
        {copy.description ? (
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            {copy.description}
          </p>
        ) : null}
        <ul className="mt-4 space-y-2">
          {copy.benefits.map((item) => (
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

  if (variant === "inline") {
    return (
      <section
        id={id}
        className="rounded-[16px] border border-border-light bg-bg-surface p-5 shadow-[var(--shadow-soft)] sm:p-6"
        style={{ borderLeftWidth: 4, borderLeftColor: "var(--accent)" }}
      >
        <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
          {copy.title}
        </h2>
        {copy.description ? (
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            {copy.description}
          </p>
        ) : null}
        {copy.benefits.length > 0 ? (
          <>
            {copy.benefitsIntro ? (
              <p className="mt-4 text-sm font-semibold text-ink">
                {copy.benefitsIntro}
              </p>
            ) : null}
            <ul className="mt-2 space-y-1.5">
              {copy.benefits.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text">
                  <span className="font-bold text-accent-deep" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </>
        ) : null}
        <div className="mt-5 max-w-md">{form}</div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className="rounded-[18px] border border-border-light bg-bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:p-10"
      style={{ borderLeftWidth: 5, borderLeftColor: "var(--accent)" }}
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <h2 className="section-heading mb-3">{copy.title}</h2>
          {copy.description ? (
            <p className="text-base leading-relaxed text-text-muted">
              {copy.description}
            </p>
          ) : null}
          {copy.benefitsIntro ? (
            <p className="mt-5 text-sm font-semibold text-ink">
              {copy.benefitsIntro}
            </p>
          ) : null}
          <ul className="mt-3 space-y-2">
            {copy.benefits.map((item) => (
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
