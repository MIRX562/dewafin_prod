import { ModeToggle } from '../../ThemeToggle/theme-toggle';
import ProfileMenu from './ProfileMenu/profileMenu';
import NavSearchBar from './NavSearchBar/navSearchBar';
import MobileMenu from './MobileMenu/mobileMenu';

export default function NavHeader() {
	return (
		<header className='flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
			<MobileMenu />
			<div className='w-full flex-1'>
				<NavSearchBar />
			</div>
			<ModeToggle />
			<ProfileMenu />
		</header>
	);
}
