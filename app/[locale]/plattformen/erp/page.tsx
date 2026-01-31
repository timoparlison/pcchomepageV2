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
      ? 'ERP-System für Mittelstand | Modulares Cloud-ERP Template'
      : 'ERP System for SMBs | Modular Cloud ERP Template',
    description: isGerman
      ? 'Modulares ERP-System Template für mittelständische Unternehmen. Cloud-native, API-first, mit Echtzeit-Analytics. Flexibel anpassbar mit Lovable oder Claude Code.'
      : 'Modular ERP system template for medium-sized businesses. Cloud-native, API-first, with real-time analytics. Flexibly customizable with Lovable or Claude Code.',
    keywords: isGerman
      ? [
          'ERP System Mittelstand',
          'modulares ERP',
          'Cloud ERP',
          'ERP Template',
          'ERP Software Deutschland',
          'Warenwirtschaft',
          'Unternehmenssteuerung',
          'API-first ERP',
          'ERP Lösung KMU',
          'Business Intelligence Dashboard',
        ]
      : [
          'ERP system SMB',
          'modular ERP',
          'cloud ERP',
          'ERP template',
          'ERP software Germany',
          'inventory management',
          'enterprise management',
          'API-first ERP',
          'ERP solution SME',
          'business intelligence dashboard',
        ],
    alternates: {
      canonical: `/${locale}/plattformen/erp`,
      languages: {
        de: '/de/plattformen/erp',
        en: '/en/plattformen/erp',
      },
    },
  };
}

// JSON-LD for ERP Software Product
function generateJsonLd(locale: string) {
  const isGerman = locale === 'de';

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: isGerman ? 'Vibe Starter ERP-System' : 'Vibe Starter ERP System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web-based',
    description: isGerman
      ? 'Modulares, cloud-natives ERP-System für mittelständische Unternehmen mit API-first Design und Echtzeit-Analytics'
      : 'Modular, cloud-native ERP system for medium-sized businesses with API-first design and real-time analytics',
    featureList: isGerman
      ? ['Modularer Aufbau', 'Nahtlose Integration', 'Echtzeit-Analytics', 'Cloud-Native']
      : ['Modular Architecture', 'Seamless Integration', 'Real-time Analytics', 'Cloud-Native'],
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

export default async function ERPPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('platforms.erp');
  const tCommon = await getTranslations('common');

  const features = ['modular', 'integration', 'analytics', 'cloud'];

  const featureIcons: Record<string, JSX.Element> = {
    modular: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    integration: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    analytics: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    cloud: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
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
            <span className="inline-block px-4 py-2 bg-accent-teal/10 text-accent-teal rounded-full text-sm font-medium mb-6">
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
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-teal/10 rounded-xl flex items-center justify-center text-accent-teal">
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
