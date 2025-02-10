'use client';
import NavMenu from './nav-menu';
import RealitaLinkLogo from '../core/realita-link-logo';
import { AuthMenu } from './header-auth';

export function LandingHeader() {
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
