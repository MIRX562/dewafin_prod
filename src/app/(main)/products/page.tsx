/**
 * v0 by Vercel.
 * @see https://v0.dev/t/09Rw0OWw8bf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
	ArrowRightIcon,
	BoxesIcon,
	BoxIcon,
	ChevronDownIcon,
	PackageIcon,
	PlusIcon,
	SearchIcon,
} from "lucide-react";

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

// ?---------------------------------------------------------------------------------------------------------------
const CategoryAcordion = () => {
	return (
		<Collapsible className="border rounded-md shadow-sm dark:border-gray-700">
			<CollapsibleTrigger className="flex w-full md:max-w-[400px] items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800">
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
			<CollapsibleContent className="px-4 py-3">
				{mockProducts.map((item) => (
					<ProductAccordion
						key={item.name}
						data={item}
					/>
				))}
			</CollapsibleContent>
		</Collapsible>
	);
};

// ?---------------------------------------------------------------------------------------------------------------
interface Product {
	name: string;
	description: string;
	price: number;
	features: string[]; // Array of features
}

const ProductAccordion = ({ data }: { data: Product }) => {
	const { name, description, price, features } = data;

	const renderFeatures = () => (
		<ul className="list-disc pl-4">
			{features.map((feature) => (
				<li key={feature}>{feature}</li>
			))}
		</ul>
	);

	return (
		<Collapsible className="border rounded-md shadow-sm dark:border-gray-700">
			<CollapsibleTrigger className="w-full md:max-w-[300px] flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800">
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
			<CollapsibleContent className="px-4 py-3">
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
								<SubProductAcordion
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

// ?---------------------------------------------------------------------------------------------------------------
type SubProduct = {
	name: string;
	description: string;
	price: number;
	specs: string[];
	mainFeatures: string[];
	additionalFeatures: string[];
};

const SubProductAcordion = ({ data }: { data: SubProduct }) => {
	const { name, description, price, specs, mainFeatures, additionalFeatures } =
		data;

	const renderFeatures = (features: string[]) => (
		<ul className="list-disc pl-4">
			{features.map((feature) => (
				<li key={feature}>{feature}</li>
			))}
		</ul>
	);

	return (
		<Collapsible className="space-y-2 w-full">
			<CollapsibleTrigger className="flex w-full items-center justify-start gap-1 cursor-pointer">
				<BoxIcon className="h-4 w-4" />
				<div>{name}</div>
				<ChevronDownIcon className="w-5 h-5 transition-transform [&[data-state=open]]:rotate-180" />
			</CollapsibleTrigger>
			<CollapsibleContent>
				<div className="px-4 py-2 bg-gray-100 rounded-md dark:bg-gray-800">
					<p>
						<span className="font-medium">Price:</span> Rp.{price.toFixed(2)}
					</p>
					<p>{description}</p>
					<Separator />
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
						<div className="flex flex-col ">
							<div>
								<span className="font-medium">Specs:</span>
							</div>
							{specs.length > 0 ? (
								<div className="mt-1">{renderFeatures(specs)}</div>
							) : (
								<p className="text-gray-500 dark:text-gray-400">
									No Specs Provided
								</p>
							)}
						</div>
						<div className="">
							<span className="font-medium">Main Features:</span>
							<ul className="list-disc pl-4 mt-1">
								{mainFeatures.map((feature) => (
									<li key={feature}>{feature}</li>
								))}
							</ul>
						</div>
						<div className="">
							<span className="font-medium">Additional Features:</span>
							{additionalFeatures.length > 0 ? (
								renderFeatures(additionalFeatures)
							) : (
								<p className="text-gray-500 dark:text-gray-400">
									No Additional Features
								</p>
							)}
						</div>
					</div>
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
};

// ?---------------------------------------------------------------------------------------------------------------

export default function ProductPage() {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex items-center justify-between mb-6 gap-2">
				<div className="relative w-full max-w-md">
					<SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
					<Input
						className="w-full pl-10 pr-4 py-2 rounded-md bg-white shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200"
						placeholder="Search Product"
						type="search"
					/>
				</div>
				<Button size="sm">
					<PlusIcon className="mr-2 h-4 w-4" />
					Add Category
				</Button>
			</div>
			<div className="grid gap-6">
				<CategoryAcordion />
				<CategoryAcordion />
				<CategoryAcordion />
			</div>
		</div>
	);
}
