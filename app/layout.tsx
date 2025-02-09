import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import { UserProvider } from '@/lib/auth';
import { getUser } from '@/lib/db/queries';
import { cn } from '@/lib/utils';
import { Header } from '@/components/landing/landing-header';
import Footer from '@/components/landing/landing-footer';

export const metadata: Metadata = {
  title: 'Realita MX',
  description: 'Get started quickly with Next.js, Postgres, and Stripe.',
};

export const viewport: Viewport = {
  maximumScale: 1,
};

const geist = Geist({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userPromise = getUser();
  /* <section className={cn('mx-auto flex flex-col min-h-screen p-6 ')}>
    <Header />
    <div className='flex-1'>{children}</div>
    <Footer />
  </section> */
  return (
    <html lang='es' className={`${geist.className}`}>
      <body className='min-h-[100dvh] bg-gradient-to-b from-jet-black to-jade-gradient bg-jet-black '>
        <UserProvider userPromise={userPromise}>{children}</UserProvider>
      </body>
    </html>
  );
}
