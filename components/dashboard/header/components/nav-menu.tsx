'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavLinks() {
  const routes = [
    {
      name: 'Tablero',
      href: '/dashboard',
    },
    {
      name: 'Relaciones',
      href: '/dashboard/relations',
    },
  ];
  const pathName = usePathname();

  return (
    <div className='flex gap-4 items-center justify-start'>
      {routes.map((route) => (
        <Link
          className={cn(
            'px-6 py-2 rounded-full hover:text-jade text-off-white',
            {
              'bg-jade/30 text-jade cursor-default pointer-events-none':
                pathName.startsWith(route.href),
            }
          )}
          href={route.href}
          key={route.name}
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
}
