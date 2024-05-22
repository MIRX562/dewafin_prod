import { getTaskByStatus } from "@/data/task";
import { TaskStatus } from "@prisma/client";
import TodoList from "./TaskBoard";

const TaskView = async () => {
	const todo = (await getTaskByStatus(TaskStatus.TODO)) || [];
	const inProgres = (await getTaskByStatus(TaskStatus.IN_PROGRESS)) || [];
	const done = (await getTaskByStatus(TaskStatus.FINISHED)) || [];
	return (
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			<TodoList
				title="To Do"
				tasks={todo}
			/>
			<TodoList
				title="In Progress"
				tasks={inProgres}
			/>
			<TodoList
				title="Done"
				tasks={done}
			/>
		</div>
	);
};

export default TaskView;
