/** Bump when cookie/privacy policy changes — stored with user consent. */
export const CONSENT_POLICY_VERSION = "2026-07-14";

export const CONSENT_STORAGE_KEY = "bv_consent";

export type ConsentPreferences = {
  analytics: boolean;
};

export type StoredConsent = {
  version: string;
  preferences: ConsentPreferences;
  /** ISO timestamp when the user saved their choice */
  decidedAt: string;
};

export const defaultConsentPreferences: ConsentPreferences = {
  analytics: false,
};
