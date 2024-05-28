import { getArchivedTask } from "@/data/task";
import { archivedTaskColumns } from "./archivedTaskCollumn";
import { ArchivedTaskDataTable } from "./DataTable";

export default async function ArchivedTaskTable() {
	const files = await getArchivedTask();
	if (!files) return;
	return (
		<ArchivedTaskDataTable
			data={files}
			columns={archivedTaskColumns}
		/>
	);
}
