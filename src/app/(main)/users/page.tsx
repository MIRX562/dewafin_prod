import RoleGate from "@/components/authComponents/roleGate/RoleGate";
import { DataTable } from "@/components/dataTable/DataTable";
import { userColumns } from "@/app/(main)/users/columns";
import { userSchema } from "@/schemas/index";
import { getUsers } from "@/data/user";
import { z } from "zod";
import { Suspense } from "react";
import Loading from "@/app/loading";

async function getUserData() {
	// Fetch the user data
	const data = await getUsers();

	// Parse the data using the user schema
	const parsedData = z.array(userSchema).parse(data);

	// Map the data to ensure `email` property is either `string` or `null`
	const formattedData = parsedData.map((user) => ({
		...user,
		email: user.email ?? null, // Convert `undefined` to `null`
	}));

	// Return the formatted data
	return formattedData;
}

export default async function UserPage() {
	const users = await getUserData();

	return (
		<RoleGate allowedRole="ADMIN">
			<div className="h-full max-w-full flex-1 flex-col space-y-8 p-4 flex ">
				<div className="flex items-center justify-between space-x-2">
					<h2 className="text-2xl font-bold tracking-tight">Implement tools</h2>
					<p className="text-muted-foreground">User Management Functions</p>
				</div>
				<Suspense fallback={<Loading />}>
					<div className="overflow-x-auto">
						<DataTable
							data={users}
							columns={userColumns as any}
						/>
					</div>
				</Suspense>
			</div>
		</RoleGate>
	);
}
