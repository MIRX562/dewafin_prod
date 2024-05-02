import { DataTable } from "@/components/dataTable/DataTable";
import { getUsers } from "@/data/user";
import { userColumns } from "./userColumns";

const UsersTable = async () => {
	const users = await getUsers();

	return (
		<div className="overflow-x-auto">
			<DataTable
				data={users as any}
				columns={userColumns as any}
			/>
		</div>
	);
};

export default UsersTable;
