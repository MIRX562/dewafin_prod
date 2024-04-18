import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SideBarLinks from './SideBarLinks/sideBarLinks';
import Link from 'next/link';
import { UserRoundCheck } from 'lucide-react';
import NavLogo from '../NavLogo/NavLogo';

export default function Sidebar() {
	return (
		<div className='hidden border-r bg-muted/40 md:block'>
			<div className='flex h-full max-h-screen flex-col gap-2'>
				<div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
					<NavLogo />
				</div>
				<div className='flex-1'>
					<SideBarLinks />
				</div>
				<div className='mt-auto p-4'>
					<Card>
						<CardHeader className='p-2 pt-2 md:p-4 text-center'>
							<CardTitle className='flex justify-center gap-4'>
								<UserRoundCheck />
								Sadewa
							</CardTitle>
						</CardHeader>
						<CardContent className='p-2 pt-0 md:p-4 md:pt-0'>
							<Link href='#'>
								<Button size='sm' className='w-full'>
									Login
								</Button>
							</Link>
						</CardContent>
					</Card>
					<p className='text-xs font-light text-secondary-foreground mt-4 text-center'>
						DewaFin © MIRXSolutions.com 2024
					</p>
				</div>
			</div>
		</div>
	);
}
