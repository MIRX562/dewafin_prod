import { Badge } from "@/components/ui/badge";
import { SheetClose } from "@/components/ui/sheet";
import { NavItem, navItems } from "@/types/menuItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenuLinks() {
  const pathName = usePathname();

  return navItems.map((navItem: NavItem, index) => (
    <SheetClose asChild key={index}>
      <Link
        href={navItem.href}
        passHref
        className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${
          pathName == navItem.href ? "bg-primary text-secondary" : ""
        }`}
      >
        <navItem.icon className="h-5 w-5" />
        {navItem.text}
        {navItem.badge && (
          <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
            {navItem.badge}
          </Badge>
        )}
      </Link>
    </SheetClose>
  ));
}
