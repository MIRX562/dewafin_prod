import {
	AreaChartIcon,
	BoxesIcon,
	FolderDotIcon,
	NotebookTextIcon,
	ScrollTextIcon,
	SettingsIcon,
	SquareGanttChart,
	UserCogIcon,
	UserIcon,
} from "lucide-react";
import { Menu } from "./_menu";

export const navItems: Menu[] = [
	{
		icon: AreaChartIcon,
		label: "Dashboard",
		path: "/dashboard",
	},
	{
		icon: SquareGanttChart,
		label: "Financial Reports",
		path: "/reports",
	},
	{
		icon: BoxesIcon,
		label: "Products",
		path: "/products",
	},
	{
		icon: NotebookTextIcon,
		label: "Notes",
		path: "/notes",
	},
	{
		icon: FolderDotIcon,
		label: "Files",
		path: "/files",
	},
	{
		icon: UserIcon,
		label: "Employees",
		path: "/employees",
	},
	{
		icon: UserCogIcon,
		label: "Users",
		path: "/users",
	},
	{
		icon: SettingsIcon,
		label: "Setting",
		path: "/settings",
	},
	{
		icon: ScrollTextIcon,
		label: "Logs",
		path: "/logs",
	},
];
export const navItemsUser: Menu[] = [
	{
		icon: AreaChartIcon,
		label: "Dashboard",
		path: "/dashboard",
	},
	{
		icon: BoxesIcon,
		label: "Products",
		path: "/products",
	},
	{
		icon: NotebookTextIcon,
		label: "Notes",
		path: "/notes",
	},
	{
		icon: FolderDotIcon,
		label: "Files",
		path: "/files",
	},
	{
		icon: SettingsIcon,
		label: "Setting",
		path: "/settings",
	},
];

export const favNavItems: Menu[] = [
	{
		icon: SquareGanttChart,
		label: "Financial Reports",
		path: "/reports",
	},
	{
		icon: BoxesIcon,
		label: "Products",
		path: "/products",
	},
	{
		icon: NotebookTextIcon,
		label: "Notes",
		path: "/notes",
	},
	{
		icon: FolderDotIcon,
		label: "Files",
		path: "/files",
	},

	{
		icon: SettingsIcon,
		label: "Setting",
		path: "/settings",
	},
];
