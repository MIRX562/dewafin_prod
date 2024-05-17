import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TrashIcon } from "lucide-react";
import DashboardCardWrapper from "./DashboardCardWrapper";

type TodoItemProps = { id: string; label: string; completed?: boolean };

const ToDoList = () => {
	return (
		<DashboardCardWrapper
			title="Tasks"
			href="/tasks"
		>
			<TaskItem
				id="task-1"
				label="Finish the project proposal"
			/>
			<TaskItem
				id="task-2"
				label="Schedule team meeting"
				completed
			/>
			<TaskItem
				id="task-3"
				label="Review the design mockups"
			/>
			<TaskItem
				id="task-1"
				label="Finish the project proposal"
			/>
			<TaskItem
				id="task-2"
				label="Schedule team meeting"
				completed
			/>
			<TaskItem
				id="task-3"
				label="Review the design mockups"
			/>
			<TaskItem
				id="task-1"
				label="Finish the project proposal"
			/>
			<TaskItem
				id="task-2"
				label="Schedule team meeting"
				completed
			/>
			<TaskItem
				id="task-3"
				label="Review the design mockups"
			/>
			<TaskItem
				id="task-1"
				label="Finish the project proposal"
			/>
			<TaskItem
				id="task-2"
				label="Schedule team meeting"
				completed
			/>
			<TaskItem
				id="task-3"
				label="Review the design mockups"
			/>
		</DashboardCardWrapper>
	);
};

const TaskItem = ({ id, label, completed = false }: TodoItemProps) => (
	<div className="flex items-center gap-2">
		<Checkbox
			id={id}
			defaultChecked={completed}
		/>
		<label
			className={`flex-1 ${completed ? "line-through text-gray-500" : ""}`}
			htmlFor={id}
		>
			{label}
		</label>
		<Button
			size="icon"
			variant="ghost"
		>
			<TrashIcon className="w-5 h-5 text-gray-500" />
			<span className="sr-only">Delete Task</span>
		</Button>
	</div>
);

export default ToDoList;
