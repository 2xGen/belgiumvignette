import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { routes, getPageKeyFromSlug, type PageKey } from "@/lib/routes";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const subpageKeys = Object.keys(routes) as Exclude<PageKey, "home">[];

export function generateStaticParams() {
  const params: { lang: Locale; slug: string }[] = [];
  for (const lang of locales) {
    for (const key of subpageKeys) {
      params.push({ lang, slug: routes[key][lang] });
    }
  }
  return params;
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) notFound();

  const pageKey = getPageKeyFromSlug(lang, slug);
  if (!pageKey) notFound();

  const dict = await getDictionary(lang as Locale);
  const title = dict.meta[pageKey].title;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f7f5f0",
          padding: 64,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", height: 8 }}>
          <div style={{ flex: 1, backgroundColor: "#000" }} />
          <div style={{ flex: 1, backgroundColor: "#FDDA24" }} />
          <div style={{ flex: 1, backgroundColor: "#EF3340" }} />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: 24, color: "#555", marginBottom: 16 }}>
            {dict.site.domain}
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#222",
              lineHeight: 1.2,
            }}
          >
            {title.length > 90 ? `${title.slice(0, 87)}…` : title}
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#555" }}>{dict.common.independentSite}</div>
      </div>
    ),
    { ...size },
  );
}
