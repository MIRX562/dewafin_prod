// menuItems.ts
import {
	AreaChart,
	BarChart,
	FolderDot,
	ScrollText,
	Server,
	Settings,
	Tag,
	User,
	UserCog,
} from "lucide-react";

// Define the interface for menu items
export interface NavItem {
	icon: React.ElementType;
	text: string;
	href: string;
	badge?: number;
}

// Define the array of menu items
export const navItems: NavItem[] = [
	{
		icon: AreaChart, // Lucidity icon for dashboard
		text: "Dashboard",
		href: "/dashboard",
	},
	{
		icon: Server, // Lucidity icon for server management
		text: "Assets",
		href: "/asets",
	},
	{
		icon: BarChart, // Lucidity icon for reports
		text: "Reports",
		href: "/reports",
	},
	{
		icon: Tag, // Lucidity icon for user management
		text: "Plans",
		href: "/plans",
	},
	{
		icon: FolderDot, // Lucidity icon for files
		text: "Files",
		href: "/files",
	},
	{
		icon: User, // Lucidity icon for user management
		text: "Employees",
		href: "/employees",
	},
	{
		icon: UserCog, // Lucidity icon for user management
		text: "Users",
		href: "/users",
	},
	{
		icon: Settings, // Lucidity icon for settings
		text: "Setting",
		href: "/settings",
	},
	{
		icon: ScrollText, // Lucidity icon for user management
		text: "Logs",
		href: "/logs",
	},
];
