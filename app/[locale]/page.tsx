import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import BusinessAreas from '@/components/sections/BusinessAreas';
import Features from '@/components/sections/Features';
import CTA from '@/components/sections/CTA';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isGerman = locale === 'de';

  return {
    title: isGerman
      ? 'Vibe Coding Beratung & IT-Freelancer | Parlison Code Couture'
      : 'Vibe Coding Consulting & IT Freelancers | Parlison Code Couture',
    description: isGerman
      ? 'Ihr Partner für Vibe Coding: Beratung für Claude Code, Lovable & KI-Tools. Dazu erfahrene IT-Freelancer (Entwickler, Architekten, Tester) und Starter Templates für ERP, CRM & mehr.'
      : 'Your partner for vibe coding: Consulting for Claude Code, Lovable & AI tools. Plus experienced IT freelancers (developers, architects, testers) and starter templates for ERP, CRM & more.',
    alternates: {
      canonical: `/${locale}`,
      languages: {
        de: '/de',
        en: '/en',
      },
    },
  };
}

// JSON-LD Structured Data
function generateJsonLd(locale: string) {
  const isGerman = locale === 'de';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://parlison-code-couture.cloud/#organization',
        name: 'Parlison Code Couture UG',
        url: 'https://parlison-code-couture.cloud',
        logo: {
          '@type': 'ImageObject',
          url: 'https://parlison-code-couture.cloud/logo.jpeg',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+49-176-841-38-695',
          contactType: 'customer service',
          availableLanguage: ['German', 'English'],
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Gutenbergstr. 14',
          addressLocality: 'Stuhr',
          postalCode: '28816',
          addressCountry: 'DE',
        },
        sameAs: [
          'https://vibecode-sparring.com',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://parlison-code-couture.cloud/#website',
        url: 'https://parlison-code-couture.cloud',
        name: 'Parlison Code Couture',
        description: isGerman
          ? 'Vibe Coding Beratung, IT-Freelancer Vermittlung und Starter Templates'
          : 'Vibe Coding Consulting, IT Freelancer Network and Starter Templates',
        publisher: {
          '@id': 'https://parlison-code-couture.cloud/#organization',
        },
        inLanguage: [locale === 'de' ? 'de-DE' : 'en-US'],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://parlison-code-couture.cloud/#service',
        name: 'Parlison Code Couture',
        description: isGerman
          ? 'Softwareentwicklung, Vibe Coding Beratung und IT-Freelancer Vermittlung'
          : 'Software Development, Vibe Coding Consulting and IT Freelancer Network',
        provider: {
          '@id': 'https://parlison-code-couture.cloud/#organization',
        },
        serviceType: isGerman
          ? ['Softwareentwicklung', 'IT-Beratung', 'Vibe Coding', 'Freelancer Vermittlung']
          : ['Software Development', 'IT Consulting', 'Vibe Coding', 'Freelancer Network'],
        areaServed: {
          '@type': 'Country',
          name: 'Germany',
        },
      },
    ],
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd(locale)) }}
      />
      <Hero />
      <BusinessAreas />
      <Features />
      <CTA />
    </>
  );
}
