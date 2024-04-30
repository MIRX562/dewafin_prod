import { DataTable } from "@/components/dataTable/DataTable";
import { getCustomers } from "@/data/customer";
import { customerColumns } from "./column";

const CustomerTable = async () => {
	const customer = await getCustomers();

	return (
		<div className="overflow-x-auto">
			<DataTable
				data={customer as any}
				columns={customerColumns}
			/>
		</div>
	);
};

export default CustomerTable;
