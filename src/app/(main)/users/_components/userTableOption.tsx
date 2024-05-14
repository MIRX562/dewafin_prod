import { GearIcon, PersonIcon } from "@radix-ui/react-icons";
import { ShieldIcon } from "lucide-react";

export const userRoles = [
	{
		value: "ADMIN",
		label: "Admin",
		icon: GearIcon,
	},
	{
		value: "USER",
		label: "User",
		icon: PersonIcon,
	},
	{
		value: "MANAGER",
		label: "Manager",
		icon: ShieldIcon,
	},
];

export const state = [
	{
		value: true,
		label: "Enabled",
		var: "success",
	},
	{
		value: false,
		label: "Disabled",
		var: "destructive",
	},
];
