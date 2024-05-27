import { Button } from "@/components/ui/button";
import { ViewIcon } from "lucide-react";
import DashboardCardWrapper from "./DashboardCardWrapper";

type TodoItemProps = { id: string; label: string; completed?: boolean };

const ToDoList = () => {
	return (
		<DashboardCardWrapper
			title="Tasks"
			href="/tasks"
		>
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
			<ViewIcon className="w-5 h-5 text-gray-500" />
			<span className="sr-only">View Task</span>
		</Button>
	</div>
);

export default ToDoList;
