import {
	CrossCircledIcon,
	CheckCircledIcon,
	GearIcon,
	PersonIcon,
} from '@radix-ui/react-icons';

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

export const roles = [
	{
		value: 'ADMIN',
		label: 'Admin',
		icon: GearIcon,
	},
	{
		value: 'USER',
		label: 'User',
		icon: PersonIcon,
	},
];

export const TwoFactor = [
	{
		value: true,
		label: 'Enabled',
		icon: CheckCircledIcon,
	},
	{
		value: false,
		label: 'Disabled',
		icon: CrossCircledIcon,
	},
];
