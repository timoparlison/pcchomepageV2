import { useTranslations } from 'next-intl';
import Container from '../layout/Container';
import Button from '../ui/Button';

export default function Hero() {
  const t = useTranslations('hero');
  const m = useTranslations('mission');

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent-coral/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-accent-violet/20 rounded-full blur-[150px] animate-float-delayed" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent-teal/15 rounded-full blur-[100px] animate-float" />
        <div className="absolute top-2/3 right-1/4 w-[300px] h-[300px] bg-accent-amber/15 rounded-full blur-[80px] animate-float-delayed" />
      </div>

      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-10 opacity-0 animate-fade-in-up">
            <a
              href="https://vibecode-sparring.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-border shadow-sm hover:border-accent-coral/50 hover:shadow-md transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-accent-coral animate-pulse" />
              <span className="text-sm font-medium text-text-secondary">{t('badge')}</span>
              <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Mission Statement */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight opacity-0 animate-fade-in-up animation-delay-200">
              {m('statement')}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl opacity-0 animate-fade-in-up animation-delay-400">
              <span className="gradient-text font-semibold">{m('tagline')}</span>
              <span className="text-text-secondary">, {m('taglineEnd')}</span>
            </p>
          </div>

          {/* Color accent bar */}
          <div className="flex justify-center gap-2 mb-12 opacity-0 animate-fade-in-up animation-delay-600">
            <div className="w-16 h-1.5 rounded-full bg-accent-coral" />
            <div className="w-16 h-1.5 rounded-full bg-accent-violet" />
            <div className="w-16 h-1.5 rounded-full bg-accent-teal" />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-800">
            <Button href="#business-areas" size="lg" variant="primary">
              {t('cta')}
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              {t('ctaSecondary')}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted opacity-0 animate-fade-in animation-delay-800">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
              <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
