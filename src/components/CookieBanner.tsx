"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { getLocalizedPath } from "@/lib/routes";
import {
  acceptAllConsent,
  getStoredConsent,
  hasConsentDecision,
  rejectAllConsent,
  saveConsent,
  CONSENT_CHANGE_EVENT,
} from "@/lib/consent/storage";
import type { ConsentPreferences } from "@/lib/consent/config";
import { defaultConsentPreferences } from "@/lib/consent/config";

export function openCookieSettings() {
  window.dispatchEvent(new Event("bv-open-cookie-settings"));
}

export default function CookieBanner({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>(
    defaultConsentPreferences,
  );

  const syncFromStorage = useCallback(() => {
    const stored = getStoredConsent();
    if (stored) {
      setPreferences(stored.preferences);
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    syncFromStorage();

    function handleOpenSettings() {
      const stored = getStoredConsent();
      setPreferences(stored?.preferences ?? defaultConsentPreferences);
      setShowDetails(true);
      setVisible(true);
    }

    window.addEventListener(CONSENT_CHANGE_EVENT, syncFromStorage);
    window.addEventListener("bv-open-cookie-settings", handleOpenSettings);
    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, syncFromStorage);
      window.removeEventListener("bv-open-cookie-settings", handleOpenSettings);
    };
  }, [syncFromStorage]);

  if (!visible) return null;

  function closeBanner() {
    if (hasConsentDecision()) {
      setVisible(false);
      setShowDetails(false);
    }
  }

  function handleAcceptAll() {
    acceptAllConsent();
    closeBanner();
  }

  function handleRejectAll() {
    rejectAllConsent();
    closeBanner();
  }

  function handleSavePreferences() {
    saveConsent(preferences);
    closeBanner();
  }

  const c = dict.cookieBanner;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-bg-footer p-4 text-sm shadow-lg"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
    >
      <div className="site-wrap">
        <h2 id="cookie-banner-title" className="font-serif text-base font-bold text-text">
          {c.title}
        </h2>
        <p className="mt-2 max-w-3xl text-text">{c.description}</p>

        {showDetails && (
          <div className="mt-4 max-w-3xl space-y-4 border border-border bg-bg-surface p-4">
            <div>
              <p className="font-semibold text-text">{c.essentialTitle}</p>
              <p className="mt-1 text-text-muted">{c.essentialDescription}</p>
              <p className="mt-1 text-xs text-text-muted">{c.alwaysOn}</p>
            </div>
            <div>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences((prev) => ({
                      ...prev,
                      analytics: e.target.checked,
                    }))
                  }
                  className="mt-1"
                />
                <span>
                  <span className="font-semibold text-text">{c.analyticsTitle}</span>
                  <span className="mt-1 block text-text-muted">{c.analyticsDescription}</span>
                </span>
              </label>
            </div>
          </div>
        )}

        <p className="mt-3 text-sm">
          <Link href={getLocalizedPath(locale, "privacy")} className="text-link">
            {c.privacyLink}
          </Link>
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" onClick={handleAcceptAll} className="btn-primary">
            {c.acceptAll}
          </button>
          <button type="button" onClick={handleRejectAll} className="btn-plain">
            {c.rejectAll}
          </button>
          {!showDetails ? (
            <button
              type="button"
              onClick={() => setShowDetails(true)}
              className="btn-plain"
            >
              {c.manageSettings}
            </button>
          ) : (
            <>
              <button type="button" onClick={handleSavePreferences} className="btn-plain">
                {c.savePreferences}
              </button>
              {hasConsentDecision() && (
                <button
                  type="button"
                  onClick={() => {
                    setVisible(false);
                    setShowDetails(false);
                  }}
                  className="btn-plain"
                >
                  {c.closeSettings}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
