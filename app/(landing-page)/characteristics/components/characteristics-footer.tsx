import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RealitaLink from '@/components/core/realita-link';

export default function CharacteristicsFooter() {
  const tabs = {
    tabsLists: [
      { value: 'dashboard', label: 'Tablero' },
      { value: 'properties', label: 'Propiedades' },
      { value: 'calendar', label: 'Calendario' },
    ],
    tabsContent: [
      { value: 'dashboard', component: RealitaLink },
      { value: 'properties', component: RealitaLink },
      { value: 'calendar', component: RealitaLink },
    ],
  };
  return (
    <div className='text-center flex flex-col gap-6 items-center'>
      <h2>Explora nuestras funcionalidades</h2>
      <Tabs
        defaultValue='account'
        className='w-[600px] flex flex-col gap-4 items-center'
      >
        <TabsList className='w-fit mx-auto'>
          {tabs['tabsLists'].map((trigger) => (
            <TabsTrigger key={trigger.value} value={trigger.value}>
              {trigger.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className='w-[700px] realita-box aspect-video'>
          {tabs['tabsContent'].map((content) => (
            <TabsContent key={content.value} value={content.value}>
              <content.component
                href='#'
                children={<div>{content.value}</div>}
              />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
