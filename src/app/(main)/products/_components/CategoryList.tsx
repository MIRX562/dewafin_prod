import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Category } from "@prisma/client";
import { ArrowBigDownIcon, ArrowRightIcon, BoxesIcon } from "lucide-react";
import Link from "next/link";
import ProductList, { ProductListProps } from "./ProductList";

export interface CategoryProps extends Category {
	products: ProductListProps[]; // Array of features
}

const CategoryList = ({ data }: { data: CategoryProps }) => {
	return (
		<Collapsible className="border dark:border-primary rounded-md shadow-sm ">
			<CollapsibleTrigger className="flex justify-between items-center w-full">
				<div className="flex rounded-t-md w-full md:max-w-[400px] items-center  justify-between px-4 py-3 mb-2 bg-gray-100 dark:bg-gray-800 border-b border-r rounded-br-3xl rounded-tr-none">
					<div className="flex w-full items-center gap-2">
						<BoxesIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
						<h3 className="font-semibold">{data.name}</h3>
					</div>
					<ArrowBigDownIcon />
				</div>
				<Link
					href={`/products/${data.name}?id=${data.id}`}
					className="flex items-center justify-end mr-2"
				>
					<Button
						size="sm"
						variant="ghost"
					>
						Manage
						<ArrowRightIcon className="ml-2 h-4 w-4" />
					</Button>
				</Link>
			</CollapsibleTrigger>

			<CollapsibleContent className="px-4 py-3 transition-all duration-300 ease-in-out">
				{data.products.map((product) => (
					<ProductList
						key={product.id}
						data={product}
					/>
				))}
			</CollapsibleContent>
		</Collapsible>
	);
};

export default CategoryList;
