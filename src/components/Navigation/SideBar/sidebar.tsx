import CopyRights from "../CopyRights";
import NavLogo from "../NavLogo";
import OutSideLink from "../OutSideLink";
import SideBarLinks from "./sideBarLinks";

export default function Sidebar() {
	return (
		<div className=" border-r bg-muted/40 h-screen overflow-y-auto overflow-x-clip hidden md:flex md:min-w-[280px]">
			<div className="flex h-full w-full flex-col gap-2">
				<div className="flex h-14 border-b px-4 lg:px-6">
					<NavLogo />
				</div>
				<div className="flex-1">
					<SideBarLinks />
				</div>
				<div className="mt-auto p-4 space-y-2">
					<OutSideLink />
					<CopyRights />
				</div>
			</div>
		</div>
	);
}
