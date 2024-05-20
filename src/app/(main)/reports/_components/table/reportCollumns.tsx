"use client";

// import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from "@/components/common/table/data-table-column-header";
import { Checkbox } from "@/components/ui/checkbox";
import { formatCurrency, formatDate } from "@/lib/utils";
import { Report } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { ReportDataTableRowActions } from "./reportRowAction";

export const reportColumns: ColumnDef<Report>[] = [
	// todo Make batch actions!!
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
				className="translate-y-[2px]"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
				className="translate-y-[2px]"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},

	{
		accessorKey: "title",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Title"
			/>
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<Link
						href={`/reports/${row.getValue("title")}?id=${row.getValue("id")}`}
					>
						<span className="max-w-[200px] truncate font-medium hover:underline">
							{row.getValue("title")}
						</span>
					</Link>
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
				<div className="flex space-x-2">
					<span className="max-w-[200px] truncate font-medium">
						{row.getValue("description")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "month",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Period"
			/>
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<span className="max-w-[200px] truncate font-medium">
						{formatDate(row.getValue("month"))}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "net",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Net Gross"
			/>
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<span className="max-w-[200px] truncate font-medium">
						{formatCurrency(row.getValue("net"))}
					</span>
				</div>
			);
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
		cell: ({ row }) => <ReportDataTableRowActions row={row} />,
	},
	{
		accessorKey: "id",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title=""
				hidden
			/>
		),
		cell: ({ row }) => (
			<div className="max-w-[50px] truncate hidden">{row.getValue("id")}</div>
		),
		enableSorting: false,
		enableHiding: true,
	},
];
