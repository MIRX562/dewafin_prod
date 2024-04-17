'use client';
import { Button } from '@/components/ui/button';
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { CircleUser } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const ProfileImage = () => {
	const user = useCurrentUser();

	return (
		<DropdownMenuTrigger asChild>
			<Button variant='secondary' size='icon' className='rounded-full'>
				{(user?.image && (
					<Image
						src={user?.image}
						alt='profile'
						width={40}
						height={20}
						className='rounded-full'
					/>
				)) || <CircleUser className='h-5 w-5' />}
				<span className='sr-only'>Toggle user menu</span>
			</Button>
		</DropdownMenuTrigger>
	);
};
