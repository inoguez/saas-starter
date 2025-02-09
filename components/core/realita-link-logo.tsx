import React from 'react';
import Link from 'next/link';
import RealitaLogo from './realita-logo';
import { cn } from '@/lib/utils';

interface logoClassNames {
  width?: number | undefined;
  height?: number | undefined;
}

export default function RealitaLinkLogo({
  className,
  classNameLogo,
  classNameLabel,
}: {
  className?: string;
  classNameLogo?: logoClassNames;
  classNameLabel?: string;
}) {
  return (
    <div className={cn(className)}>
      <Link href='/' className={cn('flex gap-2 items-center group w-fit')}>
        <RealitaLogo {...classNameLogo} />
        <span
          className={cn(
            'text-2xl text-off-white group-hover:text-jade',
            classNameLabel
          )}
        >
          Realita
        </span>
      </Link>
    </div>
  );
}
