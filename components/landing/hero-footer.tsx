import { ArrowRight, Zap } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';

export default function HeroFooter() {
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
        <Button className='text-lg gap-2 items-center'>
          Comenzar ahora <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );
}
