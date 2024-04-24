import { DataTable } from "@/components/dataTable/DataTable";
import { getEmployees } from "@/data/employee";
import { employeeColumns } from "./column";

export default async function EmployeesPage() {
	const employees = await getEmployees();

	return (
		<>
			<div className="h-full max-w-full flex-1 flex-col space-y-8 p-4 flex ">
				<div className="flex items-center justify-between space-y-2">
					<h2 className="text-2xl font-bold tracking-tight">Implement tools</h2>
					<p className="text-muted-foreground">User Management Functions</p>
				</div>
				<div className="overflow-x-auto">
					<DataTable
						data={employees}
						columns={employeeColumns}
					/>
				</div>
			</div>
		</>
	);
}