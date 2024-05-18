import { Card } from "@/components/ui/card";
import { reportsMenu } from "@/types/menu/reportMenu";
import Link from "next/link";

const ReportsMenu = () => {
	return (
		<div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
			{reportsMenu.map((item, index) => (
				<Link
					key={index}
					href={item.path}
				>
					<Card className="p-4 h-full  flex items-center justify-between">
						<h2 className="text-sm font-semibold">{item.label}</h2>
						<item.icon className="w-8 h-8 md:h-12 md:w-12 text-primary" />
					</Card>
				</Link>
			))}
		</div>
	);
};

export default ReportsMenu;
