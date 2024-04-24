import { ScaleLoader } from "react-spinners";
import EmployeesTable from "./employees-table";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default async function EmployeesPage() {
	return (
		<>
			<div className="h-full max-w-full flex-1 flex-col space-y-8 p-4 flex ">
				<div className="flex items-center justify-between space-y-2">
					<h2 className="text-2xl font-bold tracking-tight">Implement tools</h2>
					<p className="text-muted-foreground">User Management Functions</p>
				</div>
				<Suspense fallback={<Loading />}>
					<EmployeesTable />
				</Suspense>
			</div>
		</>
	);
}
