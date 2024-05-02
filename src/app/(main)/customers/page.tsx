import Loading from "@/app/loading";
import PageToolbar from "@/components/pageToolbar/PageToolbar";
import { Suspense } from "react";
import AddCustomerButton from "./addCustomerButton";
import CustomerTable from "./customerTable";

export default async function UserPage() {
	return (
		<div className="h-full max-w-full flex-1 flex-col space-y-8 p-4 flex ">
			<div className="flex items-center justify-between space-y-2">
				<PageToolbar title="Customer Management">
					<AddCustomerButton />
				</PageToolbar>
			</div>
			<Suspense fallback={<Loading />}>
				<CustomerTable />
			</Suspense>
		</div>
	);
}
