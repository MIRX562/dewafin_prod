'use client';
import { Menu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

import { Separator } from '@/components/ui/separator';
import MobileMenuLogo from './MobileMenuLogo/mobileMenuLogo';
import MobileMenuLinks from './MobileMenuLinks/mobileMenuLinks';

export default function MobileMenu() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='outline' size='icon' className='shrink-0 md:hidden'>
					<Menu className='h-5 w-5' />
					<span className='sr-only'>Toggle navigation menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side='left' className='flex flex-col'>
				<nav className='grid gap-2 text-lg font-medium'>
					<MobileMenuLogo />
					<Separator />
					<MobileMenuLinks />
				</nav>
				<Separator />
				<div className='mt-auto'>
					<Card>
						<CardHeader className='p-2 pt-2 md:p-4 text-center'>
							<CardTitle>Sadewa</CardTitle>
						</CardHeader>
						<CardContent className='p-2 pt-0 md:p-4 md:pt-0'>
							<Button size='sm' className='w-full'>
								Login
							</Button>
						</CardContent>
					</Card>
				</div>
			</SheetContent>
		</Sheet>
	);
}
