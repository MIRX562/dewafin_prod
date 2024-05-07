import { DataTable } from "@/components/dataTable/DataTable";
import { getCustomers } from "@/data/customer";
import { customerColumns } from "./customerColumn";

const CustomerTable = async () => {
	const customer = await getCustomers();

	return (
		<div className="">
			<DataTable
				data={customer as any}
				columns={customerColumns}
			/>
		</div>
	);
};

export default CustomerTable;
