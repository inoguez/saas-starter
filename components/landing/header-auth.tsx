import Link from 'next/link';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export function AuthMenu() {
  return (
    <div className={cn('flex gap-4 items-center place-self-end')}>
      <div className='flex gap-2'>
        <Button asChild size='sm' variant={'accentOffWhiteText'}>
          <Link href={`/sign-in`}>Iniciar sesión</Link>
        </Button>
        <Button asChild size='sm' variant={'default'}>
          <Link href='/sign-up'>Prueba gratuita</Link>
        </Button>
      </div>
    </div>
  );
}
