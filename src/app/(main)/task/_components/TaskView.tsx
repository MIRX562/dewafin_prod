"use client";
import DialogButton from "@/components/common/buttons/DialogButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Department } from "@prisma/client";
import { ArchiveIcon } from "lucide-react";
import Link from "next/link";
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

	const handleDepartmentChange = (value: string) => {
		if (value === " ") {
			setDepartment(null); // Reset department filter
		} else {
			setDepartment(value);
		}
	};

	if (!tasks) {
		return <p>Loading...</p>;
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col md:flex-row gap-4 justify-between">
				<Input
					type="text"
					placeholder="Search tasks..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="border p-2 rounded-md max-w-md"
				/>
				<div className="flex items-center justify-end gap-2">
					<Select onValueChange={handleDepartmentChange}>
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
					<Link href="/task/archived">
						<Button
							variant="secondary"
							className="flex gap-2"
						>
							<ArchiveIcon className="w-4 h-4" />
							Archived
						</Button>
					</Link>
					<DialogButton title="Add Task">
						<AddTaskForm />
					</DialogButton>
				</div>
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
