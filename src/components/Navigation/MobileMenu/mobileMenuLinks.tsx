import { SheetClose } from "@/components/ui/sheet";
import { Menu } from "@/types/menu/_menu";
import { navItems } from "@/types/menu/mainMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenuLinks() {
	const pathName = usePathname();

	return navItems.map((navItem: Menu, index) => (
		<SheetClose
			asChild
			key={index}
		>
			<Link
				href={navItem.path}
				passHref
				className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2  ${
					pathName == navItem.path
						? "bg-primary text-secondary-foreground hover:text-foreground"
						: "text-muted-foreground hover:text-foreground"
				}`}
			>
				<navItem.icon className="h-5 w-5" />
				{navItem.label}
			</Link>
		</SheetClose>
	));
}
