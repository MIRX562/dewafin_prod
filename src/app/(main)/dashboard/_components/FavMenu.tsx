import { Card } from "@/components/ui/card";
import { favNavItems } from "@/types/menu/mainMenu";
import Link from "next/link";

const NavItems = () => {
	return (
		<div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6 w-full">
			{favNavItems.map((item, index) => (
				<Link
					key={index}
					href={item.path}
					className="flex-1 min-w-[calc(50%-1rem)] md:min-w-[calc(33.333%-1.5rem)] lg:min-w-[calc(16.666%-1.5rem)]"
				>
					<Card className="p-4 flex gap-1 items-center justify-between hover:bg-foreground/20 hover:border-primary transition-colors">
						<h2 className="text-sm font-semibold">{item.label}</h2>
						<item.icon className="w-8 h-8 md:h-12 md:w-12 text-primary" />
					</Card>
				</Link>
			))}
		</div>
	);
};

export default NavItems;
