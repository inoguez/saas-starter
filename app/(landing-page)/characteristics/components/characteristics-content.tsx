import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  BarChart2,
  Building2,
  CalendarDays,
  ClipboardList,
  Globe,
  Shield,
  Users2,
  Zap,
} from 'lucide-react';

export default function CharacteristicsContent() {
  const features = [
    {
      icon: ClipboardList,
      title: 'Tablero intuitivo',
      description:
        'Visualiza todas tus actividades y tareas importantes en un solo lugar, optimizando tu flujo de trabajo diario.',
    },
    {
      icon: Building2,
      title: 'Gestión de propiedades',
      description:
        'Administra tu portafolio de propiedades de manera eficiente, con detalles completos y actualizaciones en tiempo real.',
    },
    {
      icon: CalendarDays,
      title: 'Calendario integrado',
      description:
        'Programa y gestiona visitas y actividades importantes, sincronizando perfectamente con tu agenda personal.',
    },
    {
      icon: Users2,
      title: 'Gestión de leads',
      description:
        'Seguimiento efectivo de prospectos y clientes potenciales, aumentando tus posibilidades de cerrar tratos.',
    },
    {
      icon: BarChart2,
      title: 'Análisis avanzado',
      description:
        'Obtén insights valiosos sobre el rendimiento de tus propiedades y estrategias de negocio.',
    },
    {
      icon: Shield,
      title: 'Seguridad robusta',
      description:
        'Protege la información sensible de tus clientes y propiedades con nuestro sistema de seguridad de última generación.',
    },
    {
      icon: Zap,
      title: 'Automatización inteligente',
      description:
        'Ahorra tiempo y reduce errores con procesos automatizados para tareas repetitivas.',
    },
    {
      icon: Globe,
      title: 'Acceso móvil',
      description:
        'Gestiona tu negocio desde cualquier lugar con nuestra aplicación móvil totalmente funcional.',
    },
  ];
  return (
    <div className='grid grid-cols-4 gap-4'>
      {features.map((feature, index) => (
        <Card
          key={index}
          className='neon-highlight grid grid-flow-row grid-rows-[1fr_auto] '
        >
          <CardHeader className='flex flex-col gap-2'>
            <feature.icon className='h-14 w-14 text-jade/80' />
            <CardTitle className='text-lg font-bold'>{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className='text-zinc-400'>
              {feature.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
