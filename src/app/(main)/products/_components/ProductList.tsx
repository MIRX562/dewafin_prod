"use client";
import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { getCategoryById } from "@/data/product";
import { Package, Product } from "@prisma/client";
import { ArrowDownIcon, BoxIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import PackageList from "./PackageList";

export interface ProductListProps extends Product {
	packages: Package[];
}

const ProductList = ({ data }: { data: ProductListProps }) => {
	const { name, description, id, categoryId } = data;
	const [category, setCategory] = useState<{ name: string } | null>(null);

	useEffect(() => {
		const fetchCategory = async () => {
			if (categoryId) {
				const fetchedCategory = await getCategoryById(categoryId);
				setCategory(fetchedCategory);
			}
		};

		fetchCategory();
	}, [categoryId]);

	if (!categoryId || !category) return null;

	return (
		<Collapsible className="border rounded-md shadow-sm my-2">
			<CollapsibleTrigger className="flex justify-between items-center w-full">
				<div className="flex rounded-t-md w-full md:max-w-[400px] items-center justify-between px-4 py-3 mb-2 bg-gray-100 dark:bg-gray-800 border-b border-r rounded-br-3xl rounded-tr-none">
					<div className="flex w-full items-center gap-2">
						<BoxIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
						<h3 className="font-semibold">{name}</h3>
					</div>
					<ArrowDownIcon />
				</div>
				<Link
					href={`/products/${category.name}/${name}?id=${id}`}
					className="flex items-center justify-end mr-2"
				>
					<Button
						size="sm"
						variant="ghost"
					>
						Manage
					</Button>
				</Link>
			</CollapsibleTrigger>
			<CollapsibleContent className="px-4 py-3 ransition-all duration-300 ease-in-out">
				<div>
					<p>{description}</p>
					<div className="flex flex-col space-y-2 mt-2">
						<div>
							<span className="font-medium">Sub Products:</span>
							{data.packages.map((item) => (
								<PackageList
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

export default ProductList;
