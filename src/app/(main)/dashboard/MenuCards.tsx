import { FilesIcon, PackageIcon, PieChartIcon, UsersIcon } from "lucide-react";
import Link from "next/link";

const MenuCards = () => {
	return (
		<div className="grid grid-cols-2 gap-6 md:grid-cols-4 col-span-2 lg:col-span-4">
			<Link
				className="group flex flex-col items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700"
				href="#"
			>
				<div className="flex items-center gap-2">
					<FilesIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
					<h3 className="text-lg font-semibold group-hover:text-gray-900 dark:group-hover:text-gray-50">
						Orders
					</h3>
				</div>
				<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
					View and manage your orders.
				</p>
			</Link>
			<Link
				className="group flex flex-col items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700"
				href="#"
			>
				<div className="flex items-center gap-2">
					<UsersIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
					<h3 className="text-lg font-semibold group-hover:text-gray-900 dark:group-hover:text-gray-50">
						Customers
					</h3>
				</div>
				<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
					View and manage your customers.
				</p>
			</Link>
			<Link
				className="group flex flex-col items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700"
				href="#"
			>
				<div className="flex items-center gap-2">
					<PackageIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
					<h3 className="text-lg font-semibold group-hover:text-gray-900 dark:group-hover:text-gray-50">
						Products
					</h3>
				</div>
				<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
					View and manage your products.
				</p>
			</Link>
			<Link
				className="group flex flex-col items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700"
				href="#"
			>
				<div className="flex items-center gap-2">
					<PieChartIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
					<h3 className="text-lg font-semibold group-hover:text-gray-900 dark:group-hover:text-gray-50">
						Analytics
					</h3>
				</div>
				<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
					View and analyze your data.
				</p>
			</Link>
		</div>
	);
};

export default MenuCards;
