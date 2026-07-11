import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export const alt = "Belgium Vignette";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);
  const title = dict.meta.home.title;
  const subtitle = dict.site.domain;

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
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#222",
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            {title.length > 90 ? `${title.slice(0, 87)}…` : title}
          </div>
          <div style={{ fontSize: 28, color: "#555" }}>{subtitle}</div>
        </div>
        <div style={{ fontSize: 22, color: "#555" }}>{dict.common.independentSite}</div>
      </div>
    ),
    { ...size },
  );
}
