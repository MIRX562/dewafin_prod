'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DataTableViewOptions } from '../data-table-view-options';

import { priorities, statuses } from '@/types/data-table';
import { DataTableFacetedFilter } from '../FacetedFilter/data-table-faceted-filter';

interface DataTableToolbarProps<TData> {
	table: Table<TData>;
}

export function DataTableToolbar<TData>({
	table,
}: DataTableToolbarProps<TData>) {
	const isFiltered = table.getState().columnFilters.length > 0;

	return (
		<div className='flex flex-col md:flex-row space-y-2 md:space-y-0  items-center justify-between'>
			<div className='flex flex-1 w-full items-center space-x-2 md:mr-2'>
				<Input
					placeholder='Search User...'
					value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
					onChange={(event) =>
						table.getColumn('title')?.setFilterValue(event.target.value)
					}
					className='h-8 w-full md:w[200px] lg:w-[250px]'
				/>
				{isFiltered && (
					<Button
						variant='ghost'
						onClick={() => table.resetColumnFilters()}
						className='h-8 px-2 lg:px-3'>
						Reset
						<Cross2Icon className='ml-2 h-4 w-4' />
					</Button>
				)}
			</div>
			<div className='w-full flex items-center justify-between'>
				{table.getColumn('status') && (
					<DataTableFacetedFilter
						column={table.getColumn('status')}
						title='Status'
						options={statuses}
					/>
				)}
				{table.getColumn('priority') && (
					<DataTableFacetedFilter
						column={table.getColumn('priority')}
						title='Priority'
						options={priorities}
					/>
				)}
				<DataTableViewOptions table={table} />
			</div>
		</div>
	);
}
