import Loading from "@/app/loading";
import RoleGate from "@/components/authComponents/roleGate/RoleGate";
import PageToolbar from "@/components/pageToolbar/PageToolbar";
import TableExportButton from "@/components/tableData/TableExportButton";
import TableImportButton from "@/components/tableData/TableImportButton";
import { Suspense } from "react";
import AddUserButton from "./addUserButton";
import UsersTable from "./usersTable";

export default async function UserPage() {
	return (
		<RoleGate allowedRole="ADMIN">
			<div className="h-full max-w-full flex-1 flex-col space-y-2 lg:space-y-6 p-4 flex ">
				<PageToolbar title="User Management Area">
					<TableImportButton />
					<TableExportButton table="user" />
					<AddUserButton />
				</PageToolbar>
				<Suspense fallback={<Loading />}>
					<UsersTable />
				</Suspense>
			</div>
		</RoleGate>
	);
}
