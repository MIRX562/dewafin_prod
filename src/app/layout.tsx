import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import type { Metadata } from 'next';
import './globals.css';
import { auth } from '@/lib/auth';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/themeProvider/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'NextAuthV5',
	description: 'authentication starter pack',
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
				<body className={inter.className}>
					<Toaster />
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</SessionProvider>
	);
}
