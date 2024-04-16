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
		icon: Banknote, // Lucidity icon for bills/payments
		text: 'Billing & Finance',
		href: '/dashboard/billing-finance',
	},
	{
		icon: Server, // Lucidity icon for server management
		text: 'Server Management',
		href: '/dashboard/server-management',
	},
	{
		icon: Users, // Lucidity icon for users
		text: 'Customers',
		href: '/dashboard/customers',
	},
	{
		icon: Settings, // Lucidity icon for settings
		text: 'Administration',
		href: '/dashboard/administration',
	},
	{
		icon: User, // Lucidity icon for user management
		text: 'User Management & Roles',
		href: '/dashboard/users',
	},
	{
		icon: BarChart, // Lucidity icon for reports
		text: 'Reporting & Analytics',
		href: '/dashboard/reporting-analytics',
	},
	{
		icon: FolderDot, // Lucidity icon for files
		text: 'File Archive',
		href: '/dashboard/file-archive',
	},
	{
		icon: Link2, // Lucidity icon for integration
		text: 'Integrations',
		href: '/dashboard/integrations',
	},
];
