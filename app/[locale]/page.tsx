import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import BusinessAreas from '@/components/sections/BusinessAreas';
import Features from '@/components/sections/Features';
import CTA from '@/components/sections/CTA';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <BusinessAreas />
      <Features />
      <CTA />
    </>
  );
}
