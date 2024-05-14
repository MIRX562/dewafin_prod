"use client";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useCurrentRole } from "@/hooks/useCurrentRole";
import { task } from "@/types/menu/taskMenu";
import Link from "next/link";

const TaskNavBar = () => {
	const role = useCurrentRole();

	return (
		<NavigationMenu className={role === "USER" ? "hidden" : ""}>
			<NavigationMenuList>
				{task.map((menu) => (
					<NavigationMenuItem key={menu.label}>
						<Link
							href={menu.path}
							legacyBehavior
							passHref
						>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								{menu.label}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
};
export default TaskNavBar;
