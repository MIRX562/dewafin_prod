'use client';
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
import Image from 'next/image';
import { useCurrentUser } from '@/hooks/useCurrentUser';

export default function ProfileMenu() {
	const user = useCurrentUser();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='secondary' size='icon' className='rounded-full'>
					{(user?.image && (
						<Image
							src={user?.image}
							alt='profile'
							width={40}
							height={20}
							className='rounded-full p-1'
						/>
					)) || <CircleUser className='h-5 w-5' />}
					<span className='sr-only'>Toggle user menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
				<DropdownMenuLabel className='text-xs'>{user?.email}</DropdownMenuLabel>
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
