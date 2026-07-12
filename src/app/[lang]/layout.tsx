import { notFound } from "next/navigation";
import { locales, type Locale, isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
import AnalyticsLoader from "@/components/Analytics";
import "../globals.css";

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
    <html lang={lang}>
      <body className="min-h-full flex flex-col">
        <Header locale={lang as Locale} dict={dict} />
        <main className="min-w-0 flex-1 overflow-x-hidden">{children}</main>
        <Footer locale={lang as Locale} dict={dict} />
        <CookieBanner locale={lang as Locale} dict={dict} />
        <AnalyticsLoader />
      </body>
    </html>
  );
}
