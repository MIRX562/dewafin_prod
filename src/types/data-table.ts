import {
	CrossCircledIcon,
	CheckCircledIcon,
	GearIcon,
	PersonIcon,
} from "@radix-ui/react-icons";


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
];

export const state = [
	{
		value: true,
		label: "Active",
		icon: CheckCircledIcon,
	},
	{
		value: false,
		label: "In Active",
		icon: CrossCircledIcon,
	},
];
