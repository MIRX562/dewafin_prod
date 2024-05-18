"use client";

// import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from "@/components/common/table/data-table-column-header";
import { formatDate, formatFileSize } from "@/lib/utils";
import { File } from "@/schemas/file";
import { MimeType, mimeTypes } from "@/types/fileType";
import { ColumnDef } from "@tanstack/react-table";
import { FileDataTableRowActions } from "./fileRowAction";

export const fileColumns: ColumnDef<File>[] = [
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
		accessorKey: "name",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Name"
			/>
		),
		cell: ({ row }) => {
			const mtype: MimeType | undefined = mimeTypes.find(
				(entry) => entry.mime === row.getValue("mimeType")
			);

			return (
				<div className="flex items-center space-x-2">
					{mtype && <mtype.icon className="w-8 h-8 text-primary" />}
					<span className="max-w-[200px] md:max-w-none truncate font-medium">
						{row.getValue("name")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "mimeType",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Type"
			/>
		),
		cell: ({ row }) => {
			const mtype: MimeType | undefined = mimeTypes.find(
				(entry) => entry.mime === row.getValue("mimeType")
			);

			return (
				<div className="flex items-center space-x-2">
					<span className="max-w-[100px] truncate font-medium">
						{mtype?.extension}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "size",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Size"
			/>
		),
		cell: ({ row }) => {
			return (
				<div className="flex items-center">
					<span>{formatFileSize(row.getValue("size"))}</span>
				</div>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "createdAt",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Uploaded"
			/>
		),
		cell: ({ row }) => {
			return (
				<div className="flex items-center">
					<span>{formatDate(row.getValue("createdAt"))}</span>
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
		cell: ({ row }) => <FileDataTableRowActions row={row} />,
	},
];
