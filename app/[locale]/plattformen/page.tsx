import type { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isGerman = locale === 'de';

  return {
    title: isGerman
      ? 'Vibe Starter Templates | ERP, CRM & Vermietungssoftware'
      : 'Vibe Starter Templates | ERP, CRM & Rental Software',
    description: isGerman
      ? 'Fertige Starter-Templates für Ihre Software-Projekte: ERP-Systeme für den Mittelstand, Vermietungsplattformen, CRM und mehr. Schneller Projektstart mit Lovable oder Claude Code.'
      : 'Ready-made starter templates for your software projects: ERP systems for SMBs, rental platforms, CRM and more. Quick project start with Lovable or Claude Code.',
    keywords: isGerman
      ? [
          'Starter Templates Software',
          'ERP System Mittelstand',
          'Vermietungssoftware',
          'CRM Template',
          'Schulungsplattform Software',
          'Lovable Templates',
          'Claude Code Vorlagen',
          'Software Boilerplate',
          'SaaS Template',
          'Vibe Coding Templates',
        ]
      : [
          'Starter templates software',
          'ERP system SMB',
          'Rental management software',
          'CRM template',
          'Training platform software',
          'Lovable templates',
          'Claude Code templates',
          'Software boilerplate',
          'SaaS template',
          'Vibe coding templates',
        ],
    alternates: {
      canonical: `/${locale}/plattformen`,
      languages: {
        de: '/de/plattformen',
        en: '/en/plattformen',
      },
    },
  };
}

// JSON-LD for Software Products
function generateJsonLd(locale: string) {
  const isGerman = locale === 'de';

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: isGerman ? 'Vibe Starter Templates' : 'Vibe Starter Templates',
    description: isGerman
      ? 'Fertige Starter-Templates für schnellen Projektstart'
      : 'Ready-made starter templates for quick project launches',
    itemListElement: [
      {
        '@type': 'SoftwareApplication',
        position: 1,
        name: isGerman ? 'ERP-System Template' : 'ERP System Template',
        applicationCategory: 'BusinessApplication',
        description: isGerman
          ? 'Modulares ERP-System für mittelständische Unternehmen'
          : 'Modular ERP system for medium-sized businesses',
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'SoftwareApplication',
        position: 2,
        name: isGerman ? 'Vermietungsplattform Template' : 'Rental Platform Template',
        applicationCategory: 'BusinessApplication',
        description: isGerman
          ? 'Digitale Vermietungslösung mit Online-Buchung'
          : 'Digital rental solution with online booking',
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
        },
      },
    ],
  };
}

export default async function PlatformsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('platforms');

  const platforms = [
    {
      key: 'erp',
      href: `/${locale}/plattformen/erp`,
      accentColor: 'bg-accent-teal/10 border-accent-teal/20',
      icon: (
        <svg className="w-8 h-8 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      key: 'rental',
      href: `/${locale}/plattformen/vermietung`,
      accentColor: 'bg-accent-coral/10 border-accent-coral/20',
      icon: (
        <svg className="w-8 h-8 text-accent-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd(locale)) }}
      />
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-text-secondary">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {platforms.map((platform) => (
            <Link key={platform.key} href={platform.href} className="block">
              <Card hover className={`h-full ${platform.accentColor} border-2`}>
                <div className="flex flex-col h-full">
                  <div className="mb-4">{platform.icon}</div>
                  <h2 className="text-2xl font-bold text-text-primary mb-2">
                    {t(`${platform.key}.title`)}
                  </h2>
                  <p className="text-sm text-text-secondary mb-2">
                    {t(`${platform.key}.subtitle`)}
                  </p>
                  <p className="text-text-secondary flex-grow mb-4">
                    {t(`${platform.key}.description`)}
                  </p>
                  <Button variant="ghost" className="justify-start p-0">
                    {locale === 'de' ? 'Mehr erfahren' : 'Learn more'} &rarr;
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
          </div>
        </Container>
      </section>
    </>
  );
}
