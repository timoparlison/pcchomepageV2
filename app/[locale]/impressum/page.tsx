import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import Container from '@/components/layout/Container';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.imprint' });

  return {
    title: t('title'),
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function ImprintPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('legal.imprint');

  return (
    <section className="py-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-text-primary mb-12">
            {t('title')}
          </h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">
              {t('company')}
            </h2>

            <p className="text-text-secondary mb-6">
              {/* TODO: Straße und Hausnummer */}
              <br />
              {/* TODO: PLZ und Stadt */}
              <br />
              {t('address.country')}
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-8 mb-4">
              {t('represented')}
            </h3>
            <p className="text-text-secondary mb-6">
              {/* TODO: Geschäftsführer vollständiger Name */}
              Geschäftsführer: Timo {/* TODO: Nachname */}
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-8 mb-4">
              {t('contact')}
            </h3>
            <p className="text-text-secondary mb-6">
              {/* TODO: Telefonnummer */}
              <br />
              {/* TODO: E-Mail-Adresse */}
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-8 mb-4">
              {t('registration')}
            </h3>
            <p className="text-text-secondary mb-6">
              {/* TODO: Registergericht (z.B. Amtsgericht München) */}
              <br />
              {/* TODO: Registernummer (z.B. HRB 123456) */}
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-8 mb-4">
              {t('vat')}
            </h3>
            <p className="text-text-secondary mb-6">
              {/* TODO: Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz */}
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-8 mb-4">
              {t('responsibility')}
            </h3>
            <p className="text-text-secondary mb-6">
              Timo {/* TODO: Nachname */}
              <br />
              {/* TODO: Adresse */}
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-8 mb-4">
              {t('dispute')}
            </h3>
            <p className="text-text-secondary mb-6">
              {t('disputeText')}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
