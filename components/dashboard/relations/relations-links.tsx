'use client';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const RelationLinks = () => {
  const pathName = usePathname();
  const routes = [
    {
      name: 'Inquilinos',
      href: '/dashboard/relations/tenants',
    },
    {
      name: 'Leads',
      href: '/dashboard/relations/leads',
    },
    {
      name: 'Provedores',
      href: '/dashboard/relations/providers',
    },
  ];
  return (
    <Tabs>
      <TabsList>
        {routes.map((route) => (
          <TabsTrigger key={route.name} asChild value={route.name}>
            <Link
              className={cn('px-6 py-2 rounded-full hover:text-jade', {
                'bg-jade/30 text-jade': pathName.startsWith(route.href),
              })}
              href={route.href}
              key={route.name}
            >
              {route.name}
            </Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
