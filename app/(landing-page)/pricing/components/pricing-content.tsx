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
      name: 'Plan Gratis',
      price: {
        monthly: 0,
        yearly: 0,
      },
      description:
        'Explora y experimenta con las funcionalidades esenciales de Realita CRM sin compromiso. Perfecto para evaluar la plataforma y comprobar su potencial.',
      features: [
        'Gestión de hasta 5 propiedades activas con dashboard intuitivo',
        'Registro de hasta 50 contactos (clientes, leads o inquilinos)',
        'Acceso limitado al panel de tareas para seguimiento básico de actividades',
        'Notificaciones básicas por email',
        'Integración esencial con correo electrónico',
        'Acceso a recursos de autoayuda: tutoriales, documentación y comunidad de usuarios',
        'Soporte vía foro y FAQ',
      ],
    },
    {
      name: 'Plan Básico',
      price: {
        monthly: 7999,
        yearly: 79990,
      },
      description:
        'Diseñado para pequeñas inmobiliarias o agentes independientes que gestionan hasta 50 propiedades y buscan optimizar sus operaciones diarias.',
      features: [
        'Gestión de hasta 50 propiedades con un dashboard optimizado',
        'Registro de hasta 1,000 contactos (clientes, leads, inquilinos)',
        'Panel de tareas con funciones esenciales de organización y seguimiento',
        'Notificaciones automáticas por email para recordatorios y seguimiento',
        'Integración básica con WhatsApp y correo electrónico para comunicación directa',
        'Reportes y análisis básicos para monitorear desempeño',
        'Onboarding inicial y soporte técnico estándar',
      ],
    },
    {
      name: 'Plan Profesional',
      price: {
        monthly: 14999,
        yearly: 149990,
      },
      description:
        'Ideal para inmobiliarias medianas que requieren mayor capacidad, análisis detallados y automatización para potenciar su crecimiento.',
      features: [
        'Gestión de hasta 200 propiedades con dashboard avanzado y análisis en tiempo real',
        'Registro de hasta 5,000 contactos con segmentación y seguimiento detallado',
        'Panel de tareas con automatización de workflows y asignación dinámica de tareas',
        'Automatización de correos electrónicos para nurturing y seguimiento de leads',
        'Integración avanzada: WhatsApp, email y redes sociales (Facebook, Instagram) junto a herramientas de marketing digital',
        'Reportes personalizados y análisis avanzado de rendimiento de ventas y propiedades',
        'Acceso multiusuario (hasta 5 usuarios) con roles y permisos configurables',
        'Soporte prioritario 24/7 con tiempos de respuesta rápidos',
      ],
    },
    {
      name: 'Plan Corporativo',
      price: {
        monthly: 24999,
        yearly: 249990,
      },
      description:
        'Para grandes inmobiliarias y administradores de edificios que requieren una solución integral, escalable y con herramientas avanzadas de análisis y automatización.',
      features: [
        'Gestión de hasta 500 propiedades con análisis de rendimiento en tiempo real y dashboard integral',
        'Registro ilimitado de contactos con segmentación avanzada y seguimiento personalizado',
        'Automatización total de flujos de trabajo: campañas de email marketing y mensajes automatizados en WhatsApp',
        'Integración completa con sistemas contables, ERP y plataformas de terceros',
        'Funcionalidades completas de analítica y BI para informes estratégicos y personalizados',
        'Acceso multiusuario (hasta 20 usuarios) con permisos y roles altamente configurables',
        'Funciones premium de IA para predicción de tendencias, detección de oportunidades y generación automática de reportes',
        'Soporte dedicado con consultoría estratégica y un gestor de cuenta asignado',
      ],
    },
    {
      name: 'Plan a la Medida (Enterprise)',
      price: {
        monthly: 'Contactar para cotización',
        yearly: 'Contactar para cotización',
      },
      description:
        'Solución 100% personalizada para grandes empresas con necesidades específicas, completamente integrada a tus procesos y sistemas existentes.',
      features: [
        'Desarrollo de funcionalidades a medida para satisfacer requerimientos únicos',
        'Integración total con sistemas empresariales y APIs personalizadas',
        'Dashboards y reportes personalizados basados en los KPIs de tu negocio',
        'Capacitación y onboarding personalizados para equipos de alto rendimiento',
        'Soporte 24/7 con un equipo dedicado y consultoría en optimización de procesos',
        'Funcionalidades avanzadas de IA y machine learning adaptadas a tus necesidades',
        'Garantía de seguridad y cumplimiento normativo a nivel empresarial',
        'Gestión de proyectos con seguimiento detallado e implementación por un gerente de cuenta exclusivo',
      ],
    },
  ];

  return (
    <div className='grid grid-cols-3 gap-4'>
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
