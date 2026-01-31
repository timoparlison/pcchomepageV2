import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import Container from '@/components/layout/Container';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.privacy' });

  return {
    title: t('title'),
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('legal.privacy');

  const sections = [
    'responsible',
    'legal',
    'ssl',
    'hosting',
    'logs',
    'cookies',
    'contact',
    'retention',
    'rights',
    'fonts',
  ];

  return (
    <section className="py-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            {t('title')}
          </h1>

          <p className="text-sm text-text-muted mb-8">
            {t('lastUpdated')}
          </p>

          <p className="text-lg text-text-secondary mb-12">
            {t('intro')}
          </p>

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section}>
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  {t(`sections.${section}.title`)}
                </h2>
                <p className="text-text-secondary">
                  {t(`sections.${section}.content`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
