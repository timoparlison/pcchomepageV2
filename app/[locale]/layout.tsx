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

  const keywordsDE = [
    // Hauptkeywords
    'Softwareentwicklung',
    'IT-Beratung',
    'IT Freelancer Vermittlung',
    'ERP System',
    'Vibe Coding',
    // Long-tail Keywords
    'KI gestützte Softwareentwicklung',
    'Claude Code Entwicklung',
    'Lovable App Entwicklung',
    'Vibe Coding Beratung Deutschland',
    'AI Pair Programming Service',
    'IT Freelancer Deutschland',
    'Fullstack Entwickler Freelancer',
    'Software Architektur Beratung',
    'Code Review Service',
    'Testautomatisierung Experten',
    'ERP System Mittelstand',
    'Vermietungssoftware',
    'Starter Templates Software',
    'Business Consultant IT',
    'DevOps Freelancer',
    'Maßgeschneiderte Software',
    'Software nach Maß',
    'Individuelle Softwareentwicklung',
  ];

  const keywordsEN = [
    // Main keywords
    'Software Development',
    'IT Consulting',
    'IT Freelancer Network',
    'ERP System',
    'Vibe Coding',
    // Long-tail keywords
    'AI powered software development',
    'Claude Code development',
    'Lovable app development',
    'Vibe coding consulting Germany',
    'AI pair programming service',
    'IT freelancers Germany',
    'Fullstack developer freelancer',
    'Software architecture consulting',
    'Code review service',
    'Test automation experts',
    'ERP system SMB',
    'Rental management software',
    'Starter templates software',
    'Business consultant IT',
    'DevOps freelancer',
    'Custom software development',
    'Bespoke software solutions',
    'Tailored software Germany',
  ];

  return {
    title: {
      default: isGerman
        ? 'Parlison Code Couture | Softwareentwicklung & Vibe Coding Beratung'
        : 'Parlison Code Couture | Software Development & Vibe Coding Consulting',
      template: isGerman
        ? '%s | Parlison Code Couture'
        : '%s | Parlison Code Couture',
    },
    description: isGerman
      ? 'Vibe Coding Experten: Wir unterstützen Sie bei der KI-gestützten Entwicklung mit Claude Code, Lovable & Co. Dazu IT-Freelancer Vermittlung, ERP-Systeme und Starter Templates. Maßgeschneiderte Software aus Deutschland.'
      : 'Vibe Coding experts: We support your AI-powered development with Claude Code, Lovable & more. Plus IT freelancer network, ERP systems and starter templates. Custom software from Germany.',
    keywords: isGerman ? keywordsDE : keywordsEN,
    authors: [{ name: 'Parlison Code Couture UG' }],
    creator: 'Parlison Code Couture UG',
    publisher: 'Parlison Code Couture UG',
    metadataBase: new URL('https://parlison-code-couture.cloud'),
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
      siteName: 'Parlison Code Couture',
      title: isGerman
        ? 'Parlison Code Couture | Vibe Coding & IT-Beratung'
        : 'Parlison Code Couture | Vibe Coding & IT Consulting',
      description: isGerman
        ? 'KI-gestützte Softwareentwicklung, IT-Freelancer und Starter Templates. Code Couture – maßgeschneiderte Software für Ihren Erfolg.'
        : 'AI-powered software development, IT freelancers and starter templates. Code Couture – custom software for your success.',
    },
    twitter: {
      card: 'summary_large_image',
      title: isGerman
        ? 'Parlison Code Couture | Vibe Coding Experten'
        : 'Parlison Code Couture | Vibe Coding Experts',
      description: isGerman
        ? 'Vibe Coding Beratung, IT-Freelancer und Starter Templates aus Deutschland.'
        : 'Vibe coding consulting, IT freelancers and starter templates from Germany.',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add verification codes when available
      // google: 'your-google-verification-code',
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
