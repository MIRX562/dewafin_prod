import { DataTable } from "@/components/common/table/DataTable";
import { getReportByUserId, getReports } from "@/data/report";
import { currentRole, currentUserId } from "@/lib/sessionUser";

const EmployeesTable = async () => {
	const role = await currentRole();
	const userId = await currentUserId();
	if (!userId) return;
	const reports =
		role !== "MANAGER" ? await getReportByUserId(userId) : await getReports();
	if (!reports) return;

	return (
		<div className="overflow-x-auto">
			<DataTable
				data={}
				columns={}
			/>
		</div>
	);
};

export default EmployeesTable;
