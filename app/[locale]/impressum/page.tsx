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
              Gutenbergstr. 14
              <br />
              28816 Stuhr
              <br />
              {t('address.country')}
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-8 mb-4">
              {t('represented')}
            </h3>
            <p className="text-text-secondary mb-6">
              {/* TODO: Geschäftsführer vollständiger Name */}
              Geschäftsführer: Timo Külbel
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-8 mb-4">
              {t('contact')}
            </h3>
            <p className="text-text-secondary mb-6">
              +49 176 841 38 695
              <br />
              info@parlison-code-couture.cloud
            </p>
            {/* Registereintrag und USt-ID werden nach Eintragung ergänzt
            <h3 className="text-xl font-semibold text-text-primary mt-8 mb-4">
              {t('registration')}
            </h3>
            <p className="text-text-secondary mb-6">
              Registergericht: ...
              <br />
              Registernummer: ...
            </p>

            <h3 className="text-xl font-semibold text-text-primary mt-8 mb-4">
              {t('vat')}
            </h3>
            <p className="text-text-secondary mb-6">
              USt-IdNr.: ...
            </p>
            */}

            <h3 className="text-xl font-semibold text-text-primary mt-8 mb-4">
              {t('responsibility')}
            </h3>
            <p className="text-text-secondary mb-6">
              Timo Külbel
              <br />
              Gutenbergstr. 14
              <br />
              28816 Stuhr
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
