"use client";
import { useCurrentRole } from "@/hooks/useCurrentRole";
import { Menu } from "@/types/menu/_menu";
import { navItems, navItemsUser } from "@/types/menu/mainMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBarLinks() {
	const path = usePathname();
	const pathNames = path.split("/");
	const role = useCurrentRole();
	const isUser = role === "USER" ? true : false;
	const items = isUser ? navItemsUser : navItems;
	return (
		<nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-1">
			{items.map((item: Menu, index) => (
				<div
					key={index}
					className={`flex items-center rounded-lg px-3 py-2 transition-transform w-full  ${
						item.path == "/" + pathNames[1]
							? "bg-primary text-muted"
							: "text-muted-foreground hover:bg-foreground/10"
					}`}
				>
					<Link
						href={item.path}
						passHref
						className={`flex items-center gap-2 transition-all ease-in-out duration-200 w-full  ${
							item.path == "/" + pathNames[1] ? "translate-x-6" : ""
						}`}
					>
						<item.icon className="md:h-8 md:w-8" />
						{item.label}
					</Link>
				</div>
			))}
		</nav>
	);
}
