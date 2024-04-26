import { ModeToggle } from "../../ThemeToggle/theme-toggle";
import ProfileMenu from "./ProfileMenu/profileMenu";
import NavSearchBar from "./NavSearchBar/navSearchBar";
import MobileMenu from "./MobileMenu/mobileMenu";

export default function NavHeader() {
  return (
    <header className="flex h-14 items-center p-2 gap-4 border-b bg-muted/40 px-2 lg:px-4">
      <MobileMenu />
      <div className="w-full flex-1">
        <NavSearchBar />
      </div>
      <ModeToggle />
      <ProfileMenu />
    </header>
  );
}
