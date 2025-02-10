import React from 'react';
import { BorderBeam } from '../ui/border-beam';
import Image from 'next/image';

export default function WireframeSection() {
  return (
    <div className='relative flex h-[652px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl  md:shadow-2xl realita-box fade-out-image'>
      <Image src={'/assets/propiedades.png'} alt='imagen de showcase' fill />
      <BorderBeam
        colorFrom='var(--color-jade)'
        colorTo='var(--color-jet-black)'
        size={750}
        duration={5}
        delay={9}
      />
    </div>
  );
}
