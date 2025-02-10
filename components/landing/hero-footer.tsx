'use client';
import { Zap } from 'lucide-react';
import React from 'react';
import { InteractiveHoverButton } from '../ui/interactive-button';
import { useRouter } from 'next/navigation';

export default function HeroFooter() {
  const router = useRouter();
  return (
    <div className='flex flex-col gap-4 items-center text-center '>
      <Zap size={76} className='text-jade ' />
      <div className='flex flex-col gap-1'>
        <h2>Una plataforma diseñada para la eficiencia</h2>
        <p>
          Interfaz moderna y funcional que te permite tener el control total de
          tu negocio inmobiliario
        </p>
      </div>
      <div>
        <InteractiveHoverButton onClick={() => router.push('/sign-up')}>
          Comenzar ahora
        </InteractiveHoverButton>
      </div>
    </div>
  );
}
