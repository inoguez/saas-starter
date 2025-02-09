import { LandingFooter } from '@/components/landing/landing-footer';
import { LandingHeader } from '@/components/landing/landing-header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='flex flex-col gap-20 min-h-screen max-w-8xl p-6 mx-auto'>
      <LandingHeader />
      <div className='flex-1 flex flex-col gap-20 max-w-5xl mx-auto '>
        {children}
      </div>
      <LandingFooter />
    </section>
  );
}
