"use client";

import { useEffect, useState } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { getCookieConsent } from "@/components/CookieBanner";

export default function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    function check() {
      setEnabled(getCookieConsent() === "accepted");
    }
    check();
    window.addEventListener("cookie-consent-change", check);
    return () => window.removeEventListener("cookie-consent-change", check);
  }, []);

  if (!enabled) return null;
  return <VercelAnalytics />;
}
