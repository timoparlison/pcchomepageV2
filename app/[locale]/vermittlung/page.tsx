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
  const t = await getTranslations({ locale, namespace: 'talent' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function TalentPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('talent');
  const tCommon = await getTranslations('common');

  const roles = ['developer', 'dataEngineer', 'architect', 'devops'];

  const roleIcons: Record<string, JSX.Element> = {
    developer: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    dataEngineer: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    architect: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    devops: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  };

  const roleColors: Record<string, string> = {
    developer: 'bg-accent-teal/10 text-accent-teal',
    dataEngineer: 'bg-accent-coral/10 text-accent-coral',
    architect: 'bg-accent-violet/10 text-accent-violet',
    devops: 'bg-accent-amber/10 text-accent-amber',
  };

  return (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {roles.map((role) => (
            <Card key={role} hover>
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${roleColors[role]}`}>
                  {roleIcons[role]}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {t(`roles.${role}.title`)}
                  </h3>
                  <p className="text-text-secondary">
                    {t(`roles.${role}.description`)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-bg-secondary rounded-3xl border border-border p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-accent-teal/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="flex-grow">
                <span className="text-sm text-accent-teal font-medium">
                  {t('founder.title')}
                </span>
                <h3 className="text-2xl font-bold text-text-primary mt-1 mb-4">
                  {t('founder.name')}
                </h3>
                <p className="text-text-secondary mb-6">
                  {t('founder.description')}
                </p>
                <Button
                  href={t('founder.profileUrl')}
                  variant="secondary"
                  external
                >
                  {t('founder.profileLink')} &rarr;
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button href="mailto:info@parlison-cloud-couture.cloud" size="lg">
            {tCommon('contactUs')}
          </Button>
        </div>
      </Container>
    </section>
  );
}
