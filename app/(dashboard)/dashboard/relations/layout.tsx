'use client';

import { RelationLinks } from '@/components/dashboard/relations/relations-links';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col gap-4 flex-1'>
      <div>
        <h1>Relaciones</h1>
        <p>Relaciones de tu negocio</p>
      </div>
      <div className='flex flex-col gap-4 grow'>
        <RelationLinks />
        {children}
      </div>
    </div>
  );
}
