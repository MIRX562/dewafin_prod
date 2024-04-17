// menuItems.ts
import {
	AreaChart,
	Banknote,
	Server,
	Users,
	Settings,
	User,
	BarChart,
	FolderDot,
	Link2,
} from 'lucide-react';

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
		text: 'Dashboard',
		href: '/dashboard',
	},
	{
		icon: Server, // Lucidity icon for server management
		text: 'Manajemen Aset',
		href: '/asets',
	},
	{
		icon: Users, // Lucidity icon for users
		text: 'Pelanggan',
		href: '/customers',
	},
	{
		icon: User, // Lucidity icon for user management
		text: 'User Management & Roles',
		href: '/users',
	},
	{
		icon: BarChart, // Lucidity icon for reports
		text: 'Reporting & Analytics',
		href: '/reports',
	},
	{
		icon: FolderDot, // Lucidity icon for files
		text: 'File Archive',
		href: '/files',
	},
	{
		icon: Settings, // Lucidity icon for settings
		text: 'Setting',
		href: '/settings',
	},
];
