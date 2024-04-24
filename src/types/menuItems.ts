// menuItems.ts
import {
	AreaChart,
	Server,
	Users,
	Settings,
	User,
	BarChart,
	FolderDot,
	ScrollText,
	UserCog,
} from "lucide-react";

// Define the interface for menu items
export interface MenuItem {
	icon: React.ElementType;
	text: string;
	href: string;
	badge?: number;
}

// Define the array of menu items
export const menuItems: MenuItem[] = [
	{
		icon: AreaChart, // Lucidity icon for dashboard
		text: "Dashboard",
		href: "/dashboard",
	},
	{
		icon: Server, // Lucidity icon for server management
		text: "Assets Management",
		href: "/asets",
	},
	{
		icon: Users, // Lucidity icon for users
		text: "Customers",
		href: "/customers",
	},
	{
		icon: BarChart, // Lucidity icon for reports
		text: "Reports",
		href: "/reports",
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
