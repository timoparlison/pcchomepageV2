'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/i18n/config';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <div className="flex items-center gap-1 text-sm">
      {locales.map((loc, index) => (
        <span key={loc} className="flex items-center">
          {index > 0 && <span className="text-border mx-1">|</span>}
          <button
            onClick={() => switchLocale(loc)}
            className={`
              px-2 py-1 rounded transition-colors
              ${locale === loc
                ? 'text-text-primary font-medium'
                : 'text-text-secondary hover:text-text-primary'
              }
            `}
            aria-current={locale === loc ? 'true' : undefined}
          >
            {localeNames[loc]}
          </button>
        </span>
      ))}
    </div>
  );
}
