"use client";

import { openCookieSettings } from "@/components/CookieBanner";

export default function CookieSettingsButton({
  label,
  className = "text-link",
}: {
  label: string;
  className?: string;
}) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      {label}
    </button>
  );
}
