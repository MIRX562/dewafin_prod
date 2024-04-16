import LoginButton from '@/components/authComponents/loginButton/LoginButton';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
const font = Poppins({
	subsets: ['latin'],
	weight: ['600'],
});

export default function Home() {
	return (
		<main className='flex h-full flex-col items-center justify-center bg-slate-300'>
			<div className='space-y-6'>
				<div className='flex'>
					<Image src='/icon_light.png' alt='logo' width={62} height={32} />
					<h1
						className={cn(
							font.className,
							'text-6xl font-semibold text-black drop-shadow-md'
						)}>
						Dewa<span className='text-primary'>Fin</span>
					</h1>
				</div>
				<p className='text-primary text-lg text-center'>
					Admin Dashboard For Dewabiz
				</p>
				<div className='flex flex-col items-center'>
					<LoginButton mode='modal' asChild>
						<Button variant={'secondary'} size={'lg'}>
							Sign In
						</Button>
					</LoginButton>
				</div>
			</div>
		</main>
	);
}
