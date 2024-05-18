import Loading from "@/app/loading";
import RoleGate from "@/components/auth/access/RoleGate";
import TableExportButton from "@/components/common/buttons/TableExportButton";
import PageToolbar from "@/components/common/tool/PageToolbar";
import { Suspense } from "react";
import AddUserButton from "./_components/addUserButton";
import UsersTable from "./_components/table/usersTable";

export default async function UserPage() {
	return (
		<RoleGate allowedRole="ADMIN">
			<div className="h-full flex-1 flex-col p-1 flex ">
				<PageToolbar>
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
