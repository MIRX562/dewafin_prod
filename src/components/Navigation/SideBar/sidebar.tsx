import CopyRights from "../CopyRights/CopyRights";
import NavLogo from "../NavLogo/NavLogo";
import OutSideLink from "../OutsideLink/OutSideLink";
import SideBarLinks from "./SideBarLinks/sideBarLinks";

export default function Sidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block h-screen overflow-y-auto">
      <div className="flex h-full flex-col gap-2">
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
