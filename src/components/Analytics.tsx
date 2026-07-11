"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import {
  CONSENT_CHANGE_EVENT,
  hasAnalyticsConsent,
  migrateLegacyConsent,
} from "@/lib/consent/storage";

export default function AnalyticsLoader() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    migrateLegacyConsent();

    function sync() {
      setEnabled(hasAnalyticsConsent());
    }

    sync();
    window.addEventListener(CONSENT_CHANGE_EVENT, sync);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, sync);
  }, []);

  if (!enabled) return null;
  return <Analytics />;
}
