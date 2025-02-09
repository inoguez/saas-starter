import React from 'react';
import Link from 'next/link';
import RealitaLinkLogo from '../core/realita-link-logo';

export function LandingFooter({
  isInLanding = true,
}: {
  isInLanding?: boolean;
}) {
  if (!isInLanding) return;
  return (
    <footer className='w-full '>
      <div className='  items-center justify-between gap-4 grid grid-cols-[1fr_auto_1fr]  '>
        <RealitaLinkLogo
          classNameLogo={{ width: 20, height: 24 }}
          classNameLabel='text-md'
        />
        <p className='text-sm text-off-white/40'>
          © 2024 Realita. Todos los derechos reservados.
        </p>
        <nav className='flex gap-4 justify-end'>
          <Link
            className='text-sm text-off-white/40 hover:text-jade transition-colors'
            href='#'
          >
            Privacidad
          </Link>
          <Link
            className='text-sm text-off-white/40 hover:text-jade transition-colors'
            href='#'
          >
            Términos
          </Link>
          <Link
            className='text-sm text-off-white/40 hover:text-jade transition-colors'
            href='#'
          >
            Contacto
          </Link>
        </nav>
      </div>
    </footer>
  );
}
