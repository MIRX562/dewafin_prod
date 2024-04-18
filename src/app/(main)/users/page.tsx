import { promises as fs } from 'fs';
import path from 'path';
import { Metadata } from 'next';
import Image from 'next/image';
import { z } from 'zod';

import { columns } from '@/components/dataTable/columns';
import { DataTable } from '@/components/dataTable/DataTable';
import { taskSchema } from '@/schemas/index';

//! database Call
async function getTasks() {
	const data = await fs.readFile(
		path.join(process.cwd(), 'src/data/tasks.json')
	);

	const tasks = JSON.parse(data.toString());

	return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
	const tasks = await getTasks();

	return (
		<>
			<div className='h-full max-w-full flex-1 flex-col space-y-8 p-4 flex '>
				<div className='flex items-center justify-between space-y-2'>
					<div>
						<h2 className='text-2xl font-bold tracking-tight'>Welcome back!</h2>
						<p className='text-muted-foreground'>
							Here&apos;s a list of your tasks for this month!
						</p>
					</div>
				</div>
				<div className='flex-grow'>
					<DataTable data={tasks} columns={columns} />
				</div>
			</div>
		</>
	);
}
