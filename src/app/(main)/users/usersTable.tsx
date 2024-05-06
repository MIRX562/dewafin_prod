import { DataTable } from "@/components/dataTable/DataTable";
import { getUsers } from "@/data/user";
import { userColumns } from "./userColumns";

export default async function UsersTable() {
	const users = await getUsers();
	return (
		<DataTable
			data={users as any}
			columns={userColumns as any}
		/>
	);
}
