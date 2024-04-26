import { ThemeProvider } from "@/components/themeProvider/ThemeProvider";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";
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
            <Toaster />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
