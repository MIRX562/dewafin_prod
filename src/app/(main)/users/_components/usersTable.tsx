import { DataTable } from "@/components/common/table/DataTable";
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
