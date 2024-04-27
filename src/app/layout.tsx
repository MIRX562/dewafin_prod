import { ThemeProvider } from "@/components/themeProvider/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DewaMin",
  description: "An Admin Dashboard",
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
        <body className={cn(inter.className, "w-[100vw]")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster richColors position="top-center" />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
