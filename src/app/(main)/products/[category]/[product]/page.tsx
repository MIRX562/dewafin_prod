"use client";
import Loading from "@/app/loading";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { getProductsById } from "@/data/product";
import { deleteProductToast } from "@/lib/toasts";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import PackageList from "../../_components/PackageList";
import { ProductListProps } from "../../_components/ProductList";
import {
	AddPackageButton,
	DeleteProductButton,
	EditProductButton,
} from "../../_components/ProductsButton";

const ProductPage: React.FC<{ params: { product: string } }> = ({ params }) => {
	const searchParams = useSearchParams();
	const id = searchParams.get("id");
	const router = useRouter();

	const [data, setData] = useState<ProductListProps>();
	const [loading, setLoading] = useState<boolean>(true);
	const [searchQuery, setSearchQuery] = useState<string>("");

	useEffect(() => {
		if (id) {
			getProductsById(id)
				.then((fetchedData) => {
					//@ts-ignore
					setData(fetchedData);
				})
				.catch((error) => {
					console.error("Error fetching data:", error);
				})
				.finally(() => {
					setLoading(false);
				});
		} else {
			setLoading(false);
		}
	}, [id]);

	const memoizedData = useMemo(() => {
		if (!data) return null;

		const query = searchQuery.toLowerCase();
		const filteredPackages = data.packages.filter((pkg) =>
			pkg.name.toLowerCase().includes(query)
		);

		return {
			...data,
			packages: filteredPackages,
		};
	}, [data, searchQuery]);

	if (!id) return null;

	if (loading) {
		return (
			<div className="flex flex-col gap-4 w-full h-full items-center justify-center">
				<Loading />
			</div>
		);
	}

	if (!memoizedData) {
		return (
			<div className="flex flex-col gap-4 w-full h-full items-center justify-center">
				<p>No data exists yet!</p>
				<AddPackageButton id={id} />
			</div>
		);
	}

	const handleDelete = async () => {
		await deleteProductToast(memoizedData.id, () => {
			router.back();
		});
	};

	return (
		<div className="flex flex-1 flex-col gap-2 md:gap-6">
			<div className="flex flex-col gap-2">
				<div className="flex items-center justify-between gap-2">
					<div>
						<h1 className="text-3xl font-bold">{memoizedData.name}</h1>
						<p>{memoizedData.description}</p>
					</div>
					<div className="flex gap-2">
						<EditProductButton product={memoizedData} />
						<DeleteProductButton onClick={handleDelete} />
					</div>
				</div>
				<Separator />
			</div>
			<div className="flex items-center justify-between gap-2 md:gap-4">
				<div className="relative w-full max-w-md">
					<SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
					<Input
						className="w-full pl-10 pr-4 py-2 rounded-md shadow-sm border focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
						placeholder={`Search ${params.product} package...`}
						type="search"
						value={searchQuery}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setSearchQuery(e.target.value)
						}
					/>
				</div>
				<AddPackageButton id={id} />
			</div>

			<div className="flex flex-col gap-6">
				{memoizedData.packages.map((packageItem) => (
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
