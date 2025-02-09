import React from 'react';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PrincingContent() {
  const plans = [
    {
      name: 'Plan Básico',
      price: {
        monthly: 499,
        yearly: 4990,
      },
      description:
        'Ideal para usuarios individuales o pequeñas inmobiliarias que están comenzando a gestionar sus propiedades.',
      features: [
        'Gestión de hasta 20 propiedades activas',
        'Registro de 100 contactos (clientes o leads)',
        'Acceso al panel de tareas',
        'Actualizaciones automáticas de software y soporte técnico básico',
        'Notificaciones por email para seguimiento de tareas',
        'Integración básica con WhatsApp y correo electrónico para comunicarse con clientes',
        'Historial de actividad para seguimiento básico',
      ],
    },
    {
      name: 'Plan Profesional',
      price: {
        monthly: 1499,
        yearly: 14990,
      },
      description:
        'Ideal para inmobiliarias medianas que requieren un CRM más completo y mayor capacidad.',
      features: [
        'Gestión de hasta 100 propiedades activas',
        'Registro de 1,000 contactos',
        'Panel de últimas propiedades y reportes detallados de desempeño',
        'Acceso a todas las funcionalidades del panel de tareas',
        'Soporte prioritario y actualizaciones premium',
        'Automatización de correos electrónicos para el seguimiento de leads',
        'Integración avanzada con redes sociales y WhatsApp',
        'Funcionalidades de analítica para evaluar el rendimiento de ventas',
        'Exportación de datos en formatos Excel y PDF',
        'Acceso multiusuario (hasta 3 usuarios)',
      ],
    },
  ];
  return (
    <div className='grid grid-cols-2 gap-4'>
      {plans.map((plan, index) => (
        <Card
          key={index}
          className='relative overflow-hidden  backdrop-blur-sm grid grid-flow-row grid-rows-[auto_1fr_auto] neon-highlight'
        >
          {index === 1 && (
            <div className='absolute top-0 right-0 bg-jade/50 text-off-white text-xs font-bold px-3 py-1 rounded-bl-lg'>
              Recomendado
            </div>
          )}
          <CardHeader>
            <CardTitle className='text-2xl font-bold'>{plan.name}</CardTitle>
            <CardDescription className='text-off-white/50'>
              {plan.description}
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='text-4xl font-bold'>
              ${plan.price.monthly}{' '}
              <span className='text-lg font-normal text-off-white/50'>
                / mes
              </span>
            </div>
            <div className='text-sm text-off-white/50'>
              o ${plan.price.yearly} / año (ahorra 2 meses)
            </div>
            <ul className='space-y-2'>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className='flex items-center'>
                  <CheckCircle2 className='h-5 w-5 text-jade mr-2 flex-shrink-0' />
                  <span className='text-sm'>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className='w-full bg-gradient-to-r from-jet-black/10 to-jade text-off-white hover:from-jade/20 hover:to-jade/90 transition-all duration-200 shadow-lg hover:shadow-jade/25'>
              Elegir plan
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
