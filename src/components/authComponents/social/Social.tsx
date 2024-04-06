'use client';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export default function Social() {
	const onCLicks = (provider: 'google' | 'github') => {
		signIn(provider, {
			callbackUrl: DEFAULT_LOGIN_REDIRECT,
		});
	};
	return (
		<div className='flex items-center w-full gap-x-2'>
			<Button
				size='lg'
				className='w-full'
				variant='outline'
				onClick={() => onCLicks('google')}>
				<FcGoogle className='w-5 h-5' />
				<span>oogle</span>
			</Button>
			<Button
				size='lg'
				className='w-full'
				variant='outline'
				onClick={() => onCLicks('github')}>
				<FaGithub className='w-5 h-5' />
				<span className='ml-1'>Github</span>
			</Button>
		</div>
	);
}
