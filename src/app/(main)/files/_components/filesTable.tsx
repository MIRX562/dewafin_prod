import { DataTable } from "@/components/common/table/DataTable";
import { getFiles } from "@/data/file";
import { fileColumns } from "./fileColumns";

export default async function FilesTable() {
	const files = await getFiles();
	if (!files) return;
	return (
		<DataTable
			data={files}
			columns={fileColumns}
		/>
	);
}
