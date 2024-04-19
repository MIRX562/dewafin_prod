import { DataTable } from '@/components/dataTable/DataTable';
import { columns } from '@/components/dataTable/columns';
import { userSchema } from '@/schemas/index';
import { getUsers } from '@/data/user';
import { z } from 'zod';

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

export default async function TaskPage() {
	const users = await getUserData();

	return (
		<>
			<div className='h-full max-w-full flex-1 flex-col space-y-8 p-4 flex '>
				<div className='flex items-center justify-between space-y-2'>
					<div>
						<h2 className='text-2xl font-bold tracking-tight'>
							Implement tools
						</h2>
						<p className='text-muted-foreground'>User Management Functions</p>
					</div>
				</div>
				<div className='overflow-x-auto'>
					<DataTable data={users} columns={columns} />
				</div>
			</div>
		</>
	);
}

// ! bug
/**
 * Type mismatch between `ColumnDef<UserTable>[]` and `ColumnDef<{ email: string | null; id: string; name: string | null; image: string | null; role: "ADMIN" | "USER"; isTwoFactorEnabled: boolean; }, unknown>[]`.

The error occurs because `ColumnDef<UserTable>` is incompatible with `ColumnDef<{ email: string | null; id: string; name: string | null; image: string | null; role: "ADMIN" | "USER"; isTwoFactorEnabled: boolean; }, unknown>`.

In particular, `ColumnDefBase<UserTable, unknown> & StringHeaderIdentifier` lacks the required property `accessorFn` which is necessary for `AccessorFnColumnDefBase<{ email: string | null; id: string; name: string | null; image: string | null; role: "ADMIN" | "USER"; isTwoFactorEnabled: boolean; }, unknown>`.

Refer to line 98, column 5 in `types.d.ts` for the declaration of `accessorFn`.

The issue is related to the `columns` property in the `DataTableProps` type, where the expected columns should be `ColumnDef<{ email: string | null; id: string; name: string | null; image: string | null; role: "ADMIN" | "USER"; isTwoFactorEnabled: boolean; }, unknown>[]`.

 * 
 * 
 */
