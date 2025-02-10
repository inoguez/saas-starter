import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
export default function NotificationDropdownMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const notifications = [{ id: 1, message: 'Hello World' }];
  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'} size={'icon'} asChild>
          <Bell size={1} strokeWidth={1} className='p-[0.5rem]' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='flex flex-col gap-1'>
        {notifications.map((item, key) => (
          <DropdownMenuItem key={item.id}>
            <span>{item.message}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
