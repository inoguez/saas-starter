import React from 'react';
import RealitaLink from '../core/realita-link';

export default function NavMenu() {
  return (
    <ul className='flex gap-4'>
      <li>
        <RealitaLink href='/'>Inicio</RealitaLink>
      </li>
      <li>
        <RealitaLink href='/characteristics'>Características</RealitaLink>
      </li>
      <li>
        <RealitaLink href='/pricing'>Precios</RealitaLink>
      </li>
      <li>
        <RealitaLink href='/contact'>Contacto</RealitaLink>
      </li>
    </ul>
  );
}
