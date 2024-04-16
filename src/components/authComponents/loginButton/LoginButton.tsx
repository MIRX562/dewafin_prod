'use client';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import LoginForm from '../loginForm/LoginForm';

type Props = {
	children: React.ReactNode;
	mode?: 'modal' | 'redirect';
	asChild?: boolean;
};

export default function LoginButton({
	children,
	mode = 'redirect',
	asChild,
}: Props) {
	const router = useRouter();

	const onClick = () => {
		router.push('/auth/login');
	};

	if (mode === 'modal') {
		return (
			<Dialog>
				<DialogTrigger asChild={asChild}>{children}</DialogTrigger>
				<DialogContent className='grid place-items-center p-1 bg-transparent border-none'>
					<LoginForm />
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<span onClick={onClick} className='cursor-pointer'>
			{children}
		</span>
	);
}
