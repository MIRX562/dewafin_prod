import LoginButton from '@/components/authComponents/loginButton/LoginButton';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
const font = Poppins({
	subsets: ['latin'],
	weight: ['600'],
});

export default function Home() {
	return (
		<main className='flex h-full flex-col items-center justify-center bg-slate-300'>
			<div className='space-y-6'>
				<h1
					className={cn(
						font.className,
						'text-6xl font-semibold text-primary drop-shadow-md'
					)}>
					Auth🔏
				</h1>
				<p className='text-primary text-lg'>Authentication Template</p>
				<div className='flex flex-col items-center'>
					<LoginButton>
						<Button variant={'secondary'} size={'lg'}>
							Sign In
						</Button>
					</LoginButton>
				</div>
			</div>
		</main>
	);
}
