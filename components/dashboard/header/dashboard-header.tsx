import RealitaLinkLogo from '../../core/realita-link-logo';
import NavLinks from './components/nav-menu';
import NotificationDropdownMenu from './components/notification-dropdown';
import ProfileDropdownMenu from './components/profile-dropdown';

export function DashBoardHeader() {
  return (
    <header>
      <div
        className={
          'w-full grid grid-cols-[auto_1fr_auto] items-center place-content-center gap-16'
        }
      >
        <RealitaLinkLogo />
        <NavLinks />
        <div className='flex items-center space-x-4'>
          <NotificationDropdownMenu />
          <ProfileDropdownMenu />
        </div>
      </div>
    </header>
  );
}
