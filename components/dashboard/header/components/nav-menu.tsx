'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

function isActiveRoute(routeHref: string, currentPath: string) {
  if (routeHref === '/dashboard') {
    return currentPath === routeHref;
  }
  return currentPath === routeHref || currentPath.startsWith(`${routeHref}/`);
}

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
  let [activeTab, setActiveTab] = useState<string | undefined>(
    routes.find((item) => isActiveRoute(item.href, pathName))?.href
  );

  return (
    <div className='flex gap-4 items-center justify-start'>
      {routes.map((route) => (
        <Link
          onClick={() => setActiveTab(route.href)}
          href={route.href}
          key={route.name}
          className={cn(
            'relative px-6 py-2 rounded-full hover:text-jade text-off-white transition-colors duration-300', // Agregar transición aquí
            {
              'text-jade cursor-default pointer-events-none': isActiveRoute(
                route.href,
                pathName
              ),
            }
          )}
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          {activeTab === route.href && (
            <motion.span
              layoutId='bubble'
              className='absolute inset-0 z-10 bg-jade/30 mix-blend-hard-light'
              style={{ borderRadius: 9999 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          {route.name}
        </Link>
      ))}
    </div>
  );
}
