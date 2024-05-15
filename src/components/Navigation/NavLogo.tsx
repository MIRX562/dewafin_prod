import Image from "next/image";
import Link from "next/link";

export default function NavLogo() {
	return (
		<Link
			href="/dashboard"
			className="flex items-center font-semibold gap-1 md:gap-2"
		>
			<Image
				src="/icon.png"
				alt=""
				width={64}
				height={64}
				className="h-10 w-10"
			/>
			<p className="text-2xl md:text-4xl mb-0 font-bold">
				Dewa<span className="text-primary">Pedia</span>
			</p>
		</Link>
	);
}
