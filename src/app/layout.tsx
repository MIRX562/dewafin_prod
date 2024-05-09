import { ThemeProvider } from "@/components/themeProvider/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	manifest: "/manifest.json",

	title: "DewaMin",
	description: "An Admin Dashboard",
};
export const viewport: Viewport = {
	themeColor: "#007be3",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();
	return (
		<SessionProvider session={session}>
			<html lang="en">
				<body className={cn(inter.className)}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Toaster
							richColors
							position="top-center"
						/>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</SessionProvider>
	);
}
