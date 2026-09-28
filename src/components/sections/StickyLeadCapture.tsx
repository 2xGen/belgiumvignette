"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { getLocalizedPath } from "@/lib/routes";

const DISMISS_KEY = "bv-lead-sticky-dismissed";
const SUBSCRIBED_KEY = "bv-newsletter-subscribed";

export default function StickyLeadCapture({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const inputId = useId();
  const copy = dict.newsletter.intents.buy;

  useEffect(() => {
    try {
      if (localStorage.getItem(SUBSCRIBED_KEY) === "1") return;
      if (localStorage.getItem(DISMISS_KEY) === "1") return;
    } catch {
      /* ignore */
    }
    const timer = window.setTimeout(() => setVisible(true), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
    setOpen(false);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  }

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
          intent: "sticky",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setEmail("");
      setConsent(false);
      try {
        localStorage.setItem(SUBSCRIBED_KEY, "1");
      } catch {
        /* ignore */
      }
      window.setTimeout(() => {
        setVisible(false);
        setOpen(false);
      }, 2200);
    } catch {
      setStatus("error");
    }
  }

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center p-3 sm:p-4">
      <div
        className="pointer-events-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-border-light bg-bg-surface text-ink shadow-[var(--shadow-lift)]"
        role="dialog"
        aria-label={dict.newsletter.sticky.teaser}
      >
        {!open ? (
          <div className="flex items-center gap-3 px-4 py-3 sm:px-5">
            <p className="min-w-0 flex-1 text-sm font-semibold leading-snug text-ink">
              {dict.newsletter.sticky.teaser}
            </p>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="btn-primary shrink-0 px-3 py-2 text-xs sm:text-sm"
            >
              {dict.newsletter.sticky.cta}
            </button>
            <button
              type="button"
              onClick={dismiss}
              className="shrink-0 rounded-full px-2 py-1 text-lg leading-none text-text-muted hover:bg-bg-muted hover:text-ink"
              aria-label={dict.newsletter.sticky.closeLabel}
            >
              ×
            </button>
          </div>
        ) : (
          <div className="p-4 sm:p-5">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-base font-bold tracking-tight text-ink sm:text-lg">
                  {copy.title}
                </h2>
                {copy.description ? (
                  <p className="mt-1 text-sm text-text-muted">{copy.description}</p>
                ) : null}
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="shrink-0 rounded-full px-2 py-1 text-lg leading-none text-text-muted hover:bg-bg-muted hover:text-ink"
                aria-label={dict.newsletter.sticky.closeLabel}
              >
                ×
              </button>
            </div>

            {status === "success" ? (
              <>
                <p className="notice-box text-sm">{dict.newsletter.success}</p>
                <p className="mt-3 text-xs leading-relaxed text-text-muted">
                  {dict.newsletter.independenceNote}
                </p>
              </>
            ) : (
              <>
                <form
                  onSubmit={handleSubmit}
                  className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end"
                >
                  <div className="space-y-3 sm:col-span-2">
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
                        <Link
                          href={getLocalizedPath(locale, "privacy")}
                          className="text-link"
                        >
                          {dict.newsletter.privacyLink}
                        </Link>
                      </span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary sm:col-start-2 disabled:opacity-60"
                  >
                    {copy.submit}
                  </button>
                  {status === "error" && (
                    <p className="text-sm text-signal sm:col-span-2">
                      {dict.newsletter.error}
                    </p>
                  )}
                </form>
                <p className="mt-3 text-xs leading-relaxed text-text-muted">
                  {dict.newsletter.independenceNote}
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
