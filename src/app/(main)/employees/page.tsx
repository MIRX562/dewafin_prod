import Loading from "@/app/loading";
import TableExportButton from "@/components/common/buttons/TableExportButton";
import PageToolbar from "@/components/common/tool/PageToolbar";
import { Suspense } from "react";
import AddEmployeeButton from "./_components/addEmployeeButton";
import EmployeesTable from "./_components/table/employeesTable";

export default async function EmployeesPage() {
	return (
		<div className="h-full flex-1 flex-col p-1 flex">
			<PageToolbar>
				<TableExportButton table="employee" />
				<AddEmployeeButton />
			</PageToolbar>
			<Suspense fallback={<Loading />}>
				<EmployeesTable />
			</Suspense>
		</div>
	);
}
