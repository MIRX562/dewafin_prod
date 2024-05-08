import {
	DollarSignIcon,
	HeadsetIcon,
	LineChartIcon,
	ServerCogIcon,
} from "lucide-react";

export interface ReportMenu {
	title: string;
	path: string;
	icon: React.ElementType; // Use ReactNode to store icon component
}

export const reports: ReportMenu[] = [
	{
		title: "Sales & Marketing Report",
		path: "/reports/sales_marketing",
		icon: DollarSignIcon,
	},
	{
		title: "Customer Support Report",
		path: "/reports/customer_support",
		icon: HeadsetIcon,
	},
	{
		title: "Technical Support Report",
		path: "/reports/technical_support",
		icon: ServerCogIcon,
	},
	{
		title: "Administration Report",
		path: "/reports/administration",
		icon: LineChartIcon,
	},
];
