'use client';
import { DashBoardHeader } from '@/components/dashboard/header/dashboard-header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='flex flex-col min-h-screen p-6 gap-8'>
      <DashBoardHeader />
      {children}
    </section>
  );
}
