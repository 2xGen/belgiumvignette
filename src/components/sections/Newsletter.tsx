"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { getLocalizedPath } from "@/lib/routes";

export default function Newsletter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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

  return (
    <section className="panel-muted p-5">
      <h2 className="font-serif text-lg font-bold text-text">{dict.newsletter.title}</h2>
      <p className="mt-2 text-sm text-text-muted">{dict.newsletter.description}</p>

      {status === "success" ? (
        <p className="notice-box mt-4 text-sm">{dict.newsletter.success}</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 max-w-md space-y-3">
          <div>
            <label htmlFor="newsletter-email" className="sr-only">
              {dict.newsletter.emailPlaceholder}
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={dict.newsletter.emailPlaceholder}
            />
          </div>
          <label className="flex items-start gap-2 text-sm text-text">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1"
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
            className="btn-primary disabled:opacity-60"
          >
            {dict.newsletter.submit}
          </button>
          {status === "error" && (
            <p className="text-sm text-red-700">{dict.newsletter.error}</p>
          )}
        </form>
      )}
    </section>
  );
}
