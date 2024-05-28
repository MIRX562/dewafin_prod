"use client";

// import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from "@/components/common/table/data-table-column-header";
import { formatDate } from "@/lib/utils";
import { Task } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArchivedTaskTableRowActions } from "./archivedTaskRowAction";

export const archivedTaskColumns: ColumnDef<Task>[] = [
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
		accessorKey: "title",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Task"
			/>
		),
		cell: ({ row }) => {
			return (
				<div className="flex items-center space-x-2">
					<span className="max-w-[200px] md:max-w-none truncate font-medium">
						{row.getValue("title")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "description",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Description"
			/>
		),
		cell: ({ row }) => {
			return (
				<div className="flex items-center space-x-2">
					<span className="max-w-[100px] truncate font-medium">
						{row.getValue("description")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "reportUrl",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Report"
			/>
		),
		cell: ({ row }) => {
			return (
				<div className="flex items-center">
					<a href={row.getValue("reportUrl")}>{row.getValue("reportUrl")}</a>
				</div>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "updatedAt",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Archived At"
			/>
		),
		cell: ({ row }) => {
			return (
				<div className="flex items-center">
					<span>{formatDate(row.getValue("updatedAt"))}</span>
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
				className="text-right"
			/>
		),
		cell: ({ row }) => <ArchivedTaskTableRowActions row={row} />,
	},
];
