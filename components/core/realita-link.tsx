'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

export default function RealitaLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <Link
      href={href}
      className={cn('text-off-white hover:text-jade transition-all ', {
        'text-jade': isActive(href),
      })}
    >
      {children}
    </Link>
  );
}
