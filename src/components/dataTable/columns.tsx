'use client';

// import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from './ColumnHeader/data-table-column-header';
import { DataTableRowActions } from './RowActions/data-table-row-actions';
import { roles, TwoFactor } from '@/types/data-table';
import { ColumnDef } from '@tanstack/react-table';
import { CircleUser } from 'lucide-react';
import { User } from '@prisma/client';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const columns: ColumnDef<User>[] = [
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
		accessorKey: 'id',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Id' />
		),
		cell: ({ row }) => (
			<div className='max-w-[50px] truncate'>{row.getValue('id')}</div>
		),
		enableSorting: false,
		enableHiding: true,
	},
	{
		accessorKey: 'email',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Email' />
		),
		cell: ({ row }) => {
			return (
				<div className='flex space-x-2'>
					<span className='max-w-[200px] truncate font-medium'>
						{row.getValue('email')}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: 'name',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Name' />
		),
		cell: ({ row }) => {
			const image = row.original.image;

			return (
				<div className='flex items-center space-x-2'>
					{image ? (
						<Image
							src={image}
							alt='profile'
							width={32}
							height={32}
							className='rounded-full border border-primary'
						/>
					) : (
						<CircleUser className='h-8 w-8' />
					)}
					<span className='max-w-[100px] truncate font-medium'>
						{row.getValue('name')}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: 'role',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Role' />
		),
		cell: ({ row }) => {
			const role = roles.find((role) => role.value === row.getValue('role'));

			if (!role) {
				return null;
			}

			return (
				<div className='flex items-center'>
					{role.icon && (
						<role.icon
							className={cn(
								'mr-2 h-4 w-4 text-muted-foreground',
								role.value === 'ADMIN' ? 'text-blue-300' : 'text-violet-300'
							)}
						/>
					)}
					<span>{role.label}</span>
				</div>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},

	{
		accessorKey: 'isTwoFactorEnabled',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='TwoFactor' />
		),
		cell: ({ row }) => {
			const istwofactor = TwoFactor.find(
				(istwofactor) =>
					istwofactor.value === row.getValue('isTwoFactorEnabled')
			);

			if (!istwofactor) {
				return null;
			}

			return (
				<div className='flex w-[100px] items-center'>
					{istwofactor.icon && (
						<istwofactor.icon
							className={cn(
								'mr-2 h-4 w-4 text-muted-foreground',
								istwofactor.value === true
									? 'text-emerald-300'
									: 'text-rose-300'
							)}
						/>
					)}
					<span>{istwofactor.label}</span>
				</div>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		id: 'actions',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Actions' />
		),
		cell: ({ row }) => <DataTableRowActions row={row} />,
	},
];
