import Loading from "@/app/loading";
import DialogButton from "@/components/common/buttons/DialogButton";
import { Suspense } from "react";
import AddTaskForm from "./_components/forms/AddTaskForm";
import TaskView from "./_components/TaskView";

export default async function TaskPage() {
	return (
		<main className="flex flex-1 flex-col gap-4">
			<div className="flex items-center justify-between">
				<h1 className="font-semibold text-lg md:text-2xl">Tasks</h1>
				<DialogButton title="Add Task">
					<AddTaskForm />
				</DialogButton>
			</div>
			<Suspense fallback={<Loading />}>
				<TaskView />
			</Suspense>
		</main>
	);
}
