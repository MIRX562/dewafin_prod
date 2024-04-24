"use client";

// import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from "@/components/dataTable/ColumnHeader/data-table-column-header";
import { CustomerDataTableRowActions } from "./data-table-row-actions";
import { ColumnDef } from "@tanstack/react-table";
import { Employee } from "@prisma/client";
import { state } from "@/types/data-table";
import { cn } from "@/lib/utils";

export const employeeColumns: ColumnDef<Employee>[] = [
	//todo Make batch actions
	// {
	// 	id: 'select',
	// 	header: ({ table }) => (
	// 		<Checkbox
	// 			checked={
	// 				table.getIsAllPageRowsSelected() ||
	// 				(table.getIsSomePageRowsSelected() && 'indeterminate')
	// 			}
	// 			onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
	// 			aria-label='Select all'
	// 			className='translate-y-[2px]'
	// 		/>
	// 	),
	// 	cell: ({ row }) => (
	// 		<Checkbox
	// 			checked={row.getIsSelected()}
	// 			onCheckedChange={(value) => row.toggleSelected(!!value)}
	// 			aria-label='Select row'
	// 			className='translate-y-[2px]'
	// 		/>
	// 	),
	// 	enableSorting: false,
	// 	enableHiding: false,
	// },
	{
		accessorKey: "id",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Id"
			/>
		),
		cell: ({ row }) => (
			<div className="max-w-[50px] truncate">{row.getValue("id")}</div>
		),
		enableSorting: false,
		enableHiding: true,
	},
	{
		accessorKey: "firstName",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="First Name"
			/>
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<span className="max-w-[200px] truncate font-medium">
						{row.getValue("firstName")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "lastName",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Last Name"
			/>
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<span className="max-w-[200px] truncate font-medium">
						{row.getValue("lastName")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "email",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Email"
			/>
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<span className="max-w-[200px] truncate font-medium">
						{row.getValue("email")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "phoneNumber",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Phone No."
			/>
		),
		cell: ({ row }) => {
			return (
				<div className="flex items-center space-x-2">
					<span className="max-w-[100px] truncate font-medium">
						{row.getValue("phoneNumber")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "role",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Role"
			/>
		),
		cell: ({ row }) => {
			return (
				<div className="flex items-center">
					<span>{row.getValue("role")}</span>
				</div>
			);
		},
	},
	{
		accessorKey: "department",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Department"
			/>
		),
		cell: ({ row }) => {
			return (
				<div className="flex items-center">
					<span>{row.getValue("department")}</span>
				</div>
			);
		},
	},
	{
		accessorKey: "isActive",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Status"
			/>
		),
		cell: ({ row }) => {
			const isActive = state.find(
				(isActive) => isActive.value === row.getValue("isActive")
			);

			if (!isActive) {
				return null;
			}

			return (
				<div className="flex w-[100px] items-center">
					{isActive.icon && (
						<isActive.icon
							className={cn(
								"mr-2 h-4 w-4 text-muted-foreground",
								isActive.value === true ? "text-emerald-300" : "text-rose-300"
							)}
						/>
					)}
					<span>{isActive.label}</span>
				</div>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "hireDate",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Joined At"
			/>
		),
		cell: ({ row }) => {
			return (
				<div className="flex items-center">
					<span>{row.original.hireDate.toLocaleDateString()}</span>
				</div>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		id: "actions",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Actions"
			/>
		),
		cell: ({ row }) => <CustomerDataTableRowActions row={row} />,
	},
];