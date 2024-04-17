import LogoutButton from '@/components/authComponents/logoutButton/LogoutButton';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CircleUser } from 'lucide-react';
import Link from 'next/link';
import { ProfileImage } from './profileImage/ProfileImage';

export default function ProfileMenu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<ProfileImage />
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<Link href='/settings'>
					<DropdownMenuItem> Setting</DropdownMenuItem>
				</Link>
				<Link href='/support'>
					<DropdownMenuItem> Support</DropdownMenuItem>
				</Link>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<LogoutButton>Log Out</LogoutButton>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
