import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { formatCurrency, parseCurrency } from "@/lib/utils";
import { BoxIcon, ChevronDownIcon } from "lucide-react";

const PackageList = ({ data }: { data: any }) => {
	const {
		name,
		description,
		price,
		specification,
		mainFeature,
		additionalFeature,
	} = data;

	const renderFeatures = (features: any) => (
		<ul className="list-disc pl-4">
			{Array.isArray(features) ? (
				features.map((feature, index) => <li key={index}>{feature}</li>)
			) : (
				<li>{features}</li>
			)}
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
				<div className="px-4 py-2 transition-all duration-300 ease-in-out bg-gray-100 rounded-md dark:bg-gray-800 border border-primary mb-2">
					<p>
						<span className="font-medium">Price:</span>
						{formatCurrency(parseCurrency(price))}
					</p>
					<p>{description}</p>
					<Separator />
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
						<div className="flex flex-col">
							<div>
								<span className="font-medium">Specs:</span>
							</div>
							{specification && specification.length > 0 ? (
								<div className="mt-1">{renderFeatures(specification)}</div>
							) : (
								<p className="text-gray-500 dark:text-gray-400">
									No Specs Provided
								</p>
							)}
						</div>
						<div>
							<span className="font-medium">Main Features:</span>
							{mainFeature && mainFeature.length > 0 ? (
								<ul className="list-disc pl-4 mt-1">
									{mainFeature.map((feature: string, index: number) => (
										<li key={index}>{feature}</li>
									))}
								</ul>
							) : (
								<p className="text-gray-500 dark:text-gray-400">
									No Main Features Provided
								</p>
							)}
						</div>
						<div>
							<span className="font-medium">Additional Features:</span>
							{additionalFeature && additionalFeature.length > 0 ? (
								renderFeatures(additionalFeature)
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

export default PackageList;
