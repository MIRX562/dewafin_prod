import DialogButton from "@/components/common/buttons/DialogButton";
import TodoList from "./_components/TaskBoard";

export default function Component() {
	return (
		<main className="flex flex-1 flex-col gap-4">
			<div className="flex items-center justify-between">
				<h1 className="font-semibold text-lg md:text-2xl">Tasks</h1>
				<DialogButton title="Add Task">l</DialogButton>
			</div>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				<TodoList
					title="To Do"
					tasks={[]}
				/>
				<TodoList
					title="In Progress"
					tasks={[]}
				/>
				<TodoList
					title="Done"
					tasks={[]}
				/>
			</div>
		</main>
	);
}
