import { useTranslations } from 'next-intl';
import Container from '../layout/Container';
import Button from '../ui/Button';

export default function CTA() {
  const t = useTranslations('cta');

  return (
    <section id="contact" className="relative py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem]">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-coral via-accent-violet to-accent-teal animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />

          {/* Overlay pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                radial-gradient(circle at 80% 50%, white 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 px-8 py-20 md:px-16 md:py-28">
            <div className="max-w-3xl mx-auto text-center">
              {/* Decorative element */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-white/60"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {t('title')}
              </h2>
              <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed">
                {t('description')}
              </p>

              <Button
                href="mailto:info@parlison-cloud-couture.cloud"
                variant="secondary"
                size="lg"
                className="bg-white text-text-primary hover:bg-white/90 shadow-2xl shadow-black/20 font-semibold border-0"
              >
                {t('button')}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
