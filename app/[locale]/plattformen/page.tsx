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
  const t = await getTranslations({ locale, namespace: 'platforms' });

  return {
    title: t('title'),
    description: t('subtitle'),
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
  );
}
