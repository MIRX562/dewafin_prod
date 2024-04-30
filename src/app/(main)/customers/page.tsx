import Loading from "@/app/loading";
import { Suspense } from "react";
import CustomerTable from "./customerTable";

export default async function UserPage() {
	return (
		<div className="h-full max-w-full flex-1 flex-col space-y-8 p-4 flex ">
			<div className="flex items-center justify-between space-y-2">
				<h2 className="text-2xl font-bold tracking-tight">Implement tools</h2>
				<p className="text-muted-foreground">User Management Functions</p>
			</div>
			<Suspense fallback={<Loading />}>
				<CustomerTable />
			</Suspense>
		</div>
	);
}
