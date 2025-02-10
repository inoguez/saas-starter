'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  return (
    <div className='flex gap-4 flex-1'>
      <div className=' flex flex-1 border border-off-white/15 bg-jet-black/20 text-off-white/80 shadow-sm p-4 rounded-3xl transition-all'>
        Table
        <Link href={pathName + '/1'}>1</Link>
      </div>
      {children}
    </div>
  );
}
