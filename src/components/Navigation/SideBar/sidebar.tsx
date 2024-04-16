import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SideBarLogo from './SideBarLogo/sideBarLogo';
import SideBarLinks from './SideBarLinks/sideBarLinks';

export default function Sidebar() {
	return (
		<div className='hidden border-r bg-muted/40 md:block'>
			<div className='flex h-full max-h-screen flex-col gap-2'>
				<div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
					<SideBarLogo />
				</div>
				<div className='flex-1'>
					<SideBarLinks />
				</div>
				<div className='mt-auto p-4'>
					<Card>
						<CardHeader className='p-2 pt-0 md:p-4 text-center'>
							<CardTitle>Sadewa</CardTitle>
						</CardHeader>
						<CardContent className='p-2 pt-0 md:p-4 md:pt-0'>
							<Button size='sm' className='w-full'>
								Login
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
