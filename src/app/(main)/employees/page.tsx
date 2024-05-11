import Loading from "@/app/loading";
import TableExportButton from "@/components/common/buttons/TableExportButton";
import TableImportButton from "@/components/common/buttons/TableImportButton";
import PageToolbar from "@/components/common/tool/PageToolbar";
import { Suspense } from "react";
import AddEmployeeButton from "./_components/addEmployeeButton";
import EmployeesTable from "./_components/employeesTable";

export default async function EmployeesPage() {
	return (
		<div className="h-full flex flex-col">
			<div className="h-full max-w-full flex-1 flex-col space-y-3 flex ">
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
