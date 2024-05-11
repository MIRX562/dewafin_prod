"use client";
import { Menu } from "@/types/menu/_menu";
import { navItems } from "@/types/menu/mainMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBarLinks() {
  const pathName = usePathname();

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {navItems.map((item: Menu, index) => (
        <Link
          href={item.path}
          key={index}
          passHref
          className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all  ${
            item.path == pathName
              ? "bg-primary text-secondary-foreground hover:text-foreground"
              : "text-muted-foreground  hover:text-primary"
          }`}
        >
          <item.icon className="h-4 w-4" />
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
