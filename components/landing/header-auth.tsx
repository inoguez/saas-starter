'use client';
import Link from 'next/link';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { use } from 'react';
import { useUser } from '@/lib/auth';

export function AuthMenu() {
  const { userPromise } = useUser();
  const user = use(userPromise);
  return (
    <div className={cn('flex gap-4 items-center place-self-end')}>
      <div className='flex gap-2'>
        {user ? (
          <Button asChild size='sm' variant={'outlineSecondary'}>
            <Link href='/dashboard'>Tablero</Link>
          </Button>
        ) : (
          <>
            <Button asChild size='sm' variant={'accentOffWhiteText'}>
              <Link href={`/sign-in`}>Iniciar sesión</Link>
            </Button>
            <Button asChild size='sm' variant={'default'}>
              <Link href='/sign-up'>Prueba gratuita</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
