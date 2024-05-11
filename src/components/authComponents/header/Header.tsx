import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
const font = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});

type Props = {
	label: string;
};

export default function Header({ label }: Props) {
	return (
		<div className="w-full flex flex-col items-center justify-center">
			<div className="flex items-center space-x-2">
				<Image
					src="/icon.png"
					alt="logo"
					width={40}
					height={20}
					className="drop-shadow-md"
				/>
				<h1
					className={cn(
						font.className,
						"text-4xl font-semibold text-accent drop-shadow-md"
					)}
				>
					Dewa<span className="text-destructive">Pedia</span>
				</h1>
			</div>
			<p className="text-muted-foreground text-sm">{label}</p>
		</div>
	);
}
