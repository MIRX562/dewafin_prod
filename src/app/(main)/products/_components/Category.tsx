import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ArrowRightIcon, BoxesIcon } from "lucide-react";
import Product from "./Product";

const mockProducts = [
	{
		name: "Starter Plan",
		description:
			"Ideal for small websites and blogs. Easy to manage and perfect for getting started online.",
		price: 9.99,
		features: [
			"10GB Storage",
			"25GB Bandwidth",
			"Easy to use website builder",
			"Free SSL certificate",
		],
	},
	{
		name: "Business Plan",
		description:
			"Perfect for growing businesses and online stores. Packed with features to help you scale your business.",
		price: 19.99,
		features: [
			"50GB Storage",
			"100GB Bandwidth",
			"Free domain name",
			"E-commerce tools",
			"24/7 customer support",
		],
	},
	{
		name: "Enterprise Plan",
		description:
			"Designed for high-traffic websites and applications. Get the power and performance you need for your business.",
		price: 49.99,
		features: [
			"Unlimited Storage",
			"Unlimited Bandwidth",
			"Dedicated IP Address",
			"Scalable cloud infrastructure",
			"24/7 enterprise-grade support",
		],
	},
];

const Category = () => {
	return (
		<Collapsible className="border dark:border-primary rounded-md shadow-sm ">
			<CollapsibleTrigger className="flex rounded-t-md w-full md:max-w-[400px] items-center justify-between px-4 py-3 mb-2 bg-gray-100 dark:bg-gray-800 border-b border-r md:rounded-br-3xl">
				<div className="flex items-center gap-2">
					<BoxesIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
					<h3 className="font-semibold">Server</h3>
				</div>
				<div>
					<Button
						size="sm"
						variant="ghost"
					>
						Manage
						<ArrowRightIcon className="ml-2 h-4 w-4" />
					</Button>
				</div>
			</CollapsibleTrigger>

			<CollapsibleContent className="px-4 py-3 ransition-all duration-300 ease-in-out">
				{mockProducts.map((item) => (
					<Product
						key={item.name}
						data={item}
					/>
				))}
			</CollapsibleContent>
		</Collapsible>
	);
};

export default Category;
