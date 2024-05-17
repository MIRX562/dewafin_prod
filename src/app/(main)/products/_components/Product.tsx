import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ArrowRightIcon, PackageIcon } from "lucide-react";
import Package from "./Package";

interface Product {
	name: string;
	description: string;
	price: number;
	features: string[]; // Array of features
}
const mockSubProducts = [
	{
		name: "Starter",
		description: "Starter plan for small websites and blogs.",
		price: 9.99,
		specs: ["10GB Storage", "25GB Bandwidth", "1 MySQL Database"],
		mainFeatures: [
			"Easy to use website builder",
			"Drag-and-drop functionality",
			"Free SSL certificate",
		],
		additionalFeatures: [
			"24/7 customer support",
			"Daily backups",
			"Free domain name for the first year",
		],
	},
	{
		name: "Business",
		description: "Business plan for growing businesses and online stores.",
		price: 19.99,
		specs: ["50GB Storage", "100GB Bandwidth", "5 MySQL Databases"],
		mainFeatures: [
			"All Starter features",
			"Free domain name for life",
			"Unlimited email accounts",
			"E-commerce tools",
		],
		additionalFeatures: [
			"24/7 priority customer support",
			"Free SSL certificate with wildcard support",
			"Advanced security features",
		],
	},
	{
		name: "Enterprise",
		description: "Enterprise plan for high-traffic websites and applications.",
		price: 49.99,
		specs: [
			"Unlimited Storage",
			"Unlimited Bandwidth",
			"Dedicated IP Address",
			"10 MySQL Databases",
		],
		mainFeatures: [
			"All Business features",
			"Scalable cloud infrastructure",
			"Customizable server configurations",
			"24/7 enterprise-grade support",
		],
		additionalFeatures: [
			"Free CDN (Content Delivery Network)",
			"Advanced load balancing",
			"Real-time performance monitoring",
		],
	},
];

const Product = ({ data }: { data: Product }) => {
	const { name, description, price, features } = data;

	const renderFeatures = () => (
		<ul className="list-disc pl-4">
			{features.map((feature) => (
				<li key={feature}>{feature}</li>
			))}
		</ul>
	);

	return (
		<Collapsible className="border rounded-md shadow-sm my-2">
			<CollapsibleTrigger className="w-full rounded-l-md md:max-w-[300px] flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800">
				<div className="flex items-center gap-2">
					<PackageIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
					<h4 className="font-medium">{name}</h4>
				</div>
				<div>
					<Button
						size="sm"
						variant="ghost"
					>
						Manage <ArrowRightIcon className="ml-2 h-4 w-4" />
					</Button>
				</div>
			</CollapsibleTrigger>
			<CollapsibleContent className="px-4 py-3 ransition-all duration-300 ease-in-out">
				<div>
					<p>{description}</p>
					<div className="flex flex-col space-y-2 mt-2">
						<div>
							<span className="font-medium">Price:</span> ${price.toFixed(2)}
						</div>
						<div>
							<span className="font-medium">Feature:</span>
							{features.length > 0 && renderFeatures()}
						</div>
						<div>
							<span className="font-medium">Sub Products:</span>
							{mockSubProducts.map((item) => (
								<Package
									key={item.name}
									data={item}
								/>
							))}
						</div>
					</div>
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
};

export default Product;
