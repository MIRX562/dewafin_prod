import { getArchivedTask } from "@/data/task";
import { currentUser } from "@/lib/sessionUser";
import { archivedTaskColumns } from "./archivedTaskCollumn";
import { ArchivedTaskDataTable } from "./DataTable";

export default async function ArchivedTaskTable() {
	const user = await currentUser();
	if (!user) return;
	const files = await getArchivedTask(user.id, user.employeeId);
	if (!files) return;
	return (
		<ArchivedTaskDataTable
			data={files}
			columns={archivedTaskColumns}
		/>
	);
}
