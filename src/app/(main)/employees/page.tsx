import Loading from "@/app/loading";
import PageToolbar from "@/components/pageToolbar/PageToolbar";
import { Suspense } from "react";
import AddEmployeeButton from "./addEmployeeButton";
import EmployeesTable from "./employees-table";

export default async function EmployeesPage() {
	return (
		<>
			<div className="h-full max-w-full flex-1 flex-col space-y-8 p-4 flex ">
				<PageToolbar title="Employee Management Area">
					<AddEmployeeButton />
				</PageToolbar>
				<Suspense fallback={<Loading />}>
					<EmployeesTable />
				</Suspense>
			</div>
		</>
	);
}
