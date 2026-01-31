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
      ? 'IT-Freelancer Vermittlung | Entwickler, Architekten & Consultants'
      : 'IT Freelancer Network | Developers, Architects & Consultants',
    description: isGerman
      ? 'Erfahrene IT-Freelancer für Ihre Projekte: Fullstack Entwickler, Software Architekten, Business Consultants, QA & DevOps Experten. Persönlich geprüft, sofort verfügbar.'
      : 'Experienced IT freelancers for your projects: Fullstack developers, software architects, business consultants, QA & DevOps experts. Personally vetted, immediately available.',
    keywords: isGerman
      ? [
          'IT Freelancer Vermittlung',
          'Fullstack Entwickler Freelancer',
          'Software Architekt Freelancer',
          'Business Consultant IT',
          'QA Engineer Freelancer',
          'DevOps Freelancer Deutschland',
          'IT Experten Vermittlung',
          'Freelancer Netzwerk IT',
          'Senior Developer Freelancer',
          'Testautomatisierung Experte',
        ]
      : [
          'IT freelancer network',
          'Fullstack developer freelancer',
          'Software architect freelancer',
          'Business consultant IT',
          'QA engineer freelancer',
          'DevOps freelancer Germany',
          'IT experts network',
          'Freelancer network IT',
          'Senior developer freelancer',
          'Test automation expert',
        ],
    alternates: {
      canonical: `/${locale}/vermittlung`,
      languages: {
        de: '/de/vermittlung',
        en: '/en/vermittlung',
      },
    },
  };
}

// JSON-LD for Freelancer Network
function generateJsonLd(locale: string) {
  const isGerman = locale === 'de';

  return {
    '@context': 'https://schema.org',
    '@type': 'EmploymentAgency',
    name: 'Parlison Code Couture - Talent Network',
    description: isGerman
      ? 'Vermittlung von erfahrenen IT-Freelancern: Entwickler, Architekten, Consultants und QA-Experten'
      : 'Network of experienced IT freelancers: Developers, architects, consultants and QA experts',
    url: `https://parlison-code-couture.cloud/${locale}/vermittlung`,
    provider: {
      '@type': 'Organization',
      name: 'Parlison Code Couture UG',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Germany',
    },
    serviceType: isGerman
      ? ['Fullstack Entwickler', 'Software Architekt', 'Business Consultant', 'QA Engineer', 'DevOps Engineer']
      : ['Fullstack Developer', 'Software Architect', 'Business Consultant', 'QA Engineer', 'DevOps Engineer'],
  };
}

export default async function TalentPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('talent');
  const tCommon = await getTranslations('common');

  const roles = ['developer', 'consultant', 'architect', 'qa'];

  const roleIcons: Record<string, JSX.Element> = {
    developer: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    consultant: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    architect: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    qa: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  const roleColors: Record<string, string> = {
    developer: 'bg-accent-teal/10 text-accent-teal',
    consultant: 'bg-accent-coral/10 text-accent-coral',
    architect: 'bg-accent-violet/10 text-accent-violet',
    qa: 'bg-accent-amber/10 text-accent-amber',
  };

  const teamMembers = ['timo', 'lars', 'marcel', 'christian', 'alexei', 'kjell'];

  const teamColors: Record<string, string> = {
    timo: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20',
    lars: 'bg-accent-coral/10 text-accent-coral border-accent-coral/20',
    kjell: 'bg-accent-amber/10 text-accent-amber border-accent-amber/20',
    alexei: 'bg-accent-mint/10 text-accent-mint border-accent-mint/20',
    christian: 'bg-accent-violet/10 text-accent-violet border-accent-violet/20',
    marcel: 'bg-accent-coral/10 text-accent-coral border-accent-coral/20',
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

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              {t('team.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member}
                className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${teamColors[member]}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-white/50 flex items-center justify-center text-2xl font-bold">
                    {t(`team.${member}.name`).charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">
                      {t(`team.${member}.name`)}
                    </h3>
                    <p className="text-sm font-medium opacity-80">
                      {t(`team.${member}.role`)}
                    </p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {t(`team.${member}.description`)}
                </p>
              </div>
            ))}
          </div>
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
