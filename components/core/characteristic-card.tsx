import React from 'react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function CharacteristicCard({ feature }: { feature: Feature }) {
  return (
    <Card className='neon-highlight '>
      <CardHeader className='h-full grid grid-flow-row grid-rows-[auto_1fr_auto] gap-1   '>
        <feature.icon className='h-14 w-14 text-jade/80 ' />
        <CardTitle className='self-start'>
          <h3 className='text-lg font-bold text-off-white/80'>
            {feature.title}
          </h3>
        </CardTitle>
        <CardDescription className='self-start'>
          <p className=' text-sm text-zinc-400'>{feature.description}</p>
        </CardDescription>
      </CardHeader>
      {/* <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}
