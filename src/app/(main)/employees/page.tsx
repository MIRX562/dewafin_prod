import Loading from "@/app/loading";
import PageToolbar from "@/components/pageToolbar/PageToolbar";
import TableExportButton from "@/components/tableData/TableExportButton";
import TableImportButton from "@/components/tableData/TableImportButton";
import { Suspense } from "react";
import AddEmployeeButton from "./addEmployeeButton";
import EmployeesTable from "./employeesTable";

export default async function EmployeesPage() {
	return (
		<div className="h-full flex flex-col">
			<div className="h-full w-full flex-1 flex-col space-y-3 flex overflow-y-auto">
				<PageToolbar>
					<TableImportButton />
					<TableExportButton table="employee" />
					<AddEmployeeButton />
				</PageToolbar>
				<Suspense fallback={<Loading />}>
					<EmployeesTable />
				</Suspense>
			</div>
		</div>
	);
}
