"use client";

import { openCookieSettings } from "@/components/CookieBanner";

export default function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button type="button" onClick={openCookieSettings} className="text-link">
      {label}
    </button>
  );
}
