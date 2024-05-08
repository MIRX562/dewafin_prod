import {
	AreaChartIcon,
	BoxesIcon,
	FolderDotIcon,
	ScrollTextIcon,
	ServerIcon,
	SettingsIcon,
	SquareGanttChart,
	UserCogIcon,
	UserIcon,
} from "lucide-react";

export interface NavItem {
	icon: React.ElementType;
	text: string;
	href: string;
	badge?: number;
}

export const navItems: NavItem[] = [
	{
		icon: AreaChartIcon,
		text: "Dashboard",
		href: "/dashboard",
	},
	{
		icon: ServerIcon,
		text: "Assets",
		href: "/asets",
	},
	{
		icon: SquareGanttChart,
		text: "Reports",
		href: "/reports",
	},
	{
		icon: BoxesIcon,
		text: "Products",
		href: "/products",
	},
	{
		icon: FolderDotIcon,
		text: "Files",
		href: "/files",
	},
	{
		icon: UserIcon,
		text: "Employees",
		href: "/employees",
	},
	{
		icon: UserCogIcon,
		text: "Users",
		href: "/users",
	},
	{
		icon: SettingsIcon,
		text: "Setting",
		href: "/settings",
	},
	{
		icon: ScrollTextIcon,
		text: "Logs",
		href: "/logs",
	},
];
