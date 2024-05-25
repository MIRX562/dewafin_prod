import { Input } from "@/components/ui/input";
import { getAllCategories } from "@/data/product";
import { SearchIcon } from "lucide-react";
import CategoryList from "./_components/CategoryList";
import { AddCategoryButton } from "./_components/ProductsButton";

export default async function ProductPage() {
	const data = await getAllCategories();
	if (!data || data.length <= 0) {
		return (
			<div className="flex flex-col gap-4 w-full h-full items-center justify-center">
				<p> no data exist yet!</p>
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
						className="w-full pl-10 pr-4 py-2 rounded-md  shadow-sm border  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 "
						placeholder="Search Product"
						type="search"
					/>
				</div>
				<AddCategoryButton />
			</div>
			<div className="grid gap-6">
				{data?.map((category) => (
					<CategoryList
						key={category.id}
						data={category}
					/>
				))}
			</div>
		</div>
	);
}
