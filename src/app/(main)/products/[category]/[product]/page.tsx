"use client";
import Loading from "@/app/loading";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { getProductsById } from "@/data/product";
import { SearchIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import PackageList from "../../_components/PackageList";
import { ProductListProps } from "../../_components/ProductList";
import { AddPackageButton } from "../../_components/ProductsButton";

const ProductPage: React.FC<{ params: { product: string } }> = ({ params }) => {
	const searchParams = useSearchParams();
	const id = searchParams.get("id");

	const [data, setData] = useState<ProductListProps>();
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (id) {
			getProductsById(id)
				.then((fetchedData) => {
					//@ts-ignore
					setData(fetchedData);
				})
				.catch((error) => {})
				.finally(() => {
					setLoading(false);
				});
		} else {
			setLoading(false);
		}
	}, [id]);

	if (!id) {
		return null;
	}

	if (loading) {
		return (
			<div className="flex flex-col gap-4 w-full h-full items-center justify-center">
				<Loading />
			</div>
		);
	}

	if (!data) {
		return (
			<div className="flex flex-col gap-4 w-full h-full items-center justify-center">
				<p>No data exists yet!</p>
				<AddPackageButton id={id} />
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex items-center justify-between mb-6 gap-2 md:gap-4">
				<div className="relative w-full max-w-md">
					<SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
					<Input
						className="w-full pl-10 pr-4 py-2 rounded-md shadow-sm border focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
						placeholder={`Search ${params.product} package...`}
						type="search"
					/>
				</div>
				<AddPackageButton id={id} />
			</div>
			<div>
				<p>{data.description}</p>
			</div>
			<div className="grid gap-6">
				{data.packages.map((packageItem) => (
					<React.Fragment key={packageItem.id}>
						<PackageList data={packageItem} />
						<Separator />
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default ProductPage;
