"use client";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { MenuItem, menuItems } from "@/types/menuItems";
import { usePathname } from "next/navigation";

export default function SideBarLinks() {
	const pathName = usePathname();

	return (
		<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
			{menuItems.map((item: MenuItem, index) => (
				<Link
					href={item.href}
					key={index}
					passHref
					className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
						item.href == pathName
							? "bg-primary text-white hover:text-secondary"
							: ""
					}`}
				>
					<item.icon className="h-4 w-4" />
					{item.text}
					{item.badge && (
						<Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
							{item.badge}
						</Badge>
					)}
				</Link>
			))}
		</nav>
	);
}
