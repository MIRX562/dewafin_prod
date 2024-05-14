import DialogButton from "@/components/common/buttons/DialogButton";
import { getDateRangeString } from "@/lib/utils";
import { Task } from "@prisma/client";
import { CalendarDaysIcon } from "lucide-react";

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
				{tasks.map((rask, index: number) => (
					<div
						key={index}
						className="cursor-pointer rounded-md bg-gray-100 p-3 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
					>
						<h4 className="font-semibold">{rask.title}</h4>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							{rask.description}
						</p>
						<div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
							<CalendarDaysIcon className="h-4 w-4" />
							<span>{getDateRangeString(rask.startDate, rask.endDate)}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TodoList;
