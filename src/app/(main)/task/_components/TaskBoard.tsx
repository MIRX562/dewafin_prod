import DialogButton from "@/components/common/buttons/DialogButton";
import { Task } from "@prisma/client";
import TaskCard from "./TaskCard";

type Props = {
	title: string;
	tasks: Task[];
};

const TodoList = ({ title, tasks }: Props) => {
	return (
		<div className="border shadow-sm rounded-lg">
			<div className="flex items-center justify-between border-b px-4 py-3">
				<h3 className="font-semibold">{title}</h3>
				<DialogButton title="+">l</DialogButton>
			</div>
			<div className="p-4 space-y-2 overflow-auto max-h-[400px]">
				{tasks.map((task, index: number) => (
					<TaskCard
						key={index}
						task={task}
					/>
				))}
			</div>
		</div>
	);
};

export default TodoList;
