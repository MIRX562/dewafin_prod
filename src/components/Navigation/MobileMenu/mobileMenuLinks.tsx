import { SheetClose } from "@/components/ui/sheet";
import { useCurrentRole } from "@/hooks/useCurrentRole";
import { Menu } from "@/types/menu/_menu";
import { navItems, navItemsUser } from "@/types/menu/mainMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenuLinks() {
	const path = usePathname();
	const pathNames = path.split("/");
	const role = useCurrentRole();
	const isUser = role === "USER" ? true : false;
	const items = isUser ? navItemsUser : navItems;

	return items.map((item: Menu, index) => (
		<SheetClose
			asChild
			key={index}
		>
			<Link
				href={item.path}
				passHref
				className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2  ${
					"/" + pathNames[1] == item.path
						? "bg-primary text-secondary-foreground hover:text-foreground shadow-lg"
						: "text-muted-foreground hover:text-foreground"
				}`}
			>
				<item.icon className="h-5 w-5" />
				{item.label}
			</Link>
		</SheetClose>
	));
}
