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

export default function ProfileMenu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='secondary' size='icon' className='rounded-full'>
					<CircleUser className='h-5 w-5' />
					<span className='sr-only'>Toggle user menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<Link href='/dashboard/setting'>
					<DropdownMenuItem> Setting</DropdownMenuItem>
				</Link>
				<Link href='/dashboard/support'>
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
