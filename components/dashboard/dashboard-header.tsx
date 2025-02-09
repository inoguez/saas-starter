'use client';
import { use, useState } from 'react';
import NavMenu from '../landing/nav-menu';
import { useUser } from '@/lib/auth';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from '@/app/(login)/actions';
import RealitaLinkLogo from '../core/realita-link-logo';

export function Header({ isInLanding }: { isInLanding?: boolean }) {
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
      <div className={'flex justify-between items-center'}>
        <RealitaLinkLogo className='h-8' />
        {isInLanding ? <NavMenu /> : <></>}
      </div>
    </header>
  );
}
