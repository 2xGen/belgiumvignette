"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { getLocalizedPath } from "@/lib/routes";

const CONSENT_KEY = "bv_cookie_consent";

export function getCookieConsent(): "accepted" | "rejected" | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === "accepted" || value === "rejected") return value;
  return null;
}

export function setCookieConsent(value: "accepted" | "rejected") {
  localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new Event("cookie-consent-change"));
}

export default function CookieBanner({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getCookieConsent() === null);
  }, []);

  if (!visible) return null;

  function handleChoice(choice: "accepted" | "rejected") {
    setCookieConsent(choice);
    setVisible(false);
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-bg-footer p-4 text-sm">
      <div className="site-wrap flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-text">
          <strong>{dict.cookieBanner.title}.</strong> {dict.cookieBanner.description}{" "}
          <Link href={getLocalizedPath(locale, "privacy")} className="text-link">
            {dict.cookieBanner.privacyLink}
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => handleChoice("rejected")} className="btn-plain">
            {dict.cookieBanner.reject}
          </button>
          <button type="button" onClick={() => handleChoice("accepted")} className="btn-primary">
            {dict.cookieBanner.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
