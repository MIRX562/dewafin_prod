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
		href: '/billings',
	},
	{
		icon: Server, // Lucidity icon for server management
		text: 'Server Management',
		href: '/servers',
	},
	{
		icon: Users, // Lucidity icon for users
		text: 'Customers',
		href: '/customers',
	},
	{
		icon: Settings, // Lucidity icon for settings
		text: 'Administration',
		href: '/administration',
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
		icon: Link2, // Lucidity icon for integration
		text: 'Integrations',
		href: '/integrations',
	},
];
