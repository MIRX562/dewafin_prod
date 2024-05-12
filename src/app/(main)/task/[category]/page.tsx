import { promises as fs } from "fs";
import { Metadata } from "next";
import path from "path";
import { z } from "zod";

import { DataTable } from "@/components/common/table/DataTable";
import { Button } from "@/components/ui/button";
import { parseTitle } from "@/lib/utils";
import { columns } from "./_components/columns";
import { taskSchema } from "./data/schema";

export const metadata: Metadata = {
	title: "Tasks",
	description: "Task manager & tracker",
};

// Simulate a database read for tasks.
async function getTasks() {
	const data = await fs.readFile(path.join(process.cwd(), "public/tasks.json"));

	const tasks = JSON.parse(data.toString());

	return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage({
	params,
}: {
	params: { category: string };
}) {
	const tasks = await getTasks();

	return (
		<div className="h-full flex-1 flex-col p-1 flex">
			<div className="flex items-center justify-between space-y-2">
				<div>
					<h2 className="text-2xl font-bold tracking-tight">
						{parseTitle(params.category)} Tasks
					</h2>
				</div>
				<div className="flex items-center space-x-2">
					<Button> add task</Button>
				</div>
			</div>
			<DataTable
				data={tasks}
				columns={columns}
			/>
		</div>
	);
}
