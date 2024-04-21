import NavHeader from '@/components/Navigation/Header/header';
import PageHeader from '@/components/Navigation/PageHeader/PageHeader';
import Sidebar from '@/components/Navigation/SideBar/sidebar';
import { Separator } from '@/components/ui/separator';

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='grid min-h-screen  md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
			<Sidebar />
			<div className='flex flex-col h-full'>
				<NavHeader />
				<main className='flex flex-col h-full'>
					<PageHeader />
					<Separator />
					{children}
				</main>
			</div>
		</div>
	);
}
