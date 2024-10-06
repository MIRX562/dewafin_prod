"use client";

import { DataTableViewOptions } from "@/components/common/table/data-table-view-options";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

interface DataTableToolbarProps<TData> {
	table: Table<TData>;
}

export function DataTableToolbar<TData>({
	table,
}: DataTableToolbarProps<TData>) {
	const isFiltered = table.getState().globalFilter;

	// Update Input to set a global filter
	const handleGlobalFilterChange = (value: string) => {
		table.setGlobalFilter(value); // Use table's global filter mechanism
	};

	return (
		<div className="flex flex-row space-x-1 items-center justify-between">
			<div className="flex flex-1 w-full items-center space-x-2 md:mr-2">
				<Input
					placeholder="Search..."
					// Value will be the global filter's value
					value={table.getState().globalFilter ?? ""}
					onChange={(event) => handleGlobalFilterChange(event.target.value)}
					className="h-8 w-full md:w[200px] lg:w-[250px]"
				/>
				{isFiltered && (
					<Button
						variant="ghost"
						onClick={() => table.resetGlobalFilter()}
						className="h-8 px-2 lg:px-3"
					>
						Reset
						<Cross2Icon className="ml-2 h-4 w-4" />
					</Button>
				)}
			</div>
			<DataTableViewOptions table={table} />
		</div>
	);
}
