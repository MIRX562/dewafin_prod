"use client";
import { Input } from "@/components/ui/input";
import { getCategoriesById } from "@/data/product";
import { SearchIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { CategoryProps } from "../_components/CategoryList";
import ProductList from "../_components/ProductList";
import { AddProductButton } from "../_components/ProductsButton";

const ProductPage: React.FC<{ params: { category: string } }> = ({
	params,
}) => {
	const searchParams = useSearchParams();
	const id = searchParams.get("id");
	const [data, setData] = useState<CategoryProps | null>(null);

	const memoizedData = useMemo(() => data, [data]);

	useEffect(() => {
		if (id) {
			const fetchData = async () => {
				try {
					const fetchedData = await getCategoriesById(id);
					setData(fetchedData);
				} catch (error) {
					console.error("Error fetching data:", error);
					setData(null);
				}
			};
			fetchData();
		}
	}, [id]);

	if (!id) return null;
	if (!memoizedData) {
		return (
			<div className="flex flex-col gap-4 w-full h-full items-center justify-center">
				<p>No data exists yet!</p>
				<AddProductButton id={id} />
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex items-center justify-between mb-6 gap-2">
				<div className="relative w-full max-w-md">
					<SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
					<Input
						className="w-full pl-10 pr-4 py-2 rounded-md shadow-sm border focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
						placeholder={`Search ${params.category} Product...`}
						type="search"
					/>
				</div>
				<AddProductButton id={id} />
			</div>
			<div className="grid gap-6">
				{memoizedData.products.map((product) => (
					<ProductList
						key={product.id}
						data={product}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductPage;
