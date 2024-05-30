import { TaskWithRelations } from "@/data/task";
import TaskCard from "./TaskCard";

type Props = {
	title: string;
	tasks: TaskWithRelations[];
};

const TaskBoard = ({ title, tasks }: Props) => {
	console.log(tasks);
	return (
		<div className="border shadow-sm rounded-lg flex flex-col">
			<div className="border-b px-4 py-3 bg-slate-300 dark:bg-slate-800 rounded-t-lg">
				<h3 className="font-semibold">{title}</h3>
			</div>
			<div className="p-4 flex flex-col gap-2 overflow-auto max-h-[20svh] md:max-h-[80svh]">
				{tasks.map((task) => (
					<TaskCard
						key={task.id}
						task={task}
					/>
				))}
			</div>
		</div>
	);
};

export default TaskBoard;
