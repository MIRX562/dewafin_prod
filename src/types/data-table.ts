import {
	CrossCircledIcon,
	CheckCircledIcon,
	GearIcon,
	PersonIcon,
} from "@radix-ui/react-icons";

// export type UserTable = {
// 	id: string;
// 	name: string | null;
// 	email: string | null;
// 	emailVerified: Date | null;
// 	image: string | null;
// 	password: string | null;
// 	role: 'ADMIN' | 'USER';
// 	isTwoFactorEnabled: boolean;
// };

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
