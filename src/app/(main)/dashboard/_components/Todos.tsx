import { Badge } from "@/components/ui/badge";
import { getDashboardTask } from "@/data/dashboard";
import { currentUser } from "@/lib/sessionUser";
import { Priority } from "@prisma/client";
import DashboardCardWrapper from "./DashboardCardWrapper";

type TaskItemProps = {
	title: string;
	priority: string;
	status: string;
};

const ToDoList = async () => {
	const user = await currentUser();
	const data = await getDashboardTask(user?.id, user?.employeeId);

	if (!data) {
		return (
			<div className="flex w-full items-center justify-center">
				<p>No Pending or OnGoing Task</p>
			</div>
		);
	}

	return (
		<DashboardCardWrapper
			title="Latest Tasks"
			href="/tasks"
		>
			{data.map((task) => (
				<TaskItem
					key={task.id}
					title={task.title}
					priority={task.priority}
					status={task.status}
				/>
			))}
		</DashboardCardWrapper>
	);
};

const TaskItem = ({ title, priority, status }: TaskItemProps) => (
	<div className="flex items-center justify-between gap-2 p-2 border-b w-full">
		<label
			className={`flex-1 ${status === "FINISHED" ? "line-through text-gray-500" : ""} ${status === "IN_PROGRESS" ? "font-semibold text-primary" : ""}`}
		>
			{title}
		</label>
		<Badge
			variant={
				priority === Priority.LOW
					? "success"
					: priority === Priority.HIGH
						? "destructive"
						: "default"
			}
		>
			{priority}
		</Badge>
	</div>
);

export default ToDoList;
