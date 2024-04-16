import NavHeader from '@/components/Navigation/Header/header';
import Sidebar from '@/components/Navigation/SideBar/sidebar';
import { ThemeProvider } from '@/components/themeProvider/ThemeProvider';

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ThemeProvider>
			<div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
				<Sidebar />
				<div className='flex flex-col '>
					<NavHeader />
					{children}
				</div>
			</div>
		</ThemeProvider>
	);
}
