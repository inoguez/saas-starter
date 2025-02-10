'use client';
import { Button } from '@/components/ui/button';
import { InteractiveHoverButton } from '../ui/interactive-button';
import { useRouter } from 'next/navigation';

export default function HeroHeader() {
  const router = useRouter();
  return (
    <div className='flex flex-col gap-6 items-center text-center text-balance'>
      <div className='flex flex-col gap-4 '>
        <h1>Gestiona tus propiedades de forma inteligente</h1>

        <h3 className=''>
          Todo lo que necesitas saber en un solo lugar. Administra{' '}
          <span className='text-jade'> propiedades</span>,
          <span className='text-jade'> tareas</span>, y relaciones con{' '}
          <span className='text-jade'> clientes</span> en una plataforma
          unificada y vanguardista.
        </h3>
      </div>

      <div className='flex gap-4'>
        <InteractiveHoverButton onClick={() => router.push('/sign-up')}>
          Comenzar ahora
        </InteractiveHoverButton>
        <Button variant={'secondary'} className='text-lg gap-2 items-center'>
          Demo
        </Button>
      </div>
    </div>
  );
}
