import ContentSection from '@/components/landing/content-section';
import HeroFooter from '@/components/landing/hero-footer';
import HeroHeader from '@/components/landing/hero-header';
import WireframeSection from '@/components/landing/wireframe-section';

export default async function Index() {
  return (
    <>
      <HeroHeader />
      <WireframeSection />
      <ContentSection />
      <HeroFooter />
    </>
  );
}
