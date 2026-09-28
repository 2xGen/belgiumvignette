import { notFound } from "next/navigation";
import { Public_Sans } from "next/font/google";
import { locales, type Locale, isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
import AnalyticsLoader from "@/components/Analytics";
import StickyLeadCapture from "@/components/sections/StickyLeadCapture";
import "../globals.css";

const publicSans = Public_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-public-sans",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  return (
    <html lang={lang} className={publicSans.variable}>
      <body className={`${publicSans.className} flex min-h-full flex-col`}>
        <Header locale={lang as Locale} dict={dict} />
        <main className="min-w-0 flex-1 overflow-x-hidden pb-20">{children}</main>
        <Footer locale={lang as Locale} dict={dict} />
        <StickyLeadCapture locale={lang as Locale} dict={dict} />
        <CookieBanner locale={lang as Locale} dict={dict} />
        <AnalyticsLoader />
      </body>
    </html>
  );
}
