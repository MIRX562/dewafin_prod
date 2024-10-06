import { ModeToggle } from "../../common/tool/theme-toggle";
import MobileMenu from "../MobileMenu/mobileMenu";
import NavLogo from "../NavLogo";
import ProfileMenu from "./profileMenu";

export default function NavHeader() {
	return (
		<header className="flex h-14 items-center p-2 gap-4 border-b bg-muted/40 px-2 lg:px-4">
			<div className="md:hidden">
				<MobileMenu />
			</div>
			<div className="w-full justify-center flex-1">
				<div className="md:hidden">
					<NavLogo />
				</div>
			</div>
			<ModeToggle />
			<ProfileMenu />
		</header>
	);
}
