import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { task } from "@/types/menu/taskMenu";
import Link from "next/link";

const TaskNavBar = () => {
	return (
		<NavigationMenu>
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
