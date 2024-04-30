"use client";
import { navItems } from "@/types/menuItems";
import { usePathname } from "next/navigation";

const HeaderTitle = () => {
	const path = usePathname();
	const currentNavItem = navItems.find((item) => item.href === path);
	const title = currentNavItem ? currentNavItem.text : "Dashboard";

	return (
		<h1 className="text-secondary-foreground text-3xl font-bold">{title}</h1>
	);
};

export default HeaderTitle;
