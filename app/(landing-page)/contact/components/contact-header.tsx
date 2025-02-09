import React from 'react';

export default function ContactHeader() {
  return (
    <div className='flex flex-col gap-6 items-center text-center text-balance'>
      <div className='flex flex-col gap-4 '>
        <h1>Contáctanos</h1>
        <h3>
          Estamos aquí para ayudarte. Envíanos un mensaje y nos pondremos en
          contacto contigo lo antes posible.
        </h3>
      </div>
    </div>
  );
}
