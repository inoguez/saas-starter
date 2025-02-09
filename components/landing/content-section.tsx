import React from 'react';
import { Building2, CalendarDays, ClipboardList, Users2 } from 'lucide-react';
import CharacteristicCard from '../core/characteristic-card';
export default function ContentSection() {
  const characteristics = [
    {
      icon: ClipboardList,
      title: 'Tablero intuitivo',
      description:
        'Visualiza todas tus actividades y tareas importantes en un solo lugar',
    },
    {
      icon: Building2,
      title: 'Gestión de propiedades',
      description:
        'Administra tu portafolio de propiedades de manera eficiente',
    },
    {
      icon: CalendarDays,
      title: 'Calendario integrado',
      description: 'Programa y gestiona visitas y actividades importantes',
    },
    {
      icon: Users2,
      title: 'Gestión de leads',
      description: 'Seguimiento efectivo de prospectos y clientes potenciales',
    },
  ];
  return (
    <div className='grid grid-cols-4 gap-4'>
      {characteristics.map((feature, index) => (
        <CharacteristicCard feature={feature} key={index} />
      ))}
    </div>
  );
}
