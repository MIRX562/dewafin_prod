import { Card } from "@/components/ui/card";
import { favNavItems } from "@/types/menu/mainMenu";
import Link from "next/link";

const NavItems = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-6 md:col-span-2 lg:col-span-3">
			{favNavItems.map((item, index) => (
				<Link
					key={index}
					href={item.path}
				>
					<Card className="p-4 flex items-center justify-between">
						<h2 className="text-sm font-semibold">{item.label}</h2>
						<item.icon className="w-8 h-8 md:h-12 md:w-12" />
					</Card>
				</Link>
			))}
		</div>
	);
};

export default NavItems;
