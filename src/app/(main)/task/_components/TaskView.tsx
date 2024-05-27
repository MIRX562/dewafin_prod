"use client";

import DialogButton from "@/components/common/buttons/DialogButton";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Department } from "@prisma/client";
import { useEffect, useState } from "react";
import AddTaskForm from "./forms/AddTaskForm";
import TaskBoard from "./TaskBoard";

const TaskView = ({ tasks }: { tasks: any }) => {
	const [searchQuery, setSearchQuery] = useState("");
	const [department, setDepartment] = useState<string | null>(null);
	const [filteredTasks, setFilteredTasks] = useState({
		TODO: [],
		IN_PROGRESS: [],
		FINISHED: [],
	});

	useEffect(() => {
		if (tasks) {
			const filterTasks = (taskList: any) => {
				const query = searchQuery.toLowerCase();
				return taskList.filter(
					(task: any) =>
						task.title.toLowerCase().includes(query) &&
						(department ? task.employee.department === department : true)
				);
			};

			setFilteredTasks({
				TODO: filterTasks(tasks.TODO || []),
				IN_PROGRESS: filterTasks(tasks.IN_PROGRESS || []),
				FINISHED: filterTasks(tasks.FINISHED || []),
			});
		}
	}, [searchQuery, department, tasks]);

	if (!tasks) {
		return <p>Loading...</p>;
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col md:flex-row gap-4">
				<Input
					type="text"
					placeholder="Search tasks..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="border p-2 rounded-md"
				/>
				<Select onValueChange={(value) => setDepartment(value)}>
					<SelectTrigger>
						<SelectValue placeholder="All Departments" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value=" ">All Departments</SelectItem>
						<SelectItem value={Department.Management}>Management</SelectItem>
						<SelectItem value={Department.Administration}>
							Administration
						</SelectItem>
						<SelectItem value={Department.Customer_Support}>
							Customer Support
						</SelectItem>
						<SelectItem value={Department.Sales_Marketing}>
							Sales & Marketing
						</SelectItem>
						<SelectItem value={Department.Technical_Support}>
							Technical Support
						</SelectItem>
					</SelectContent>
				</Select>
				<DialogButton title="Add Task">
					<AddTaskForm />
				</DialogButton>
			</div>
			<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				<TaskBoard
					title="To Do"
					tasks={filteredTasks.TODO}
				/>
				<TaskBoard
					title="In Progress"
					tasks={filteredTasks.IN_PROGRESS}
				/>
				<TaskBoard
					title="Done"
					tasks={filteredTasks.FINISHED}
				/>
			</div>
		</div>
	);
};

export default TaskView;
