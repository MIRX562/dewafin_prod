import {
	getGroupedTasksByStatus,
	getGroupedTasksByStatusByUserId,
} from "@/data/task";
import { currentUser } from "@/lib/sessionUser";
import TaskBoard from "./TaskBoard";

const TaskView = async () => {
	const user = await currentUser();
	if (!user) return;
	const task =
		user.role === "ADMIN"
			? await getGroupedTasksByStatus()
			: await getGroupedTasksByStatusByUserId(user.id || "");
	if (!task) {
		return;
	}
	return (
		<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			<TaskBoard
				title="To Do"
				tasks={task.TODO || []}
			/>
			<TaskBoard
				title="In Progress"
				tasks={task.IN_PROGRESS || []}
			/>
			<TaskBoard
				title="Done"
				tasks={task.FINISHED || []}
			/>
		</div>
	);
};

export default TaskView;
