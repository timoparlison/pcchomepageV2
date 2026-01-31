import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Container from './Container';

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations();

  const legalLinks = [
    { href: `/${locale}/impressum`, label: t('nav.imprint') },
    { href: `/${locale}/datenschutz`, label: t('nav.privacy') },
    { href: `/${locale}/agb`, label: t('nav.terms') },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-border mt-auto">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-coral via-accent-violet to-accent-teal" />

      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href={`/${locale}`} className="inline-flex items-center gap-3 mb-6 group">
              <Image
                src="/logo.jpeg"
                alt="Parlison Code Couture"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div>
                <span className="font-sans font-bold text-xl text-text-primary">
                  Parlison
                </span>
                <span className="text-text-muted text-sm ml-2">
                  Code Couture
                </span>
              </div>
            </Link>
            <p className="text-text-secondary max-w-sm leading-relaxed">
              {t('footer.tagline')}
            </p>

            {/* Color bar */}
            <div className="flex gap-1.5 mt-6">
              <div className="w-8 h-1.5 rounded-full bg-accent-coral" />
              <div className="w-8 h-1.5 rounded-full bg-accent-violet" />
              <div className="w-8 h-1.5 rounded-full bg-accent-teal" />
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-sans font-semibold text-text-primary mb-5">
              {t('nav.platforms')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}/plattformen/erp`}
                  className="text-text-secondary hover:text-accent-teal transition-colors text-sm"
                >
                  {t('nav.erp')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/plattformen/vermietung`}
                  className="text-text-secondary hover:text-accent-coral transition-colors text-sm"
                >
                  {t('nav.rental')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sans font-semibold text-text-primary mb-5">
              {t('nav.legal')}
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent-violet transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <div className="flex items-center gap-2 text-text-muted text-xs">
            <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
            Made with passion in Germany
          </div>
        </div>
      </Container>
    </footer>
  );
}
