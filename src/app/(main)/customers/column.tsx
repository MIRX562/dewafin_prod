"use client";

// import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from "@/components/dataTable/ColumnHeader/data-table-column-header";
import { CustomerDataTableRowActions } from "./data-table-row-actions";
import { ColumnDef } from "@tanstack/react-table";
import { Customer } from "@prisma/client";

export const customerColumns: ColumnDef<Customer>[] = [
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
      <DataTableColumnHeader column={column} title="Id" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[50px] truncate">{row.getValue("id")}</div>
    ),
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
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
    accessorKey: "phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone No." />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-2">
          <span className="max-w-[100px] truncate font-medium">
            {row.getValue("phone")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>{row.getValue("address")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "website",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Website" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>{row.getValue("website")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "taxId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="taxId" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>{row.getValue("taxId")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "notes",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Note" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>{row.getValue("notes")}</span>
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
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => <CustomerDataTableRowActions row={row} />,
  },
];
