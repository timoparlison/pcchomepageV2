import { useTranslations } from 'next-intl';
import Container from '../layout/Container';

export default function Features() {
  const t = useTranslations('about');

  const values = [
    {
      key: 'quality',
      color: 'teal',
      gradient: 'from-accent-teal to-accent-mint',
      bgGradient: 'from-accent-teal/10 to-accent-mint/5',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      key: 'innovation',
      color: 'coral',
      gradient: 'from-accent-coral to-accent-amber',
      bgGradient: 'from-accent-coral/10 to-accent-amber/5',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      key: 'partnership',
      color: 'violet',
      gradient: 'from-accent-violet to-accent-coral',
      bgGradient: 'from-accent-violet/10 to-accent-coral/5',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-bg-tertiary">
      <Container>
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-accent-teal rounded-full" />
            <span className="text-accent-teal text-sm font-medium uppercase tracking-[0.15em]">
              Werte
            </span>
            <div className="w-8 h-0.5 bg-accent-teal rounded-full" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.key}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className={`relative h-full bg-gradient-to-br ${value.bgGradient} rounded-3xl border border-border p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}>
                {/* Gradient top border */}
                <div className={`absolute top-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r ${value.gradient}`} />

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${value.gradient} text-white shadow-lg`}>
                  {value.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  {t(`values.${value.key}.title`)}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {t(`values.${value.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
