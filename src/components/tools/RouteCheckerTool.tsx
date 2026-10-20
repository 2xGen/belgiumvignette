"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { RouteCheckerContent } from "@/lib/i18n/route-checker";
import {
  type CountryCode,
  countries,
  resolveRoute,
  selectableCountries,
} from "@/lib/route-checker/data";

export default function RouteCheckerTool({
  locale,
  copy,
}: {
  locale: Locale;
  copy: RouteCheckerContent;
}) {
  const options = useMemo(
    () =>
      selectableCountries
        .map((c) => ({
          code: c.code,
          name: copy.countryNames[c.code],
        }))
        .sort((a, b) => a.name.localeCompare(b.name, locale)),
    [copy.countryNames, locale],
  );

  const [from, setFrom] = useState<CountryCode>("FR");
  const [to, setTo] = useState<CountryCode>("CZ");

  const result = useMemo(() => resolveRoute(from, to), [from, to]);
  const hasAffiliate = result.path.some(
    (code) => countries[code].affiliateUrl !== null,
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="rounded-[16px] border border-border-light bg-bg-surface p-5 shadow-[var(--shadow-soft)] sm:p-6"
        style={{ borderLeftWidth: 4, borderLeftColor: "var(--accent)" }}
      >
        <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
          {copy.toolTitle}
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <label className="block text-sm">
            <span className="mb-1.5 block font-semibold text-ink">
              {copy.fromLabel}
            </span>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value as CountryCode)}
              className="w-full rounded-[var(--radius-sm)] border border-border bg-bg-surface px-3 py-2.5 text-text"
            >
              {options.map((opt) => (
                <option key={opt.code} value={opt.code}>
                  {opt.name}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block font-semibold text-ink">
              {copy.toLabel}
            </span>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value as CountryCode)}
              className="w-full rounded-[var(--radius-sm)] border border-border bg-bg-surface px-3 py-2.5 text-text"
            >
              {options.map((opt) => (
                <option key={opt.code} value={opt.code}>
                  {opt.name}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block font-semibold text-ink">
              {copy.vehicleLabel}
            </span>
            <select
              value="car"
              disabled
              className="w-full rounded-[var(--radius-sm)] border border-border bg-bg-muted px-3 py-2.5 text-text"
            >
              <option value="car">{copy.vehicleCar}</option>
            </select>
          </label>
        </div>
        <button type="submit" className="btn-primary mt-5">
          {copy.submitLabel}
        </button>
      </form>

      <div className="space-y-5 rounded-[16px] border border-border-light bg-bg-muted/50 p-5 sm:p-6">
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-ink">
            {copy.resultTitle}
          </h3>
          <p className="mt-2 text-base font-semibold text-ink">
            <span className="text-text-muted">{copy.routeLabel}: </span>
            {result.path.map((code) => copy.countryNames[code]).join(" → ")}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            {result.curated ? copy.typicalRouteNote : copy.fallbackRouteNote}
          </p>
        </div>

        <ol className="space-y-4">
          {result.path.map((code) => {
            const country = countries[code];
            return (
              <li
                key={code}
                className="border-b border-border-light pb-4 last:border-0 last:pb-0"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <strong className="text-ink">
                    {copy.countryNames[code]}
                  </strong>
                  {country.affiliateUrl ? (
                    <a
                      href={country.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-sm font-semibold text-link underline-offset-2 hover:underline"
                    >
                      {copy.ctaVintrica}
                    </a>
                  ) : null}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">
                  {copy.statusLabels[country.roadChargeType]}
                </p>
              </li>
            );
          })}
        </ol>

        {hasAffiliate ? (
          <p className="text-xs leading-relaxed text-text-muted">
            {copy.affiliateDisclosure}
          </p>
        ) : null}
      </div>
    </div>
  );
}
