"use client";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { getCategoriesById } from "@/data/product";
import { deleteCategoryToast } from "@/lib/toasts";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { CategoryProps } from "../_components/CategoryList";
import ProductList from "../_components/ProductList";
import {
	AddProductButton,
	DeleteCategoryButton,
	EditCategoryButton,
} from "../_components/ProductsButton";

const CategoryPage: React.FC<{ params: { category: string } }> = ({
	params,
}) => {
	const searchParams = useSearchParams();
	const id = searchParams.get("id");
	const [data, setData] = useState<CategoryProps | null>(null);
	const [searchQuery, setSearchQuery] = useState<string>("");
	const router = useRouter();

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

	const memoizedData = useMemo(() => {
		if (!data) return null;

		const query = searchQuery.toLowerCase();
		const filteredProducts = data.products
			.map((product) => {
				const filteredPackages = product.packages.filter((pkg) =>
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
			.filter(
				(product): product is (typeof data.products)[0] => product !== null
			);

		return {
			...data,
			products: filteredProducts,
		};
	}, [data, searchQuery]);

	if (!id) return null;
	if (!memoizedData) {
		return (
			<div className="flex flex-col gap-4 w-full h-full items-center justify-center">
				<p>No data exists yet!</p>
				<AddProductButton id={id} />
			</div>
		);
	}

	const handleDelete = async () => {
		await deleteCategoryToast(memoizedData.id, () => {
			router.back();
		});
	};

	return (
		<div className="flex flex-1 flex-col gap-2 md:gap-4">
			<div className="flex flex-col gap-2">
				<div className="flex items-center justify-between gap-2">
					<h1 className="text-3xl font-bold">{memoizedData.name}</h1>
					<div className="flex gap-2">
						<EditCategoryButton category={memoizedData} />
						<DeleteCategoryButton onClick={handleDelete} />
					</div>
				</div>
				<Separator />
			</div>
			<div className="flex items-center justify-between gap-2">
				<div className="relative w-full max-w-md">
					<SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
					<Input
						className="w-full pl-10 pr-4 py-2 rounded-md shadow-sm border focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
						placeholder={`Search ${params.category} Product...`}
						type="search"
						value={searchQuery}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setSearchQuery(e.target.value)
						}
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

export default CategoryPage;
