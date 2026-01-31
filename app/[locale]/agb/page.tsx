import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import Container from '@/components/layout/Container';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.terms' });

  return {
    title: t('title'),
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('legal.terms');

  const sections = [
    'scope',
    'contract',
    'services',
    'payment',
    'liability',
    'confidentiality',
    'ip',
    'final',
  ];

  return (
    <section className="py-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-text-primary mb-12">
            {t('title')}
          </h1>

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
