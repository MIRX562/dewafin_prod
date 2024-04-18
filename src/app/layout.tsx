import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import type { Metadata } from 'next';
import './globals.css';
import { auth } from '@/lib/auth';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/themeProvider/ThemeProvider';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Dewafin',
	description: 'An Admin Dashboard for Dewabiz',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();
	return (
		<SessionProvider session={session}>
			<html lang='en'>
				<body className={cn(inter.className, 'w-[100vw]')}>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange>
						<Toaster />
						{children}
					</ThemeProvider>
				</body>
			</html>
		</SessionProvider>
	);
}
