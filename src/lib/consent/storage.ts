import {
  CONSENT_POLICY_VERSION,
  CONSENT_STORAGE_KEY,
  defaultConsentPreferences,
  type ConsentPreferences,
  type StoredConsent,
} from "@/lib/consent/config";

export const CONSENT_CHANGE_EVENT = "bv-consent-change";

function isValidStoredConsent(value: unknown): value is StoredConsent {
  if (!value || typeof value !== "object") return false;
  const record = value as StoredConsent;
  return (
    typeof record.version === "string" &&
    typeof record.decidedAt === "string" &&
    typeof record.preferences?.analytics === "boolean"
  );
}

export function getStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!isValidStoredConsent(parsed)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function hasConsentDecision(): boolean {
  return getStoredConsent() !== null;
}

export function hasAnalyticsConsent(): boolean {
  const stored = getStoredConsent();
  if (!stored) return false;
  return stored.preferences.analytics === true;
}

export function saveConsent(preferences: ConsentPreferences): StoredConsent {
  const stored: StoredConsent = {
    version: CONSENT_POLICY_VERSION,
    preferences: {
      analytics: preferences.analytics,
    },
    decidedAt: new Date().toISOString(),
  };

  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(stored));
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
  return stored;
}

export function acceptAllConsent(): StoredConsent {
  return saveConsent({ analytics: true });
}

export function rejectAllConsent(): StoredConsent {
  return saveConsent({ ...defaultConsentPreferences });
}

export function clearConsentDecision(): void {
  localStorage.removeItem(CONSENT_STORAGE_KEY);
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

/** @deprecated Use hasAnalyticsConsent — kept for migration from old banner */
export function migrateLegacyConsent(): StoredConsent | null {
  const legacy = localStorage.getItem("bv_cookie_consent");
  if (legacy === "accepted") {
    localStorage.removeItem("bv_cookie_consent");
    return acceptAllConsent();
  }
  if (legacy === "rejected") {
    localStorage.removeItem("bv_cookie_consent");
    return rejectAllConsent();
  }
  return null;
}
