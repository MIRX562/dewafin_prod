import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
const font = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});

export default function Home() {
	return (
		<main className="flex h-full flex-col items-center justify-center bg-background space-y-4">
			<Image
				src="/icon.png"
				alt="logo"
				width={100}
				height={100}
				className="drop-shadow-md"
			/>
			<div className="flex w-full items-center justify-center space-x-2">
				<h1
					className={cn(
						font.className,
						"text-6xl font-semibold drop-shadow-md"
					)}
				>
					Dewa<span className="text-primary">Pedia</span>
				</h1>
			</div>
			<p className="text-lg text-center">
				Integrated Task and Information Management System For Dewabiz
			</p>
			<div className="flex flex-col items-center">
				<LoginButton
					mode="redirect"
					asChild
				>
					<Button
						size={"lg"}
						className="shadow-lg font-extrabold"
					>
						Sign In
					</Button>
				</LoginButton>
			</div>
		</main>
	);
}
