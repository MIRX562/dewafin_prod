"use client";

import { Input } from "@/components/ui/input";
import { getAllCategories } from "@/data/product";
import { Category, Product } from "@prisma/client";
import { SearchIcon } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import CategoryList from "./_components/CategoryList";
import { AddCategoryButton } from "./_components/ProductsButton";

export default function ProductPage() {
	const [data, setData] = useState<any[]>([]);
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [filteredData, setFilteredData] = useState<any[]>([]);

	useEffect(() => {
		async function fetchData() {
			const categories = await getAllCategories();
			//@ts-ignore
			setData(categories);
			//@ts-ignore
			setFilteredData(categories);
		}
		fetchData();
	}, []);

	useEffect(() => {
		const filterData = () => {
			const query = searchQuery.toLowerCase();

			return data
				.map((category) => {
					const filteredProducts = category.products
						.map((product: any) => {
							const filteredPackages = product.packages.filter((pkg: any) =>
								pkg.name.toLowerCase().includes(query)
							);

							if (
								filteredPackages.length > 0 ||
								product.name.toLowerCase().includes(query)
							) {
								return {
									...product,
									packages: filteredPackages,
								};
							}

							return null;
						})
						.filter((product: any): product is Product => product !== null);

					if (
						filteredProducts.length > 0 ||
						category.name.toLowerCase().includes(query)
					) {
						return {
							...category,
							products: filteredProducts,
						};
					}

					return null;
				})
				.filter((category): category is Category => category !== null);
		};

		setFilteredData(filterData());
	}, [searchQuery, data]);

	if (!data || data.length <= 0) {
		return (
			<div className="flex flex-col gap-4 w-full h-full items-center justify-center">
				<p>No data exists yet!</p>
				<AddCategoryButton />
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex items-center justify-between mb-6 gap-2">
				<div className="relative w-full max-w-md">
					<SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
					<Input
						className="w-full pl-10 pr-4 py-2 rounded-md shadow-sm border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
						placeholder="Search category, product, or package..."
						type="search"
						value={searchQuery}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setSearchQuery(e.target.value)
						}
					/>
				</div>
				<AddCategoryButton />
			</div>
			<div className="grid gap-6">
				{filteredData.length > 0 ? (
					filteredData.map((category) => (
						<CategoryList
							key={category.id}
							data={category}
						/>
					))
				) : (
					<p>No categories found</p>
				)}
			</div>
		</div>
	);
}
