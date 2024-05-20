import Loading from "@/app/loading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon, SearchIcon } from "lucide-react";
import { Suspense } from "react";
import Category from "./_components/Category";

export default async function ProductPage() {
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
				<Button size="sm">
					<PlusIcon className="mr-2 h-4 w-4" />
					Add Category
				</Button>
			</div>
			<div className="grid gap-6">
				<Suspense fallback={<Loading />}>
					<Category />
					<Category />
					<Category />
					<Category />
					<Category />
					<Category />
					<Category />
					<Category />
					<Category />
					<Category />
					<Category />
					<Category />
					<Category />
					<Category />
					<Category />
				</Suspense>
			</div>
		</div>
	);
}
