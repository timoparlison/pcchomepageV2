import type { Metadata } from 'next';
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
      ? 'Vermietungssoftware | Online-Buchung & Bestandsverwaltung'
      : 'Rental Software | Online Booking & Inventory Management',
    description: isGerman
      ? 'Digitale Vermietungsplattform mit Online-Buchung, Bestandsverwaltung, automatischer Abrechnung und Reporting. Perfekt für Vermietungsunternehmen aller Art.'
      : 'Digital rental platform with online booking, inventory management, automatic billing and reporting. Perfect for rental businesses of all types.',
    keywords: isGerman
      ? [
          'Vermietungssoftware',
          'Online Buchungssystem',
          'Bestandsverwaltung Software',
          'Mietverwaltung',
          'Vermietungsplattform',
          'Buchungssoftware',
          'Gerätevermietung Software',
          'Fahrzeugvermietung System',
          'Verleih Software',
          'Auslastungsanalyse',
        ]
      : [
          'Rental software',
          'Online booking system',
          'Inventory management software',
          'Rental management',
          'Rental platform',
          'Booking software',
          'Equipment rental software',
          'Vehicle rental system',
          'Rental business software',
          'Utilization analysis',
        ],
    alternates: {
      canonical: `/${locale}/plattformen/vermietung`,
      languages: {
        de: '/de/plattformen/vermietung',
        en: '/en/plattformen/vermietung',
      },
    },
  };
}

// JSON-LD for Rental Software Product
function generateJsonLd(locale: string) {
  const isGerman = locale === 'de';

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: isGerman ? 'Vibe Starter Vermietungsplattform' : 'Vibe Starter Rental Platform',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web-based',
    description: isGerman
      ? 'Digitale Vermietungslösung mit Online-Buchung, Bestandsverwaltung und automatischer Abrechnung'
      : 'Digital rental solution with online booking, inventory management and automatic billing',
    featureList: isGerman
      ? ['Online-Buchung', 'Bestandsverwaltung', 'Automatische Abrechnung', 'Reporting']
      : ['Online Booking', 'Inventory Management', 'Automatic Billing', 'Reporting'],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
    },
    provider: {
      '@type': 'Organization',
      name: 'Parlison Code Couture UG',
      url: 'https://parlison-code-couture.cloud',
    },
  };
}

export default async function RentalPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('platforms.rental');
  const tCommon = await getTranslations('common');

  const features = ['booking', 'inventory', 'billing', 'reporting'];

  const featureIcons: Record<string, JSX.Element> = {
    booking: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    inventory: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    billing: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
      </svg>
    ),
    reporting: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd(locale)) }}
      />
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent-coral/10 text-accent-coral rounded-full text-sm font-medium mb-6">
              {t('subtitle')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-text-secondary">
              {t('description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {features.map((feature) => (
              <Card key={feature} hover>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-coral/10 rounded-xl flex items-center justify-center text-accent-coral">
                    {featureIcons[feature]}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {t(`features.${feature}.title`)}
                    </h3>
                    <p className="text-text-secondary">
                      {t(`features.${feature}.description`)}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button href="mailto:info@parlison-code-couture.cloud" size="lg">
              {tCommon('contactUs')}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
