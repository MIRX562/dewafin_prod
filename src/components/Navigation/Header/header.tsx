import { ModeToggle } from "../../ThemeToggle/theme-toggle";
import MobileMenu from "../MobileMenu/mobileMenu";
import NavLogo from "../NavLogo/NavLogo";
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import ProfileMenu from "./ProfileMenu/profileMenu";

export default function NavHeader() {
	return (
		<header className="flex h-14 items-center p-2 gap-4 border-b bg-muted/40 px-2 lg:px-4">
			<MobileMenu />
			<div className="w-full justify-center flex-1">
				<div className="md:hidden">
					<NavLogo />
				</div>
				<div className="hidden md:flex flex-col">
					<HeaderTitle />
				</div>
			</div>
			<ModeToggle />
			<ProfileMenu />
		</header>
	);
}
