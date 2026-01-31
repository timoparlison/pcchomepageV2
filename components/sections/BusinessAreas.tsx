import { useLocale, useTranslations } from 'next-intl';
import Container from '../layout/Container';
import BentoCard from '../ui/BentoCard';

export default function BusinessAreas() {
  const t = useTranslations('businessAreas');
  const locale = useLocale();

  const areas = [
    {
      key: 'sparring',
      accentColor: 'coral' as const,
      href: 'https://vibecode-sparring.com',
      external: true,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      key: 'talent',
      accentColor: 'teal' as const,
      href: `/${locale}/vermittlung`,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      key: 'platforms',
      accentColor: 'violet' as const,
      href: `/${locale}/plattformen`,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ];

  return (
    <section id="business-areas" className="relative py-28">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent-teal/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-coral/10 rounded-full blur-[150px]" />
      </div>

      <Container>
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent-violet" />
            <span className="text-accent-violet text-sm font-medium uppercase tracking-[0.15em]">
              {t('subtitle')}
            </span>
            <div className="w-8 h-px bg-accent-violet" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            {t('title')}
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={area.key}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <BentoCard
                title={t(`${area.key}.title`)}
                description={t(`${area.key}.description`)}
                features={t.raw(`${area.key}.features`) as string[]}
                icon={area.icon}
                accentColor={area.accentColor}
                href={area.href}
                external={'external' in area && area.external}
                className="h-full"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
