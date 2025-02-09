import { Button } from '@/components/ui/button';
import { PenTool } from 'lucide-react';
import React from 'react';

export default function PrincingFooter() {
  return (
    <div className=' flex flex-col gap-4 items-center text-center'>
      <PenTool size={76} className='text-jade ' />
      <div className='flex flex-col gap-1'>
        <h2>¿Necesitas un plan personalizado?</h2>
        <p>
          Si tus necesidades son más específicas, contáctanos para crear un plan
          a medida para tu negocio.
        </p>
      </div>
      <div>
        <Button>Contactar para un plan personalizado</Button>
      </div>
    </div>
  );
}
