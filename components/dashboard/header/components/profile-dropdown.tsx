'use client';
import React, { use, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUser } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { signOut } from '@/app/(login)/actions';
import Link from 'next/link';
import { Activity, Home, LogOut, Settings, Shield, Users } from 'lucide-react';
export default function ProfileDropdownMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userPromise } = useUser();
  const user = use(userPromise);
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.refresh();
    router.push('/');
  }
  if (!user) return null;

  const navItems = [
    { href: '/dashboard', icon: Users, label: 'Tablero' },
    { href: '/dashboard/general', icon: Settings, label: 'General' },
    { href: '/dashboard/activity', icon: Activity, label: 'Activity' },
    { href: '/dashboard/security', icon: Shield, label: 'Security' },
  ];

  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropdownMenuTrigger>
        <Avatar className='cursor-pointer size-9'>
          <AvatarImage
            alt={user.name || ''}
            src='https://github.com/inoguez.png'
          />
          <AvatarFallback>
            {user.email
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='flex flex-col gap-1'>
        {navItems.map((item, key) => (
          <DropdownMenuItem key={item.label} className='cursor-pointer'>
            <Link href={item.href} className='flex w-full items-center'>
              <item.icon className='mr-2 h-4 w-4' />
              <span>{item.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}

        <form action={handleSignOut} className='w-full'>
          <button type='submit' className='flex w-full'>
            <DropdownMenuItem className='w-full flex-1 cursor-pointer'>
              <LogOut className='mr-2 h-4 w-4' />
              <span>Sign out</span>
            </DropdownMenuItem>
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
