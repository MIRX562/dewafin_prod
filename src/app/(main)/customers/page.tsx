import Loading from "@/app/loading";
import PageToolbar from "@/components/pageToolbar/PageToolbar";
import TableExportButton from "@/components/tableData/TableExportButton";
import { Suspense } from "react";
import AddCustomerButton from "./addCustomerButton";
import CustomerTable from "./customerTable";

export default async function UserPage() {
	return (
		<div className="h-full max-w-full flex-1 flex-col space-y-8 p-4 flex ">
			<PageToolbar title="Customer Management">
				<TableExportButton table="customer" />
				<AddCustomerButton />
			</PageToolbar>
			<Suspense fallback={<Loading />}>
				<CustomerTable />
			</Suspense>
		</div>
	);
}
