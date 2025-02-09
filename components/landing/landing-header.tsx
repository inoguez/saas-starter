'use client';
import { use, useState } from 'react';
import NavMenu from './nav-menu';
import RealitaLinkLogo from '../core/realita-link-logo';
import { useUser } from '@/lib/auth';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from '@/app/(login)/actions';
import { AuthMenu } from './header-auth';

export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userPromise } = useUser();
  const user = use(userPromise);
  const router = useRouter();
  const pathName = usePathname();

  async function handleSignOut() {
    await signOut();
    router.refresh();
    router.push('/');
  }

  return (
    <header>
      <nav className={'grid grid-cols-[1fr_auto_1fr] items-center'}>
        <RealitaLinkLogo />
        <NavMenu />
        <AuthMenu />
      </nav>
    </header>
  );
}
