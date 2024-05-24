import {
	DollarSignIcon,
	HeadsetIcon,
	LineChartIcon,
	ServerCogIcon,
} from "lucide-react";
import { Menu } from "./_menu";

export const task: Menu[] = [
	{
		label: "Admin",
		path: "/task/administration",
		icon: LineChartIcon,
	},
	{
		label: "Marketing",
		path: "/task/sales_marketing",
		icon: DollarSignIcon,
	},
	{
		label: "CS",
		path: "/task/customer_support",
		icon: HeadsetIcon,
	},
	{
		label: "Technical",
		path: "/task/technical_support",
		icon: ServerCogIcon,
	},
];
