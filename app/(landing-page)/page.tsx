import ContentSection from '@/components/landing/content-section';
import HeroFooter from '@/components/landing/hero-footer';
import HeroHeader from '@/components/landing/hero-header';

export default async function Index() {
  return (
    <>
      <HeroHeader />
      <ContentSection />
      <HeroFooter />
    </>
  );
}
