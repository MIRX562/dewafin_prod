import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type Props = {
	children: React.ReactNode;
	title: string;
	href: string;
};

const DashboardCardWrapper = ({ children, title, href }: Props) => {
	return (
		<Card className="flex-1 min-w-[300px] ">
			<CardHeader className="flex justify-between items-center">
				<CardTitle>{title}</CardTitle>
				<Link
					className="text-sm text-primary/80 hover:underline"
					href={href}
				>
					View all
				</Link>
			</CardHeader>
			<CardContent className="space-y-4 overflow-auto max-h-[350px] md:max-h-full">
				{children}
			</CardContent>
		</Card>
	);
};

export default DashboardCardWrapper;
