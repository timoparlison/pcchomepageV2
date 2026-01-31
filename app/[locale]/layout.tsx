import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { outfit, sourceSans, jetbrainsMono } from '@/lib/fonts';
import { locales, type Locale } from '@/i18n/config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/app/globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const isGerman = locale === 'de';

  return {
    title: {
      default: isGerman
        ? 'Parlison Code Couture UG - Softwareentwicklung & IT-Beratung'
        : 'Parlison Code Couture UG - Software Development & IT Consulting',
      template: isGerman
        ? '%s | Parlison Code Couture UG'
        : '%s | Parlison Code Couture UG',
    },
    description: isGerman
      ? 'Maßgeschneiderte Softwarelösungen, KI-gestützte Entwicklung und erfahrene IT-Spezialisten für Ihr Unternehmen.'
      : 'Custom software solutions, AI-powered development, and experienced IT specialists for your business.',
    keywords: isGerman
      ? ['Softwareentwicklung', 'IT-Beratung', 'ERP', 'KI', 'Freelancer', 'Deutschland']
      : ['Software Development', 'IT Consulting', 'ERP', 'AI', 'Freelancer', 'Germany'],
    authors: [{ name: 'Parlison Code Couture UG' }],
    creator: 'Parlison Code Couture UG',
    metadataBase: new URL('https://parlison.de'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        de: '/de',
        en: '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      alternateLocale: locale === 'de' ? 'en_US' : 'de_DE',
      siteName: 'Parlison Code Couture UG',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${outfit.variable} ${sourceSans.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
