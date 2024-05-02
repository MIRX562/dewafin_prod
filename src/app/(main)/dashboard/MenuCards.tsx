import { FilesIcon, PackageIcon, PieChartIcon, UsersIcon } from "lucide-react";
import Link from "next/link";

const MenuCards = () => {
  return (
    <div className="grid grid-cols-2 gap-2 lg:gap-6 md:grid-cols-4 col-span-2 lg:col-span-4">
      <Link
        className="group flex flex-col items-start justify-between rounded-lg border-2 border-orange-500 bg-orange-100 p-4 shadow-sm transition-colors hover:bg-orange-200"
        href="#"
      >
        <div className="flex items-center gap-2">
          <FilesIcon className="h-6 w-6 text-orange-500 group-hover:text-orange-700" />
          <h3 className="text-lg font-semibold text-orange-700 group-hover:text-orange-900">
            Orders
          </h3>
        </div>
        <p className="mt-2 text-sm text-orange-700 group-hover:text-orange-900">
          View and manage your orders.
        </p>
      </Link>
      <Link
        className="group flex flex-col items-start justify-between rounded-lg border-2 border-blue-500 bg-blue-100 p-4 shadow-sm transition-colors hover:bg-blue-200"
        href="#"
      >
        <div className="flex items-center gap-2">
          <UsersIcon className="h-6 w-6 text-blue-500 group-hover:text-blue-700" />
          <h3 className="text-lg font-semibold text-blue-700 group-hover:text-blue-900">
            Customers
          </h3>
        </div>
        <p className="mt-2 text-sm text-blue-700 group-hover:text-blue-900">
          View and manage your customers.
        </p>
      </Link>
      <Link
        className="group flex flex-col items-start justify-between rounded-lg border-2 border-green-500 bg-green-100 p-4 shadow-sm transition-colors hover:bg-green-200"
        href="#"
      >
        <div className="flex items-center gap-2">
          <PackageIcon className="h-6 w-6 text-green-500 group-hover:text-green-700" />
          <h3 className="text-lg font-semibold text-green-700 group-hover:text-green-900">
            Products
          </h3>
        </div>
        <p className="mt-2 text-sm text-green-700 group-hover:text-green-900">
          View and manage your products.
        </p>
      </Link>
      <Link
        className="group flex flex-col items-start justify-between rounded-lg border-2 border-purple-500 bg-purple-100 p-4 shadow-sm transition-colors hover:bg-purple-200"
        href="#"
      >
        <div className="flex items-center gap-2">
          <PieChartIcon className="h-6 w-6 text-purple-500 group-hover:text-purple-700" />
          <h3 className="text-lg font-semibold text-purple-700 group-hover:text-purple-900">
            Analytics
          </h3>
        </div>
        <p className="mt-2 text-sm text-purple-700 group-hover:text-purple-900">
          View and analyze your data.
        </p>
      </Link>
    </div>
  );
};

export default MenuCards;
