import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { MenuItem, menuItems } from "@/types/menuItems";
import { usePathname } from "next/navigation";
import { SheetClose } from "@/components/ui/sheet";

export default function MobileMenuLinks() {
  const pathName = usePathname();

  return menuItems.map((menuItem: MenuItem, index) => (
    <SheetClose asChild key={index}>
      <Link
        href={menuItem.href}
        passHref
        className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${
          pathName == menuItem.href ? "bg-primary text-secondary" : ""
        }`}
      >
        <menuItem.icon className="h-5 w-5" />
        {menuItem.text}
        {menuItem.badge && (
          <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
            {menuItem.badge}
          </Badge>
        )}
      </Link>
    </SheetClose>
  ));
}
