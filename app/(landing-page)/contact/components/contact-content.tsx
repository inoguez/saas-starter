import React from 'react';
import ContactForm from './contact-form';

import Link from 'next/link';
import ContactInfo from './contact-info';

export default function ContactContent() {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <ContactForm />
      <ContactInfo />
    </div>
  );
}
