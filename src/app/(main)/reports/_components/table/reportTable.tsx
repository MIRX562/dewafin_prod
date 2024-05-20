import { getReports } from "@/data/report";
import { ReportDataTable } from "./DataTable";
import { reportColumns } from "./reportCollumns";

const ReportTable = async () => {
	const reports = await getReports();
	if (!reports) return;
	return (
		<div className="overflow-x-auto">
			<ReportDataTable
				data={reports}
				columns={reportColumns}
			/>
		</div>
	);
};

export default ReportTable;
